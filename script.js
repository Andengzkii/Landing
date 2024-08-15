// Function to get user's IP region
async function getUserRegion() {
    try {
        const response = await fetch('https://mgdplaygames.pro/region');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Region data:', data); // Log region data for debugging
        return data.region; // Adjust according to actual response structure
    } catch (error) {
        console.error('Error fetching region data:', error);
        return null; // Fallback in case of error
    }
}

async function handleRedirectBasedOnRegion() {
    const region = await getUserRegion();
    
    if (region === 'BR') {
        console.log('User is in BR region, redirecting to the app store link...');
        window.location.href = 'https://galaxy.store/queen8';
    } else {
        console.log('User is not in BR region, hiding "Play Now" button...');
        document.getElementById('play-now').style.display = 'none';
        document.getElementById('sideA').style.display = 'block';
        document.getElementById('sideB').style.display = 'none';
    }
}

handleRedirectBasedOnRegion();
