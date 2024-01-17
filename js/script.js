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

let rubrik = document.getElementById('rubrik');
const headerDiv = document.getElementById('header-div');

function nyRubrik() {
    
    const newH1 = document.createElement('input');
    newH1.setAttribute('placeholder', rubrik.innerText);
    newH1.style.display = 'none';
    
    const headerBtn = document.createElement('button');
    headerBtn.setAttribute('id', 'change-btn');
    headerBtn.innerText = 'ändra rubrik';
    headerBtn.style.display = 'none';

    let isVisible = false;

    rubrik.addEventListener('click', function () {
       
        if (!isVisible) {
            headerBtn.style.display = 'inline-block'; 
            newH1.style.display = 'inline-block'; // 
        } else {
            headerBtn.style.display = 'none'; 
            newH1.style.display = 'none'; 
        }
        isVisible = !isVisible;
    });

    headerBtn.addEventListener('click', function () {
        let newH1Value = newH1.value;
        rubrik.textContent = newH1Value;
        localStorage.setItem('rubrikText', newH1Value);

       
        headerBtn.style.display = 'none';
        newH1.style.display = 'none';

        isVisible = false; 
    });

    
        headerDiv.appendChild(headerBtn);
        headerDiv.appendChild(newH1);
 
        console.log('hej');

        const savedText = localStorage.getItem('rubrikText');

        if (savedText) {
            rubrik.textContent = savedText;
            newH1.value = savedText;
        }
    };

nyRubrik();

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