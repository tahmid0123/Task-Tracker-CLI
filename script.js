const addTaskButton = document.getElementById('add-task');
const taskContainer = document.querySelector('.task-container');
const taskListUl = document.querySelector('.task-list')
const errorMsg = document.querySelector('.error-msg')
const taskInProgress = document.querySelector('.task-in-progress')

addTaskButton.addEventListener('click', () => {

    let taskInputValue = document.getElementById('task').value;

        
   
    if( taskInputValue != '' ){
        let threeDigitsId = () => Math.floor(Math.random() * 900);
        let randomId = threeDigitsId();

        let liEle = document.createElement('li');
        liEle.textContent = taskInputValue;
        liEle.setAttribute('data-id',`${randomId}`);
        taskListUl.appendChild(liEle);

        document.getElementById('task').value = '';

        let progressBtn = document.createElement('button');
        progressBtn.setAttribute('data-id', `${randomId}`)
        progressBtn.textContent = "Move to Progress";
        liEle.appendChild(progressBtn);

        // empty the error message text
        errorMsg.textContent = " "

    }else{
        errorMsg.textContent = "Please write your task first!"
    }
    
});

document.querySelector('.task-list').addEventListener('click', (e) => {
    if(e.target.tagName === "BUTTON"){
       const btnId = e.target.dataset.id;
        const parent = e.target.parentElement;
        const parentId = parent.getAttribute('data-id');
        if(btnId === parentId){
            e.target.textContent = "mark as done"
            taskInProgress.appendChild(parent)
        }
        console.log(parentId);
    }
    
})



console.log(taskContainer);