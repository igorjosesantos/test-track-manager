// polyfill.js
// ========
var Polyfill = {
    check: function () {
        if (!Array.isArray) {
            Array.isArray = function(arg) {
                return Object.prototype.toString.call(arg) === '[object Array]';
            };
        }
    }
}
module.exports = Polyfill;