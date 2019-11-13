require("dotenv").config()

export function OpenCage (lat, long) {
    const coords = `${lat}%2C+${long}`
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${coords}&key=${process.env.REACT_APP_OPENCAGE_API_KEY}`)
    .then(response => response.json())
    .catch(error => console.log(error.message))
    
}

