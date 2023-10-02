

const d = new Date();
let day = d.getDate();
let month = d.getMonth() + 1;
let year = d.getFullYear();
let currentDate = `${month}/${day}`;
document.getElementById("current_date").innerHTML = currentDate;


const modeToggle = document.getElementById('moon');
const body = document.getElementById("body");
const sun = document.getElementById('sun');
var myStars = document.querySelectorAll('.star');
var taskContainer = document.getElementById('todo-container');
const taskBox = document.getElementById('new-task');
var deleteBtn = document.querySelectorAll('.mydelete');





modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    sun.style.display = "block";
    moon.style.display = "none";
});

sun.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    sun.style.display = "none";
    moon.style.display = "block";
});



taskContainer.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('mydelete')) {
    const newTask = target.closest('.task');
    newTask.remove();
    
  } if (target.classList.contains('star')) {
    target.classList.toggle("fill10");
  }
});






  
  const taskTemplate = `
    <div class="task">
      <input type="checkbox" />
      <p contenteditable="true">{{taskText}}</p>
      <button class="material-symbols-outlined mydelete" style="font-size:20px;">delete</button>
      <button class="material-symbols-outlined star" style="font-size:20px;">star</button>
    </div>
  `;
  


