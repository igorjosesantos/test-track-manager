(function () {
    console.log('app started!');

    // print process.argv
    var args = process.argv.slice(2);
    console.log(args);

    // process.argv.forEach(function (val, index, array) {
    //     console.log(index + ': ' + val);
    // });
})();