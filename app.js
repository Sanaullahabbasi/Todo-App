import{ collection, addDoc, db, serverTimestamp, query, where, onSnapshot, orderBy, updateDoc, doc }from "./firebase.js"

let input = document.getElementById("input");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");

const getTodo = async()=>{
    const q = query(collection(db, "todo"), orderBy('timestamp','desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        todoList.innerHTML = ''
        querySnapshot.forEach((doc) => {
            showTodo(doc.data().task, doc.id);
        });
    });
}
getTodo();

const setTodo = async ()=>{
    let saveVal = input.value;
    input.value = "";
    if(saveVal){
        const todoTasks = await addDoc(collection(db, "todo"), {
            task: saveVal,
            timestamp: serverTimestamp()
        });
    }
}
addBtn && addBtn.addEventListener("click", setTodo)


const showTodo = async(val, id) => {

    todoList.innerHTML += `
    <li id="${id}">
    <p class="col-9">${val}</p>
    <div class="col-1">
      <button id="delBtn" class="btn btn-primary">Del</button>
    </div>
    <div class="col-1">
      <button id="editBtn" class="btn btn-primary">Edit</button>
    </div>
    </li>
    `;
   let delBtn = document.querySelectorAll("#delBtn");
   let editBtn = document.querySelectorAll("#editBtn");
editBtn.forEach(val => {
    val.addEventListener("click", e =>{
        updateTodo(e)
    })
})

  };


const updateTodo = async (e)=>{
    let id = e.target.parentElement.parentElement.getAttribute("id");
    let oldInput = e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML
   
    let newInput = prompt("Edit Value", oldInput)
    
    const docRef = doc(db, 'todo', id);

    const updateInput = await updateDoc(docRef, {
        task: newInput
    });
}

