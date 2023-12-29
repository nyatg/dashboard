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

// const bgBtn = document.getElementById('bg-btn');

// bgBtn.addEventListener('click', function () {
//     let randomNr = Math.floor(Math.random() * 5) + 1;

//     console.log(randomNr);
    
//     if (randomNr == 1) {
//         document.body.style.backgroundColor = 'green';
//     } else if (randomNr == 2) {
//         document.body.style.backgroundColor = 'blue';
//     } else {
//         document.body.style.backgroundImage = 'yellow';
//     }
// });

// const bgBtn = document.getElementById('bg-btn');
// bgBtn.addEventListener('click', function () {
//     let randomNr = Math.floor(Math.random() * 5) + 1;
//     let imgUrl;

//     switch (randomNr) {
//         case 1:
//             imageUrl = 'url()';
//             break;
//         case 2:
//             imageUrl = 'url()';
//             break;
//         case 3:
//             imageUrl = 'url()';
//             break;
//         case 4:
//             imageUrl = 'url()';
//             break;
//         case 5:
//             imageUrl = 'url()';
//         default:
//             imgUrl = 'url()';
//             break;
//     }
//     document.body.style.backgroundImage = imgUrl;
// });