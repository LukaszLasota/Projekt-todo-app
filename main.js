
let toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('list');
const input = document.querySelector('input');

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1)
    // console.log(toDoList);

    taskNumber.textContent = listItems.length;
    renderList();
}

const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
//   console.log(searchText);
  
  let toDoList2 = toDoList.filter(li => li.textContent.toLowerCase().includes(searchText));

  console.log(toDoList);
  console.log(toDoList2);

  ul.textContent = "";
  toDoList2.forEach(li => ul.appendChild(li));
  taskNumber.textContent = listItems.length;
}

const addTask = (e) => {
 e.preventDefault();
 const inputValue = input.value;
 if (inputValue === "") return;

 const li = document.createElement("li");
 ul.appendChild(li);
 li.className = 'list';
 li.innerHTML = inputValue + "<button>Usuń</button>";
 
 toDoList.push(li);
 renderList();

 input.value = "";
 taskNumber.textContent = listItems.length;
 li.querySelector('button').addEventListener('click', removeTask);
}

const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
    toDoElement.dataset.key = key;
    ul.appendChild(toDoElement);
})
}

form.addEventListener('submit', addTask);
input.addEventListener('input', searchTask);