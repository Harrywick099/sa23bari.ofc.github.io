function clockRotation() {

    function updateClock() {
        var date = new Date();

        var seconds = date.getSeconds() + date.getMilliseconds() / 1000;
        var minutes = date.getMinutes() + seconds / 60;
        var hours = date.getHours() + minutes / 60;

        var secondsRotation = seconds * 6;
        var minutesRotation = minutes * 6;
        var hoursRotation = hours * 30;

        $("#seconds").css("transform", "rotate(" + secondsRotation + "deg)");
        $("#minutes").css("transform", "rotate(" + minutesRotation + "deg)");
        $("#hours").css("transform", "rotate(" + hoursRotation + "deg)");

        requestAnimationFrame(updateClock);
    }

    updateClock();
}

clockRotation();
