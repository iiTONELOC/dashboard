const button = document.getElementById("weather-search-btn")
const params = document.getElementById("search-field")

async function submitWeatherSearch(event) {

    const query = params.value
    console.log(query)
    if (query) {
        fetch(`/weather/${query}`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json'
            }
        })
    }
    // if (response.ok) {


    //     document.location.reload();
    // } else {
    //     document.getElementById('messageAlert').setAttribute("style", "visibility:visible")
    //     document.getElementById("blank-field-alert").innerText=response.statusText
    //     setTimeout(function(){document.getElementById('messageAlert').setAttribute("style", "visibility:collapse")},4000)

    // }

}



button.addEventListener('click', submitWeatherSearch);
