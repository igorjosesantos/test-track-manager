// talk.js
// ========
var Talk = function Talk(description) {
    this.talkDescription = description;

    var regexMatch = null;

    regexMatch = description.split(/(\d+min|lightning)/);
    this.talkTitle = Array.isArray(regexMatch) ? regexMatch[0].trim() : '';

    regexMatch = description.match(/(\d+min|lightning)/);
    this.talkLength = Array.isArray(regexMatch) ? regexMatch[0] : '';

    regexMatch = this.talkLength.split(/(min|lightning)/);
    this.talkTime = Array.isArray(regexMatch) ? regexMatch[0] : 0;

    if ( !(this instanceof Talk) ) {
        return new Talk(description);
    }
};

Talk.prototype = {
    getTitle: function() {
        return this.talkTitle;
    },
    getTime: function() {
        return this.talkTime;
    },
    getDuration: function() {
        return this.talkLength;
    },
    getDescription: function() {
        return this.talkDescription;
    }
};

module.exports = Talk;