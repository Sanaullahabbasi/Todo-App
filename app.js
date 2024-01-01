import{ collection, addDoc, db, serverTimestamp }from "./firebase.js"

let input = document.getElementById("input");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");

const addTask = async () => {
  if (input.value.trim() === "") {
    alert("please write about task");
  } else {
    todoList.innerHTML += `
    <li>
    <p class="col-9">${input.value}</p>
    <div class="col-1">
      <button id="delBtn" class="btn btn-primary">Del</button>
    </div>
    <div class="col-1">
      <button id="editBtn" class="btn btn-primary">Edit</button>
    </div>
    </li>
    `;
    const todoTasks = await addDoc(collection(db, "todo"), {
        task: input.value,
        timestamp: serverTimestamp()
      });
      console.log("Document written with ID: ", todoTasks.id);
    input.value = "";
  }
};
addBtn && addBtn.addEventListener("click", addTask)



