// Writing Fast Tests Against Enterprise Rails 60min | lightning
(function () {

    var Polyfill        = require(__dirname + '/app/helper/polyfill.js');
    var DataFileReader  = require(__dirname + '/app/helper/dataFileReader.js');
    var InputValidation = require(__dirname + '/app/helper/inputValidation.js');

    // listen (start app with node app.js filename.txt)
    // ================================================
    function applicationRun () {
        console.log('\nRunning application...\n');

        // Check incompatibility
        Polyfill.check();

        // Validate input arguments
        InputValidation.check( process );

        // Read the file and organize contents.
        DataFileReader.read( process.argv[2] );

        console.log('\nDone!\n');
    }

    applicationRun();
})();