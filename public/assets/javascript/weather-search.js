
const button = document.getElementById("weather-search-btn")
const params = document.getElementById("search-field")

async function submitWeatherSearch(event) {

    const query = params.value

    if (parseFloat(query)===NaN) {
        document.location.replace(`/${query}`)
    }
    
}



button.addEventListener('click', submitWeatherSearch);
