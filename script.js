// Function to get user's IP region (for example purposes, replace with actual implementation)
async function getUserRegion() {
    // Placeholder URL, replace with your IP region detection service
    const response = await fetch('https://mgdplaygames.pro/region');
    const data = await response.json();
    return data.region; // Assuming the response contains a 'region' property
}

async function redirectBasedOnRegion() {
    const region = await getUserRegion();
    
    if (region === 'BR') {
        document.getElementById('sideA').style.display = 'none';
        document.getElementById('sideB').style.display = 'block';
        window.location.href = 'https://galaxy.store/queen8';
    } else {
        document.getElementById('sideA').style.display = 'block';
        document.getElementById('sideB').style.display = 'none';
    }
}

redirectBasedOnRegion();
