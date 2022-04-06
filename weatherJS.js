let weather = {
    "apikey": "6a47eeadd0544748acb122153211612",
    fetchWeather: function (city) {
        try {
            fetch("https://api.weatherapi.com/v1/current.json?key=" + this.apikey + "&q=" + city) 
            .then((res) => res.json())
            .then((data) => this.displayWeather(data));
            
        } catch (error) {
            console.log("error");            
        }
    },
    displayWeather: (data) => {
        const { name, localtime } = data.location;
        const { text } = data.current.condition;
        const { feelslike_c } = data.current;
        document.getElementById("city").innerText = name;
        document.getElementById("climate").innerText = text;
        document.getElementById("temp-value").innerText = feelslike_c;
        document.getElementById("date").innerText = localtime;
        // let icon=document.getElementById("temp-icon").getAttribute("src");
        // icon="icons/sun.png";    
    },
    search: function () {
        this.fetchWeather(document.getElementById("search").value);
    }
};
document.getElementById("search-btn").addEventListener('click', function () {
    weather.search();
});