let listenSubmit = document.getElementById('sendTask');
let contentTaskWrapper = document.getElementById('listTasks');

let checkboxId = 0;
let taskName;
let contentTask;

listenSubmit.addEventListener('click', valueForm);

function valueForm() {
    taskName = document.querySelector('input').value;

    if (taskName == '') {
        alert('Você deve inserir um nome para a tarefa');

    } else {
        console.log(taskName);
        insertTask();

    }
}


function insertTask() {

    checkboxId++;
    contentTaskWrapper.innerHTML += '<div class="listTasks"><input type="checkbox" class="checkbox" id= "' + checkboxId + '"><label for="' + checkboxId + '">' + taskName + '</label></div>';

    clearField();
}

function clearField() {

    document.querySelector('input').value = '';

}