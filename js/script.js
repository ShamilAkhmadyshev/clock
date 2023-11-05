
let hours, minutes, seconds, degreeHour, now, degreeMinute;
const hour = document.getElementsByClassName("circle__hour")[0];
const minute = document.getElementsByClassName("circle__minute")[0];

const time = () => {
    now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();

    if (hours <= 11) {
        degreeHour = hours * 30 + minutes * 0.5;
    } else {
        degreeHour = (hours - 12) * 30 + minutes * 0.5;
    }

    degreeMinute = minutes * 6;
    minute.style.transform = `rotate(${degreeMinute}deg)`
    hour.style.transform = `rotate(${degreeHour}deg)`
    setTimeout(time, 1000)
}
setTimeout(time, 1000)