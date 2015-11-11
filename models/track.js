// track.js
// ========
var Track = function Track(number, schedule) {
    this.name = 'Track '+ number;
    this.schedule = schedule.join('\n');

    if ( !(this instanceof Track) ) {
        return new Track(number, schedule);
    }
};

Track.prototype = {
    toString: function() {
        return (this.name + ':\n' + this.schedule + '\n');
    },

};

module.exports = Track;