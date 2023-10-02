
const addBtn = document.getElementById('new-task-add');
var taskContainer = document.getElementById('todo-container');
const taskBox = document.getElementById('new-task');

const stopWords = ["can", "please", "?", "you", "thanks", "Hello", "i", "would", "like", "to", "your", "we've", "we", "have"];

function removeStopWords(sentence) {
const words = sentence.split(" ");
const filteredWords = words.filter(word => !stopWords.includes(word.toLowerCase()));
return filteredWords.join(" ");
}



chrome.tabs.executeScript({
  code: "window.getSelection().toString();"
}, function (selection) {
  const selectedText = selection[0];
  const resultSentence = removeStopWords(selectedText);
  document.getElementById("new-task").innerHTML = resultSentence;


  const taskTemplate = `
    <div class="task">
      <input type="checkbox" />
      <p contenteditable="true">{{taskText}}</p>
      <button class="material-symbols-outlined mydelete" style="font-size:20px;">delete</button>
      <button class="material-symbols-outlined star" style="font-size:20px;">star</button>
    </div>
  `;
  

  addBtn.addEventListener('click', async (e) => {
    // Disable the "add" button
    addBtn.disabled = true;
    const taskText = resultSentence.trim();
    const newIndex = taskContainer.children.length + 1;
    const taskHTML = taskTemplate.replace('{{taskText}}', taskText);
    const taskItem = document.createElement("div");
    taskItem.innerHTML = taskHTML;
    taskContainer.appendChild(taskItem);
    taskBox.textContent = "";

    // Re-enable the "add" button
    addBtn.disabled = false;
  });
});
