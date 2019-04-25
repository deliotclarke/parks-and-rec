const weatherFetch = (lat, long) => {
  fetch(`https://blooming-mesa-53816.herokuapp.com/${lat},${long}`)
    .then(data => data.json())
    .then(parsedData => {
      console.log(parsedData.currently.summary,
        parsedData.hourly.summary,
        parsedData.daily.summary);
    })
}