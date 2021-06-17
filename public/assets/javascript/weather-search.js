
const button = document.getElementById("weather-search-btn")
const params = document.getElementById("search-field")

async function submitWeatherSearch(event) {
    event.preventDefault();
    const query = params.value
    console.log(query)
    if (parseFloat(query)!=NaN) {
        document.location.replace(`/search/${query}`)
    }
    
}



button.addEventListener('click', submitWeatherSearch);
