let input = document.getElementById("input");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("field-sec");
let index = 0;

const addTask = () => {
    index++;
    todoList.innerHTML += `
    <div class="row">
    <div class="col-10">
    <table class="table table-hover">
    <tr>
    <th scope="row" width=30px>${index}</th>
    <td>${input.value}</td>
    </tr>
    </table>
    </div>
    <div class="col-1"> <button class="btn btn-primary">Del</button></div>
    <div class="col-1"> <button class="btn btn-primary">Edit</button></div>
    </div>
    `;
    input.value = "";
};

addBtn && addBtn.addEventListener("click", addTask);
