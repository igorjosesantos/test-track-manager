// schedule.js
// ========
var Schedule = function Schedule(name, tracks) {
    this.name = name;
    this.tracks = tracks || [];

    if (!(this instanceof Schedule)) {
        return new Schedule(name, duration);
    }
};

Schedule.prototype = {
    toString: function() {
        return this.name;
    },
    addTrack: function(track) {
        this.tracks.push(track);
    },
    addTracks: function(tracks) {
        if (Array.isArray(tracks))
            this.tracks.push.apply(this.tracks, tracks);
    },
    getTracks: function() {
        return this.tracks;
    },
    getSchedule: function() {
        // TODO
        return 'getSchedule()';
    }
};

module.exports = Schedule;