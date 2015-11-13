// ScheduleWorker.js
// ========
var fs        = require('fs');
var readline  = require('readline');
var Talk      = register('/models/Talk.js');
var Scheduler = register('/models/Scheduler.js');

var ScheduleWorker = function ScheduleWorker(filename) {
    var opts    = { flags: 'r', encoding: 'utf8' };

    this.filename  = filename;
    this.Stream    = this.openStream( opts );
    this.Reader    = this.startReader( this.Stream );
    this.Scheduler = new Scheduler();

    if ( !(this instanceof ScheduleWorker) ) {
        return new ScheduleWorker(filename);
    }
};

ScheduleWorker.prototype = {

    start: function () {
        var Worker = this;

        Worker.Reader.on('line', function (line) {
            Worker.Scheduler.addTalk( new Talk( line ) );
        });

        // @throws Exception
        Worker.Stream.on('error', function(exception) {
            Worker.Stream.close();

            if (exception)
                throw exception;
        });

        Worker.Stream.on('end', function () {
            Worker.Stream.close();
            Worker.stop();
        });
    },

    stop: function () {
        this.Scheduler.generate().print();
    },

    openStream: function (opts) {
        return fs.createReadStream( this.filename, opts );
    },

    startReader: function (stream) {
        return readline.createInterface({ input: stream });
    }
}

module.exports = ScheduleWorker;