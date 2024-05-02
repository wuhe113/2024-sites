$(document).ready(function() {
    // Retrieve query parameter (selected date)
    var urlParams = new URLSearchParams(window.location.search);
    var selectedDate = urlParams.get('date');
    
    // Load JSON data
    $.getJSON('data.json', function(data) {
        var results = data.results;

        // Find the data for the selected date
        var selectedData = results.find(function(result) {
            return result.date === selectedDate;
        });

        // Check if data for selected date is found
        if (selectedData) {
            // Display the data
            $('.data-container').html('');
            $('.data-container').append('<h2>Data for ' + selectedData.date + '</h2>');
            $('.data-container').append('<p>Sunrise: ' + selectedData.sunrise + '</p>');
            $('.data-container').append('<p>Sunset: ' + selectedData.sunset + '</p>');
            // Add other data fields as needed
        } else {
            // Display an error message if data for selected date is not found
            $('.data-container').html('<p>Error: Data not found for selected date.</p>');
        }
    }).fail(function() {
        // Display an error message if JSON data couldn't be loaded
        $('.data-container').html('<p>Error: Unable to load JSON data.</p>');
    });
});
