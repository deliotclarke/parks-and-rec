fetch("https://raw.githubusercontent.com/nss-day-cohort-31/national-parks/master/database.json")
  .then(data => data.json())
  .then(parsedData => {
    parsedData.parks.forEach(e => {
      let name = e.name;
      let state = e.state;
      let visited = e.visited;
      let lat = e.latitude;
      let long = e.longitude;
      printToDom(name, state, visited);
      weatherFetch(lat, long);
    })
  })