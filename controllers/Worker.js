// Worker.js
// ========
var fs       = require('fs');
var readline = require('readline');

var Talk     = register('/models/talk.js');
var Schedule = register('/models/schedule.js');

var Worker = function Worker(process) {
    this.filename = process.argv[2];
};

Worker.prototype = {
    start: function () {
        var opts    = { flags: 'r', encoding: 'utf8' };
        var stream  = fs.createReadStream( this.filename, opts );
        var reader  = readline.createInterface({ input: stream });

        var Scheduler = new Schedule();

        stream.on('error', function(err) {
            stream.close();
            if (err) throw err;
        });

        stream.on('end', function () {
            Scheduler.generateSchedule();
            Scheduler.showTracks();
            stream.close();
        });

        reader.on('line', function (line) {
            Scheduler.addTalk( new Talk( line ) );
        });
    }
}
module.exports = Worker;
