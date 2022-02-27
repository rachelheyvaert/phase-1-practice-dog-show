const fetchURL = "http://localhost:3000/dogs";
const tableContainer = document.querySelector("#table-body");
const dogForm = document.getElementById('dog-form')


document.addEventListener("DOMContentLoaded", () => {
  fetchDogs();

});

function fetchDogs() {
  fetch(fetchURL)
    .then((response) => response.json())
    .then((dogs) => {
      dogs.forEach((dog) => {
          tableContainer.append(tableRowMaker(dog));
      });
    });
}

function tableRowMaker(dog) {
  const tr = document.createElement("tr");
//   tr.id =`dog-id-${dog.id}`
  const tdName = document.createElement("td");
  tdName.textContent = dog.name
  const tdBreed = document.createElement("td");
  tdBreed.textContent = dog.breed
   const tdSex = document.createElement("td");
   tdSex.textContent = dog.sex
  const tdButton = document.createElement("td");
  const button = document.createElement("button");
  button.textContent = 'Edit Dog'
  button.style.width = 100%
  tdButton.append(button);
  button.addEventListener('click', () => buttonClick(dog))
  tr.append(tdName, tdBreed, tdSex, tdButton);
  return tr
}
 
function buttonClick(dog) {
    dogForm.name.value = dog.name
    dogForm.breed.value = dog.breed
    dogForm.sex.value = dog.sex
    //able to grab becuase form has a "nam"e attribute
    //<input type="text" name="sex" placeholder="dog's sex" value="" />
}
const submitBtn = document.getElementsByName('submit')
submitBtn.addEventListener('submit', (e) => {
e.preventDefault()
handlePatch()
})

function handlePatch(newRow){
    fetch(`fetchURL/${dog-id}`, {
    method:'PATCH',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({
        tableContainer: newRow
})})}