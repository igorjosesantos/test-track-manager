// schedule.js
// ========
var Track = require(__dirname + '/app/model/track.js');

var Schedule = function Schedule() {
    this.talks = [];
    this.schedule = [];

    if ( !(this instanceof Schedule) ) {
        return new Schedule();
    }
};

Schedule.prototype = {
    addTalk: function(talk) {
        this.talks.push(talk);
        return this;
    },
    getTalks: function() {
        return this.talks;
    },
    listTalks: function() {
        console.log(this.getTalks());
        return this;
    },
    setSchedule: function(schedule) {
        this.schedule.push(schedule);
        return this;
    },
    getSchedule: function() {
        console.log(this.schedule);
        return this;
    },
    generateSchedule: function() {
        var self = this;
        self.talks.forEach( function (talk) {
            self.setSchedule({
                time: new Date,
                title: talk.getTitle(),
                duration: talk.getDuration()
            });
        });
        return this;
    }
};

module.exports = Schedule;