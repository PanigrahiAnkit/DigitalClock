var formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
    formatSwitchBtn.classList.toggle("active");

    var formatValue = formatSwitchBtn.getAttribute("data-format");

    if(formatValue == "12") {
        formatSwitchBtn.setAttribute("data-format", "24");
    }
    else {
        formatSwitchBtn.setAttribute("data-format", "12");
    }
});

function clock() {
    var now = new Date();
    
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    let period = 'AM';
    
    //Set period to PM if hours is greater than or equal to 12
    if (hours >= 12) {
        period = 'PM';
    }

    //Setting the hours to 12 hour format
    var formatValue = formatSwitchBtn.getAttribute("data-format");

    if (formatValue == "12") { 
            hours = hours > 12 ? hours % 12 : hours;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;
}
var updateClock = setInterval(clock, 1000);

var today = new Date();
var dayNumber = today.getDate();
var dayName = today.toLocaleString('default', { weekday: 'long' }); 
var monthName = today.toLocaleString('default', { month: 'long' });
var year = today.getFullYear();

document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".day-number").innerHTML = dayNumber;
document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".year").innerHTML = year;