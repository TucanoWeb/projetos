let listenSubmit = document.getElementById('sendTask');
let contentTaskWrapper = document.getElementById('listWrapper');
let checkboxId = 0;
let taskName;
listenSubmit.addEventListener('click', valueForm);

function valueForm() {
    taskName = document.querySelector('input').value;

    if (taskName == '') {
        alert('Você deve inserir um nome para a tarefa');

    } else {
        insertTask();
    }
}

function insertTask() {
    checkboxId++;
    contentTaskWrapper.insertAdjacentHTML('beforeend','<div class="listTasks"><input type="checkbox" class="checkbox" id= "' + checkboxId + '" name="' + taskName + '"><label for="' + checkboxId + '">' + taskName + '</label></div>');

    clearField();
}

function clearField() {
    document.querySelector('input').value = '';
}