// app.js
// ========
(function () {

    // set up globals
    // ================================================
    global.register = function (filename) {
        var dependency = require("path").resolve(__dirname + filename);
        return require( dependency );
    }

    // configuration and load dependencies
    // ================================================
    var ScheduleWorker = register('/services/ScheduleWorker.js');
    var InputValidator = register('/helpers/InputValidator.js');

    // listen (start app with "node app.js data.txt")
    // ================================================
    function Run () {
        // console.log('Running application...\n');

        InputValidator.check( process ); // Validate input arguments

        new ScheduleWorker( process.argv[2] ).start(); // Read the file and organize contents.
    }

    Run();

})();