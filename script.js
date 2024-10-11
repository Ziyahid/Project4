const input = document.getElementById("input");
const listContainer = document.getElementById("listcontainer")

function addTask(){
    if(input.value===""){
        alert("You Must Enter Task to add task")
    }
    else{
        const li =document.createElement("li");
        li.innerHTML=input.value;
        listContainer.appendChild(li)
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    input.value="";
    saveData();

}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
        
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();

    }

},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showData();

