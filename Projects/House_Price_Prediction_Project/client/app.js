function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    var selectedValue = -1;
    uiBathrooms.forEach((radio, index) => {
        if (radio.checked) {
            selectedValue = index + 1;
        }
    });
    return selectedValue;
}

function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    var selectedValue = -1;
    uiBHK.forEach((radio, index) => {
        if (radio.checked) {
            selectedValue = index + 1;
        }
    });
    return selectedValue;
}

function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");

    var sqft = document.getElementById("uiSqft");
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocations");
    var estPrice = document.getElementById("uiEstimatedPrice");

    if (sqft.value === "" || bhk === -1 || bathrooms === -1 || location.value === "") {
        alert("Please fill in all fields.");
        return;
    }

    var url = "http://127.0.0.1:5000/predict_home_price";

    $.post(url, {
        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bathrooms,
        location: location.value
    }, function(data, status) {
        if (status === "success") {
            estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
        } else {
            console.log("Error with the API response:", status);
            estPrice.innerHTML = "<h2>Failed to get price</h2>";
        }
    }).fail(function(xhr, status, error) {
        console.error("Request failed: ", error);
        estPrice.innerHTML = "<h2>Error fetching data</h2>";
    });
}

function onPageLoad() {
    console.log("document loaded");

    var url = "http://127.0.0.1:5000/get_location_names";

    $.get(url, function(data, status) {
        console.log("got response for get_location_names request");

        if (data && data.locations) {
            var locations = data.locations;
            var uiLocations = document.getElementById("uiLocations");
            $('#uiLocations').empty();
            console.log("Dropdown emptied");

            if (locations.length === 0) {
                alert("No locations available.");
                return;
            }

            for (var i in locations) {
                var opt = new Option(locations[i], locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    }).fail(function(xhr, status, error) {
        console.error("Failed to fetch locations:", error);
    });
}

window.onload = onPageLoad;
