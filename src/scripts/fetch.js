fetch("https://raw.githubusercontent.com/nss-day-cohort-31/national-parks/master/database.json")
  .then(data => data.json())
  .then(parsedData => {
    parsedData.parks.forEach(e => {
      fetch(`https://blooming-mesa-53816.herokuapp.com/4648d91c21b46e5b365781dfc83e3152/${e.latitude},${e.longitude}`)
        .then(data => data.json())
        .then(parkWeather => {
          e.current = parkWeather.currently.summary;
          e.hourly = parkWeather.hourly.summary;
          e.daily = parkWeather.daily.summary;
          // the assignments above continue to build the object that we've grabbed in the first fetch and the for each allows us to add
          //each of these properties to EACH object as it is called and then passed to the example function as ONE object
          example(e);
        })
    })
  })