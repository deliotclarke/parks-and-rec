const resultsDiv = document.querySelector("#results");

const printToDom = (name, state, visited, lat, long) => {
  let h3 = `${name}`;
  let para = `${state}`;
  let borderStyle = visited;

  let articleEL = document.createElement("ARTICLE");
  let headEL = document.createElement("H3");
  let paraEL = document.createElement("P");

  headEL.textContent = h3;
  paraEL.textContent = para;
  articleEL.appendChild(headEL);
  articleEL.appendChild(paraEL);

  if (borderStyle === true) {
    articleEL.className = "red-dotted";
  } else {
    articleEL.className = "green-solid";
  }

  resultsDiv.appendChild(articleEL);
}