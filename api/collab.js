exports.init = function () {
};

exports.clientConnectedServer = function (link) {
    setInterval(function () {
        link.send(null, new Date());
    }, 500);
};
