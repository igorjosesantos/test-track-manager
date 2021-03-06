// DateTime.js
// ========
var DateTime = {
    format: function ( date ) {
        // console.log(date);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';

            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            hours = hours < 10 ? '0'+hours : hours;
            minutes = minutes < 10 ? '0'+minutes : minutes;

        var strTime = hours + ':' + minutes + ampm;

        return strTime;
    },
    add: function ( date, minutes ) {
        return new Date( date.getTime() + (minutes*60*1000) );
    }
}

module.exports = DateTime;