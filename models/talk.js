// Talk.js
// ========
var Talk = function Talk( description ) {
    this.description = description;
    this.duration = extractDuration( description );

    if ( !(this instanceof Talk) ) {
        return new Talk(description);
    }

    // @private
    // @throws Exception
    function extractDuration ( description ) {
        try {
            var match = description.match(/(\d+min|lightning)/);
            var duration = match[0].split(/min/);
            return duration[0].replace(/(?:(^lightning))/, 5);
        }
        catch (exception) {
            throw exception;
        }
    }
};

Talk.prototype = {
    // @overwrite
    toString: function() {
        return this.description;
    },
    getDuration: function() {
        return this.duration;
    }
};

module.exports = Talk;