const resultsDiv = document.querySelector("#results");

const example = (obj) => {
  console.log(obj);
}

// i had the function below working and printing the way it was supposed to, but i didn't understand why
// so brenda helped me and explained what was actually happening in my fetch call. i used the console log
// above to show myself how i got that object and then added to it in the second fetch call.
// THIS WAS A HUGE BREAKTHROUGH IN OBJECTS FOR ME!!

const printToDom = (name, state, visited, current, hourly, daily) => {

  let h3 = `${name}`;
  let para = `${state}`;
  let borderStyle = visited;

  let articleEL = document.createElement("ARTICLE");
  let headEL = document.createElement("H3");
  let paraEL = document.createElement("P");
  let wParaEL = document.createElement("P");
  let weatherUL = document.createElement("UL");
  let currentLI = document.createElement("LI");
  let hourlyLI = document.createElement("LI");
  let dailyLI = document.createElement("LI");

  headEL.textContent = h3;
  paraEL.textContent = para;
  wParaEL.textContent = "Weather:"
  currentLI.textContent = `Current: ${current}`;
  hourlyLI.textContent = `Hourly: ${hourly}`;
  dailyLI.textContent = `Daily: ${daily}`;

  articleEL.appendChild(headEL);
  articleEL.appendChild(paraEL);
  weatherUL.appendChild(currentLI);
  weatherUL.appendChild(hourlyLI);
  weatherUL.appendChild(dailyLI);
  wParaEL.appendChild(weatherUL);
  articleEL.appendChild(wParaEL);

  if (borderStyle === true) {
    articleEL.className = "red-dotted";
  } else {
    articleEL.className = "green-solid";
  }

  resultsDiv.appendChild(articleEL);
}