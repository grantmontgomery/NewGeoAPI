
const fetchData = (apikey, lat, long) => {
    const latandlong = `${lat}%2C+${long}`
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latandlong}&key=${apikey}`, {
    method: "GET",
    withCredentials: true,
    credentials: "include",
    headers: {
    Authentication: `${apikey}`
}
})

}

console.log(fetchData("", 34, -118))