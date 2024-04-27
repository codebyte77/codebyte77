const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
	
};
const getWeather = (city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dehli',options)
     .then(response => response.json())
	 .then((response) => {
           console.log(response)

	  cloud_pct.innerHTML = response.cloud_pct
	  temp.innerHTML = response.temp
	  feel_like.innerHTML = response.feel_like
	  humidity.innerHTML = response.humidity
	  min_temp.innerHTML = response.min_temp
	  max_temp.innerHTML = response.max_temp
	  sunrise.innerHTML = response.sunrise
	  sunset.innerHTML = response.sunset
	})	 
	.catch(err => console.error(err));
}

Submit.addEventListener("click", (e)=>{
	e.preventDefault()
     getWeather(city.value)
	 
})

getWeather("Dehli")
