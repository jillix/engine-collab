var $ = function (s) {
    return document.querySelector(s);
};


exports.init = function () {
    var content = $("#content");
    this
      .link("clientConnected")
      .send()
      .data(function (err, data) {
         content.value += data + "\n";
       })
      ;
};

