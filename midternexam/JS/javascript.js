// 取得html元素
const addButton = document.getElementById("button-addon2");
const todoInput = document.querySelector(".todoinput input");
const todoList = document.querySelector(".todolist");

//讓待辦事項清單一開始是隱藏的
let showTodoList = false;

// 監聽新增按鈕的點擊事件
addButton.addEventListener("click", addTodoItem);

// 函式：新增一個待辦事項
function addTodoItem() {
    if (todoInput.value.trim() !== "") {
        const todoItem = document.createElement("div");
        todoItem.classList.add("input-group", "mb-3");

        const checkboxDiv = document.createElement("div");
        checkboxDiv.classList.add("input-group-text");
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.classList.add("form-check-input", "mt-0");
        checkboxDiv.appendChild(checkbox);

        const todoText = document.createElement("input");
        todoText.setAttribute("type", "text");
        todoText.classList.add("form-control");
        todoText.setAttribute("aria-label", "Text input with checkbox");
        todoText.value = todoInput.value.trim();

        const editButton = document.createElement("button");
        editButton.setAttribute("type", "button");
        editButton.classList.add("btn", "btn-outline-success");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", editTodoItem);

        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("type", "button");
        deleteButton.classList.add("btn", "btn-outline-danger");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", deleteTodoItem);

        todoItem.appendChild(checkboxDiv);
        todoItem.appendChild(todoText);
        todoItem.appendChild(editButton);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);

        // 新增待辦事項後清空輸入欄位
        todoInput.value = "";
    }
}

// 函式：動態新增 .todolist
function createTodoList() {
    const todoListContainer = document.createElement("div");
    todoListContainer.classList.add("todolist");

    const todoItem = document.createElement("div");
    todoItem.classList.add("input-group", "mb-3");

    const checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add("input-group-text");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("form-check-input", "mt-0");
    checkboxDiv.appendChild(checkbox);

    const todoText = document.createElement("input");
    todoText.setAttribute("type", "text");
    todoText.classList.add("form-control");
    todoText.setAttribute("aria-label", "Text input with checkbox");
    todoText.value = todoInput.value.trim();

    const editButton = document.createElement("button");
    editButton.setAttribute("type", "button");
    editButton.classList.add("btn", "btn-outline-success");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", editTodoItem);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button");
    deleteButton.classList.add("btn", "btn-outline-danger");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTodoItem);

    todoItem.appendChild(checkboxDiv);
    todoItem.appendChild(todoText);
    todoItem.appendChild(editButton);
    todoItem.appendChild(deleteButton);

    todoListContainer.appendChild(todoItem);
    todoList.appendChild(todoListContainer);

    // 新增待辦事項後清空輸入欄位
    todoInput.value = "";
}

// 處理待辦事項的刪除
function deleteTodoItem(event) {
    const todoItem = event.target.closest(".input-group.mb-3");
    if (todoItem) {
        todoList.removeChild(todoItem);
    }
}

// 編輯待辦事項
function editTodoItem(event) {
    const todoItem = event.target.closest(".input-group.mb-3");
    const todoText = todoItem.querySelector(".form-control");

    // 將輸入欄位變成可編輯狀態
    todoText.disabled = false;
    todoText.focus();

    // 將編輯按鈕改為儲存按鈕
    const editButton = todoItem.querySelector(".btn-outline-success");
    editButton.textContent = "Save";
    editButton.removeEventListener("click", editTodoItem);
    editButton.addEventListener("click", saveTodoItem);
}

// 儲存待辦事項
function saveTodoItem(event) {
    const todoItem = event.target.closest(".input-group.mb-3");
    const todoText = todoItem.querySelector(".form-control");

    // 將輸入欄位設為不可編輯狀態
    todoText.disabled = true;

    // 更改「儲存」按鈕為「編輯」按鈕
    const saveButton = todoItem.querySelector(".btn-outline-success");
    saveButton.textContent = "Edit";
    saveButton.removeEventListener("click", saveTodoItem);
    saveButton.addEventListener("click", editTodoItem);
}

// 監聽「新增」按鈕的點擊事件
addButton.addEventListener("click", addTodoItem);

