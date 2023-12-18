function updateTimeAndDate() { 
    const now = new Date();

    let timeElement = document.getElementById("time");

    let dateElement = document.getElementById("date");

    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    let formattedHours = hours < 10 ? "0" + hours : hours;
    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    let currentTime = formattedHours + ":" + formattedMinutes;
    timeElement.innerText = currentTime;

    let date = now.toDateString();
    dateElement.innerText = date;
};

updateTimeAndDate();

setInterval(updateTimeAndDate, 60000);