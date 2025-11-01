const tasklist = document.getElementById("taskList");
const inputt = document.getElementById("txt");
function createList(){
      const task = document.createElement("div");
      task.classList.add("taske")
      const inputv = inputt.value;
      task.innerHTML = inputv + " " + "<button class = 'btn' onClick = 'deleteList(this)'>Done</button>";
      tasklist.append(task);   
      inputt.value = "";
}

function deleteList(Button){
    Button.parentElement.remove();
    
}
