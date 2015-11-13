// Talk.js
// ========
var Talk = function Talk( description ) {
    this.description = description;
    this.duration = getTalkLength( description );

    if ( !(this instanceof Talk) ) {
        return new Talk(description);
    }

    // @private
    // @throws Exception
    function getTalkLength ( description ) {
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
    }
};

module.exports = Talk;