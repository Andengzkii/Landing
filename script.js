// Simulate different regions for local testing
async function getUserRegion() {
    // Simulate region data. Change this value to test different regions.
    const simulatedRegion = 'PH'; // Change this to 'BR' or other values to test
    
    console.log(`Simulated region: ${simulatedRegion}`); // Debug log
    return simulatedRegion;
}

async function handleRedirectBasedOnRegion() {
    const region = await getUserRegion();
    
    console.log(`Detected region: ${region}`); // Debug log

    if (region === 'BR') {
        console.log('Redirecting to Samsung App link...'); // Debug log
        // Redirect to the Samsung App link if in BR region
        window.location.href = 'https://galaxy.store/queen8';
    } else if (region === 'PH') {
        console.log('Showing content for PH region...'); // Debug log
        // Show the content if in PH region
        document.getElementById('sideA').style.display = 'block';
        document.getElementById('sideB').style.display = 'none';
    } else {
        console.log('Hiding Play Now button for other regions...'); // Debug log
        // Hide the "Play Now" button for other regions
        document.getElementById('play-now').style.display = 'none';
        document.getElementById('sideA').style.display = 'block';
        document.getElementById('sideB').style.display = 'none';
    }
}

// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', handleRedirectBasedOnRegion);
