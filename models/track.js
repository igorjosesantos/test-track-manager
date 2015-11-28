// Track.js
// ========
var Track = function Track( id, schedule ) {
    this.name = assignName( id );
    this.schedule = assignSchedule( schedule );

    if ( !(this instanceof Track) ) {
        return new Track(number, schedule);
    }

    // @private
    function assignName ( id ) {
        return 'Track ' + id;
    }

    // @private
    function assignSchedule ( schedule ) {
        return schedule.join('\n');
    }
};

Track.prototype = {
    // @overwrite
    toString: function() {
        return (this.name + ':\n' + this.schedule + '\n');
    }
};

module.exports = Track;
