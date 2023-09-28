const task3Element = document.getElementById('task-3');

function first(){
    alert('Some text');
}

function second(text){
    alert(text);
}

first();
second('Second function');

task3Element.addEventListener('click', first);