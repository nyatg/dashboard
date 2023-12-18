function updateTimeAndDate() { 
    const now = new Date();

    let timeElement = document.getElementById("time");

    let dateElement = document.getElementById("date");

    let hours = now.getHours();
    let minutes = now.getMinutes();

    let currentTime = hours + ":" + minutes;
    timeElement.innerText = currentTime;

    let date = now.toDateString();
    dateElement.innerText = date;
};

updateTimeAndDate();

setInterval(updateTimeAndDate, 60000);