// Scheduler.js
// ========
var DateTime = register('/helpers/DateTime.js');
var Track    = register('/models/Track.js');
var Talk     = register('/models/Talk.js');

var Scheduler = function Scheduler() {
    this.trackSequence = 0;
    this.schedule = [];
    this.tracks   = [];
    this.talks    = [];
    this.date     = startDate();

    if ( !(this instanceof Scheduler) ) {
        return new Scheduler();
    }

    function startDate() {
        var date = new Date();
        // Start today at 9:00AM
        return new Date(date.getFullYear(), date.getMonth(), date.getDay(), 9, 0, 0, 0);
    }
};

Scheduler.prototype = {
    addTalk: function( talk ) {
        this.talks.push( talk );
    },
    addTrack: function( track ) {
        this.tracks.push( track );
    },
    clearSchedule: function( talk ) {
        this.schedule = [];
    },
    addToSchedule: function( time, talk ) {
        this.schedule.push( time + ' ' + talk );
    },
    getBaseDate: function() {
        return this.date;
    },
    print: function() {
        for (var i in this.tracks) {
            console.log( this.tracks[i].toString() );
        }
    },
    generate: function() {
        var Scheduler = this;

        var LunchBreak = {
            duration: 60, starts: 12, ends: 13, description: 'Lunch'
        };
        var NetworkingEvent = {
            duration: 60, starts: 16, ends: 17, description: 'Networking Event'
        };

        var startTime = Scheduler.getBaseDate();
        // Clear the schedule to load for the first Track
        Scheduler.clearSchedule();
        // Reverse data to maintain input order
        Scheduler.talks = Scheduler.talks.reverse();

        // Do the dirty work...
        for (var i = Scheduler.talks.length - 1; i >= 0; i--) {

            // Lunch Time
            var breakTime = DateTime.add( startTime, Scheduler.talks[i].duration );
            if (breakTime.getHours() >= LunchBreak.starts && breakTime.getHours() < LunchBreak.ends)
            {
                breakTime.setMinutes(0);
                // Schedule Lunch
                Scheduler.addToSchedule( DateTime.format( breakTime ), LunchBreak.description );
                // Increase time based on event length
                startTime.setMinutes(0);
                startTime = DateTime.add( breakTime, LunchBreak.duration );
            }

            // Networking Time
            if (startTime.getHours() >= NetworkingEvent.starts && startTime.getHours() < NetworkingEvent.ends)
            {
                // Schedule Networking Time
                Scheduler.addToSchedule( DateTime.format( startTime ), NetworkingEvent.description );
                // Increase time based on event length
                startTime = DateTime.add( startTime, NetworkingEvent.duration );
                // Set the Track and clear others
                Scheduler.addTrack( new Track( ++Scheduler.trackSequence, Scheduler.schedule ) );
                // Clear the schedule for the next Track
                Scheduler.clearSchedule();
                // Reset Time For Loop
                startTime = Scheduler.getBaseDate();
            }

            // Schedule Talks
            Scheduler.addToSchedule( DateTime.format( startTime ), Scheduler.talks[i].description );
            // Increase time based on Talk length
            startTime = DateTime.add( startTime, Scheduler.talks[i].duration );
        }

        // If contain remaining talks, create another track.
        if (Scheduler.schedule.length > 0) {
            Scheduler.addTrack( new Track( ++Scheduler.trackSequence, Scheduler.schedule ) );
            Scheduler.clearSchedule();
        }

        return this;
    }
};

module.exports = Scheduler;