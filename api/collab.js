exports.init = function () {
};

exports.clientConnectedServer = function (link) {
        debugger
    var foo = 1;
    setInterval(function () {
        debugger
        link.send(null, new Date());
    }, 500);
};
