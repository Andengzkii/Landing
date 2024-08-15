// Fetch the user's region and IP information from the provided service
fetch('https://mgdplaygames.pro/region')
    .then(response => response.json())
    .then(data => {
        var userRegion = data.region; // Assuming the API returns region or country data

        // Check if the user's region is Brazil (BR)
        if (userRegion === "BR") {
            // Redirect to the Side B link
            window.location.href = "https://galaxy.store/queen8";
        } else {
            // Display Side A content
            document.getElementById('sideA').style.display = 'block';
        }
    })
    .catch(error => console.error('Error fetching region data:', error));
