// talk.js
// ========
var Talk = function Talk(name, duration) {
    this.name = name;
    this.duration = duration;

    if ( !(this instanceof Talk) )
    {
        return new Talk(name, duration);
    }
};

Talk.prototype = {
    toString: function() {
        return (this.name + ' ' + this.duration);
    }
};

module.exports = Talk;