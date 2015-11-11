// track.js
// ========
var Track = function Track(name, duration) {
    this.name = name;
    this.duration = duration;

    if ( !(this instanceof Track) ) {
        return new Track(name, duration);
    }
};

Track.prototype = {
    toString: function() {
        return (this.name + ' ' + this.duration);
    }
};

module.exports = Track;