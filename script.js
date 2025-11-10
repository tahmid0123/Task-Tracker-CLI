const addTaskButton = document.getElementById('add-task');
const taskContainer = document.querySelector('.task-container');
const taskListUl = document.querySelector('.task-list')
const taskInputValue = document.getElementById('task');
const errorMsg = document.querySelector('.error-msg')

addTaskButton.addEventListener('click', () => {
   
    const taskInputValue = document.getElementById('task').value;
    if( taskInputValue !== '' ){
        let liEle = document.createElement('li');
        liEle.textContent = taskInputValue;
        taskListUl.appendChild(liEle);
        console.log(liEle);
    }else{
        console.log('Please write your task first!');
        errorMsg.textContent = "Please write your task first!"
    }
    
})



console.log(taskContainer);