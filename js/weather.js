const apiKey = 'ad6e3be62d9df790a2336254c11f6e3f';
const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');

window.addEventListener('load', () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Current location: ${latitude}, ${longitude}`);
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

            fetch(apiUrl)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const temp = data.main.temp;
                    const place = data.name;
                    const icon = data.weather[0].icon;

                    const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;

                    iconImg.src = iconUrl;
                    loc.textContent = `${place}`;
                    tempC.textContent = `${temp.toFixed(2)} °C`;
                })
                .catch(error => {
                    console.log('Fetch error:', error);
                });
        });
    } else {
        console.log('Geolocation error');
    }
});

