var DateTime = register('/helpers/DateTime.js');
var Track    = register('/models/Track.js');
var Talk     = register('/models/Talk.js');

var Scheduler = function Scheduler() {
    this.trackSequence = 0;
    this.schedule = [];
    this.tracks   = [];
    this.talks    = [];
    this.baseDate = buildBaseDateTime();
    this.startTime = buildBaseDateTime();

    if ( !(this instanceof Scheduler) ) {
        return new Scheduler();
    }

    function buildBaseDateTime() {
        var date = new Date();
        return new Date(date.getFullYear(), date.getMonth(), date.getDay(), 9, 0, 0, 0);
    }
};

Scheduler.prototype = {
    addTalk: function(talk) {
        this.talks.push(talk);
    },
    createTrack: function() {
        this.tracks.push(new Track( ++this.trackSequence, this.schedule ));
    },
    clearSchedule: function(talk) {
        this.schedule = [];
    },
    addToSchedule: function(talk) {
        var newTalk = DateTime.format(this.startTime)+' '+ talk;
        this.schedule.push(newTalk);
    },
    resetStartTime: function(onlyMinutes) {
        if (onlyMinutes) {
            this.startTime.setMinutes(0);
        } else {
            this.startTime = this.baseDate;
        }
    },
    updateStartTime: function(minutesToAdd) {
        this.startTime = this.addMinutes(minutesToAdd);
    },
    addMinutes: function(minutesToAdd) {
        return DateTime.add(this.startTime, minutesToAdd);
    },
    checkAndScheduleLunch: function (talkDuration) {
        this.updateStartTime(talkDuration);
        if (this.startTime.getHours() >= 12 && this.startTime.getHours() < 13) {
            this.resetStartTime(true);
            this.addToSchedule('Lunch');
            this.updateStartTime(60);
        } else {
            this.updateStartTime(-talkDuration);
        }
    },
    checkAndScheduleNetworkingEvent: function (talkDuration) {
        if (this.startTime.getHours() >= 16 && this.startTime.getHours() < 17) {
            this.addToSchedule('Networking Event');
            this.createTrack();
            this.clearSchedule();
            this.resetStartTime();
        }
    },
    print: function() {
        for (var i in this.tracks) {
            console.log( this.tracks[i].toString() );
        }
    },
    generate: function() {
        this.clearSchedule();
        this.talks = this.talks.reverse();

        for (var i = this.talks.length - 1; i >= 0; i--) {
            var talk = this.talks[i];
            this.checkAndScheduleLunch(talk.duration);
            this.checkAndScheduleNetworkingEvent(talk.duration);
            this.addToSchedule(talk.description);
            this.updateStartTime(talk.duration);
        }

        if (this.schedule.length > 0) {
            this.createTrack();
        }

        return this;
    }
};

module.exports = Scheduler;