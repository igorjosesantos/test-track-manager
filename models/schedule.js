// schedule.js
// ========
var Track = register('/models/track.js');

var Schedule = function Schedule() {
    this.talks = [];
    this.tracks = [];
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
    showTracks: function() {
        this.tracks.forEach( function (track) {
            console.log( track.toString() );
        });
    },
    generateSchedule: function() {
        // var self = this;
        var schedule = [
            '09:00AM Writing Fast Tests Against Enterprise Rails 60min',
            '10:00AM Overdoing it in Python 45min',
            '10:45AM Lua for the Masses 30min',
            '11:15AM Ruby Errors from Mismatched Gem Versions 45min',
            '12:00PM Lunch',
            '01:00PM Ruby on Rails: Why We Should Move On 60min',
            '02:00PM Common Ruby Errors 45min',
            '02:45PM Pair Programming vs Noise 45min',
            '03:30PM Programming in the Boondocks of Seattle 30min',
            '04:00PM Ruby vs. Clojure for Back-End Development 30min',
            '04:30PM User Interface CSS in Rails Apps 30min',
            '05:00PM Networking Event'
        ];
        // this.talks.forEach( function (talk) {

        //     scheduleTasks.push( talk.getDescription() );
        //     //     hours: new Date(),
        //     //     title: talk.getTitle(),
        //     //     time: talk.getTime(),
        //     //     duration: talk.getDuration()
        //     // });

        // });
        this.tracks.push( new Track(1, schedule) );
        this.tracks.push( new Track(2, schedule) );
        this.tracks.push( new Track(3, schedule) );
    }
};

module.exports = Schedule;