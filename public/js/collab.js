var $ = function (s) {
    return document.querySelector(s);
};

var content = $("#content");
exports.updateTextarea = function (ev, data) {
    content.value = data.value;
};
