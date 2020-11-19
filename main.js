alarmWindow = document.getElementById("home-alarm");

var hideAlarm = function() {
    var y = window.scrollY;
    if (y > 0) {
        alarmWindow.className = "hidden"
    }
};

var openAlarm = function() {
    alarmWindow.classList.remove("hidden");
    alarmWindow.className = "reopened"
};