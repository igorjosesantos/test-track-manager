// inputValidation.js
// ========
var InputValidation = {
    check: function ( process ) {
        if (process.argv.length < 3) {
            console.error('\nA input file was not provided properly!');
            console.log('\nUsage: node ' + process.argv[1] + ' <FILENAME>.txt');
            process.exit(1);
        }
    }
}
module.exports = InputValidation;