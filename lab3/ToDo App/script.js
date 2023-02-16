let input = document.querySelector('.tsk')
let addbttn = document.querySelector('.add')
let tasks = document.querySelector('.task2')


input.addEventListener('keyup', () =>{
    if(input.value.trim() != 0){
        addbttn.classList.add('active')
    }
    else{
        addbttn.classList.remove('active')
    }
})

addbttn.addEventListener('click', () => {
    if (input.value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
            <div class="item2">
                <div class="click"><i class="fa-duotone fa-square-check"></i></div>
                <p>${input.value}</p>
                <div class="trash"><i class="fa-solid fa-trash-can"></i></div>        
            </div>
            `
        tasks.appendChild(newItem);
        input.value = '';
    }
})

tasks.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fa-trash-can')){
        e.target.parentElement.parentElement.remove();
    }
}) 


tasks.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fa-square-check')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }

})
