// dataFileReader.js
// ========
var fs       = require('fs');
var readline = require('readline');

var Talk     = register('/models/talk.js');
var Schedule = register('/models/schedule.js');

var DataFileReader = {
    read: function (filename) {
        var opts    = { flags: 'r', encoding: 'utf8' };
        var stream  = fs.createReadStream(filename, opts);
        var reader  = readline.createInterface({ input: stream });

        var Scheduler = new Schedule();

        stream.on('error', function(err) {
            stream.close();
            if (err) throw err;
        });

        stream.on('end', function () {
            Scheduler.generateSchedule().getSchedule();
            stream.close();
        });

        reader.on('line', function (line) {
            Scheduler.addTalk( new Talk( line ) );
        });
    }
}
module.exports = DataFileReader;
