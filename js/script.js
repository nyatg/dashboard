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

const bgBtn = document.getElementById('bg-btn');

bgBtn.addEventListener('click', function () {
    let randomNr = Math.floor(Math.random() * 5) + 1;

    console.log(randomNr);

    if (randomNr == 1) {
        document.body.style.backgroundColor = 'pink';
    } else if (randomNr == 2) {
        document.body.style.backgroundColor = 'purple';
    } else if (randomNr == 3) {
        document.body.style.backgroundColor = 'orange';
    }
    else if (randomNr == 4) { document.body.style.backgroundImage = 'white'; }
    else {
        document.body.style.backgroundColor = 'brown';
    }
});
