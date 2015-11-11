// schedule.js
// ========
var Track = register('/models/track.js');

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

        this.talks.forEach( function (talk) {

            // self.setSchedule({
            //     hours: new Date(),
            //     title: talk.getTitle(),
            //     time: talk.getTime(),
            //     duration: talk.getDuration()
            // });

        });
        return this;
    }
};

module.exports = Schedule;