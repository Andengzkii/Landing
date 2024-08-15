// Simulate different regions for local testing
async function getUserRegion() {
    // Simulate region data. Change this value to test different regions.
    const simulatedRegion = 'PH'; // Change this to 'BR' or other values to test
    
    return simulatedRegion;
}

async function handleRedirectBasedOnRegion() {
    const region = await getUserRegion();
    
    if (region === 'BR') {
        // Redirect to the Samsung App link if in BR region
        window.location.href = 'https://galaxy.store/queen8';
    } else if (region === 'PH') {
        // Show the content if in PH region
        document.getElementById('sideA').style.display = 'block';
        document.getElementById('sideB').style.display = 'none';
    } else {
        // Hide the "Play Now" button for other regions
        document.getElementById('play-now').style.display = 'none';
        document.getElementById('sideA').style.display = 'block';
        document.getElementById('sideB').style.display = 'none';
    }
}

handleRedirectBasedOnRegion();
