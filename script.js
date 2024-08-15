// Function to get user's IP region (for example purposes, replace with actual implementation)
async function getUserRegion() {
    // Placeholder URL, replace with your IP region detection service
    const response = await fetch('https://mgdplaygames.pro/region');
    const data = await response.json();
    return data.region; // Assuming the response contains a 'region' property
}

async function handleRedirectBasedOnRegion() {
    const region = await getUserRegion();
    
    if (region === 'BR') {
        // Redirect to the Samsung App link
        window.location.href = 'https://galaxy.store/queen8';
    } else {
        // Hide the "Play Now" button if not in BR region
        document.getElementById('play-now').style.display = 'none';
        document.getElementById('sideA').style.display = 'block';
        document.getElementById('sideB').style.display = 'none';
    }
}

handleRedirectBasedOnRegion();
