alarmWindow = document.getElementById("home-alarm");

var hideAlarm = function() {
    alarmWindow.className = "hidden"
};

var openAlarm = function() {
    alarmWindow.classList.remove("hidden");
    alarmWindow.className = "reopened"
};