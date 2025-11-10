const addTaskButton = document.getElementById('add-task');
const taskContainer = document.querySelector('.task-container');
const taskListUl = document.querySelector('.task-list')
const errorMsg = document.querySelector('.error-msg')

addTaskButton.addEventListener('click', () => {

    let taskInputValue = document.getElementById('task').value;

   
    if( taskInputValue != '' ){
        let liEle = document.createElement('li');
        liEle.textContent = taskInputValue;
        taskListUl.appendChild(liEle);
        document.getElementById('task').value = '';
        let progressBtn = document.createElement('button');
        progressBtn.textContent = "Move to Progress";
        taskListUl.appendChild(progressBtn)
        console.log(progressBtn);
    }else{
        errorMsg.textContent = "Please write your task first!"
    }
    
    
})



console.log(taskContainer);