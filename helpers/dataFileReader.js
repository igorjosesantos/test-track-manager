// dataFileReader.js
// ========
var fs       = require('fs');
var readline = require('readline');
var Talk     = require(__dirname + '/app/model/talk.js');
var Schedule = require(__dirname + '/app/model/schedule.js');

var DataFileReader = {
    read: function (filename) {
        var opts    = { flags: 'r', encoding: 'utf8' };
        var stream  = fs.createReadStream(filename, opts);
        var reader  = readline.createInterface({ input: stream });

        var Schedule = new Schedule();

        stream.on('error', function(err) {
            stream.close();
            if (err) throw err;
        });

        stream.on('end', function () {
            Schedule.generateSchedule().getSchedule();
            stream.close();
        });

        reader.on('line', function (line) {
            Schedule.addTalk( new Talk( line ) );
        });
    }
}
module.exports = DataFileReader;
