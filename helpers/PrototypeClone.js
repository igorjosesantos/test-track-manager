// DateFormat.js
// ========
var PrototypeClone = {
    return {
        if ( Object.prototype.toString.call(this) === '[object Array]' ) {
            var clone = [];
            for (var i = this.length - 1; i >= 0; i--)
                clone[i] = this[i].clone();

            return clone;
        }
        else if ( typeof( this ) == "object" ) {
            var clone = {};
            for (var prop in this)
                if (this.hasOwnProperty(prop))
                    clone[prop] = this[prop].clone();

            return clone;
        }
        else
            return this;
    }
}

Object.prototype.clone = PrototypeClone;
Array.prototype.clone = PrototypeClone;
module.exports = PrototypeClone;
