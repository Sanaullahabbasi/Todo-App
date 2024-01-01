import{ collection, addDoc, db, serverTimestamp, query, where, onSnapshot }from "./firebase.js"

let input = document.getElementById("input");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");

const getTodo = async()=>{
   
      const q = query(collection(db, "todo"), orderBy('timestamp','desc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
        cities.push(doc.data().name);
  });
});
}

const addTask = () => {
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
    input.value = "";
  }
};
addBtn && addBtn.addEventListener("click", addTask)



