// Talk.js
// ========
var Talk = function Talk(description) {
    this.description = description;

    var regexMatch = null;

    regexMatch = description.split(/(\d+min|lightning)/);
    this.title = Array.isArray(regexMatch) ? regexMatch[0].trim() : '';

    regexMatch = description.match(/(\d+min|lightning)/);
    this.duration = Array.isArray(regexMatch) ? regexMatch[0] : '';

    regexMatch = this.duration.split(/(min|lightning)/);
    this.time = Array.isArray(regexMatch) ? regexMatch[0] : 0;

    if ( !(this instanceof Talk) ) {
        return new Talk(description);
    }
};

Talk.prototype = {
    getTitle: function() {
        return this.title;
    },
    getTime: function() {
        return this.time;
    },
    getDuration: function() {
        return this.duration;
    },
    getDescription: function() {
        return this.description;
    }
};

module.exports = Talk;