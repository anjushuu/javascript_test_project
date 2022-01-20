
function days_since(){
    const date = new Date(2021, 7, 13);
    let today = new Date(); // today
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();

    //hour = checkTime(hour);
    //minute = checkTime(minute);
    //seconds = checkTime(seconds);

    let time_diff = today.getTime() - date.getTime();
    let days_diff = Math.trunc(time_diff / (1000 * 60 * 60 * 24));

    document.getElementById("test").innerHTML = "Since 08.13.21: \n" + days_diff + " days \n"
                                            + hour + " hours \n" + minute + " minutes \n"
                                            + seconds + " seconds";

    setTimeout(days_since, 1000);
    //return [days_diff, hour, minute, seconds];
}

//window.onload = days_since;
days_since();
