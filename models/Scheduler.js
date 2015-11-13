// Scheduler.js
// ========
// var PrototypeClone = register('/helpers/PrototypeClone.js');
var DateHelper     = register('/helpers/DateHelper.js');
var Track          = register('/models/Track.js');

var Scheduler = function Scheduler() {
    this.tracks = [];
    this.talks = [];

    if ( !(this instanceof Scheduler) ) {
        return new Scheduler();
    }
};

Scheduler.prototype = {
    addTalk: function( talk ) {
        this.talks.push(talk);
    },
    addTrack: function( track ) {
        this.tracks.push(track);
    },
    print: function() {
        // for (var i = this.tracks.length - 1; i >= 0; i--) {
            // console.log( this.tracks[i].toString() );
        // }
    },
    generate: function() {
        var Scheduler = this;
        var startTime = new Date();

        var Morning = { starts: 9, ends: 12 },
            Afternoon = { starts: 13, ends: 16 },
            Networking = { starts: 16, ends: 17 };

        var trackCounter = 0, trackSchedule = [];

        this.talks.forEach( function ( talk ) {

            var schedule;
            var description = talk.toString();

            if (!trackSchedule.length)
            {
                startTime = DateHelper.resetHour(startTime, Morning.starts);
            }
            else {
                var checkTime = startTime.getHours();

                if (checkTime >= Morning.ends && checkTime < Afternoon.starts)
                {
                    startTime = DateHelper.resetHour(startTime, Morning.ends);

                    description = ' Lunch ======';

                    trackSchedule.push( DateHelper.formatAs12hour( startTime ) + description );

                    startTime = DateHelper.resetHour(startTime, Afternoon.starts);
                }
                else if (checkTime >= Afternoon.ends && checkTime < Networking.ends)
                {
                    startTime = DateHelper.resetHour(startTime, Networking.ends);

                    description = ' Networking Event ======';

                    trackSchedule.push( DateHelper.formatAs12hour( startTime ) + description );

                    Scheduler.addTrack( new Track(++trackCounter, trackSchedule) );

                    trackSchedule = []; return;
                }

            }

            trackSchedule.push( DateHelper.formatAs12hour( startTime ) + ' ' + description );

            startTime = DateHelper.addMinutes( startTime, talk.duration );

        });
            // console.log(trackSchedule);

        // var trackSchedule = [
        //     '09:00AM Writing Fast Tests Against Enterprise Rails 60min',
        //     '10:00AM Overdoing it in Python 45min',
        //     '10:45AM Lua for the Masses 30min',
        //     '11:15AM Ruby Errors from Mismatched Gem Versions 45min',
        //     '12:00PM Lunch',
        //     '01:00PM Ruby on Rails: Why We Should Move On 60min',
        //     '02:00PM Common Ruby Errors 45min',
        //     '02:45PM Pair Programming vs Noise 45min',
        //     '03:30PM Programming in the Boondocks of Seattle 30min',
        //     '04:00PM Ruby vs. Clojure for Back-End Development 30min',
        //     '04:30PM User Interface CSS in Rails Apps 30min',
        //     '05:00PM Networking Event'
        // ];

        // this.tracks.push( new Track(++trackCounter, trackSchedule) );

        return this;
    }
};

module.exports = Scheduler;