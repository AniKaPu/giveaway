var endDate = new Date('02/18/2021 00:0 AM');
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;
var months = ["Janu", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

document.getElementById('endDate__month').innerHTML = months[endDate.getMonth()];
document.getElementById('endDate__day').innerHTML = endDate.getDate() + ',';
document.getElementById('endDate__year').innerHTML = endDate.getFullYear();
    function counter() {
        var now = new Date();
        var distance = endDate - now;
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('day').innerHTML = 'E';
            document.getElementById('hour').innerHTML = 'N';
            document.getElementById('min').innerHTML = 'D';
            document.getElementById('sec').innerHTML = ':(';
            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('day').innerHTML = days + ':';
        document.getElementById('hour').innerHTML = hours+ ':';
        document.getElementById('min').innerHTML = minutes+ ':';
        document.getElementById('sec').innerHTML = seconds;
    }

    timer = setInterval(counter, 1000);