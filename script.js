function clock() {
    const now = new Date();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let period = 'AM';
    
    //Set period to PM if hours is greater than or equal to 12
    if (hours >= 12) {
        period = 'PM';
    }

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;
}

    var updateClock = setInterval(clock, 1000);