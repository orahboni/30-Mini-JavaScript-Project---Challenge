const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const listContainer = document.querySelector('.list-container');
const deleteBtn = document.querySelector('.deleteBtn');

addBtn.addEventListener('click', () => {
    if (input.value === '') {
        alert('You Must add a Task');
        saveData()
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";  
        li.appendChild(span);
        saveData()
    }
    input.value = '';
    saveData();
}, false)

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
})

deleteBtn.addEventListener('click', () => {
    if (listContainer.innerHTML !== '') {
       listContainer.innerHTML = "";
    }
   saveData();
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
