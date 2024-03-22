window.addEventListener('load', calculateTime)
function calculateTime(){
    var date=new Date();
    var dayNumber=date.getDay();
    var hour= date.getHours();
    var minute = date.getMinutes();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    hour = hour % 12;
    hour = hour == 12 ? '12' : hour;
    hour = hour < 10 ? '0' + minute : minute;
    minute = minute < 10 ? '0' + minute : minute;

    document.getElementByld("day").innerHTML = dayNames[dayNumber];
    document.getElementByld("hour").innerHTML = hour;
    document.getElementByld("minute").innerHTML = minute;
    document.getElementByld("ampm").innerHTML = ampm;

    setTimeout(calculateTime, 200);
}