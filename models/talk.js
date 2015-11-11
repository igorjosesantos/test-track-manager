// talk.js
// ========
var Talk = function Talk(description) {
    this.description = description;

    if ( !(this instanceof Talk) ) {
        return new Talk(name, duration);
    }
};

Talk.prototype = {
    toString: function() {
        return this.description;
    },
    getTitle: function() {
        return this.description.match(/\w+/,'gi');
    },
    getDuration: function() {
        return this.description.match(/\d+/);
    }
};

module.exports = Talk;