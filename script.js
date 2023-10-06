/* Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date. 
 */
const getBtn = document.getElementById("get-data");
const clearBtn = document.getElementById("clear-data");
const results = document.getElementById("data-results");

let isClicked = false;
import data from "./data.js";

getBtn.onclick = function getData() {
  data.forEach((person) => {
    const name = `${person.name.first} ${person.name.last}`;
    const birthday = new Date(person.dob.date).toDateString();
    if (isClicked === false) {
      results.innerHTML += `<section class="data-card id="data-card"><p> { <br />
         <span>fullName:</span> "${name}",<br /> 
         <span>birthday:</span> "${birthday}"
    <br />}</p></section>
    `;
    }
  });
  isClicked = true;
};

clearBtn.onclick = function clearData() {
  results.innerHTML = " ";
  isClicked = false;
};
