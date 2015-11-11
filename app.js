// Writing Fast Tests Against Enterprise Rails 60min | lightning

(function () {
    console.log('Running:: Conference Track Management App');

    // set up
    // ================================================
    var Polyfill    = require("./helper/polyfill.js");
    var Schedule    = require("./model/schedule.js");
    var Track       = require("./model/track.js");
    var Talk        = require("./model/talk.js");

    // configuration
    // ================================================
    // new BufferedReader(filename, { encoding: 'utf8' })
    //     .on ('error', function (error) {
    //         console.log ('error: ' + error);
    //     })
    //     .on ('line', function (line) {
    //         console.log ('line: ' + line);
    //     })
    //     .on ('end', function () {
    //         console.log ('EOF');
    //     })
    //     .read();

   // Read the file and print its contents.
   // ================================================
    function readInputData (filename) {
        // var fs = require('fs');
        // fs.readFile(filename, 'utf8', function(err, data) {
        //     if (err) throw err;
        //     console.log('OK: ' + filename);
        //     console.log(data)
        // });
        var bufferedReader = new BufferedReader(filename, { encoding: 'utf8' });

        bufferedReader
            .on('error', function (error) {
                console.log ('error: ' + error);
            })
            .on ('line', function (line) {
                console.log ('line: ' + line);
            })
            .on ('end', function () {
                console.log ('EOF');
                bufferedReader = null;
            })
            .read();
    }

    // listen (start app with node app.js filename.txt)
    // ================================================
    function applicationStartup () {
        if (process.argv.length < 3) {
            console.error('\nA input file was not provided properly!');
            console.log('\nUsage: node ' + process.argv[1] + ' <FILENAME>.txt');
            process.exit(1);
        } else {
            Polyfill.check();
            readInputData(process.argv[2]);
        }
    }

    applicationStartup();
})();