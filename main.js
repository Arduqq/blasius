alarmWindow = document.getElementById("home-alarm");
warningWindow = document.getElementById("warning");

var hideAlarm = function() {
    alarmWindow.className = "hidden"
};

var hideWarning = function() {
    warningWindow.className = "hidden"
};

var openAlarm = function() {
    alarmWindow.classList.remove("hidden");
    alarmWindow.className = "reopened"
};