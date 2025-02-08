
const list = document.getElementsByTagName("ul")[0];



function newtask(){
    if (document.getElementById("input").value === ''){
        window.alert("Please enter a valid task")
    }
    else{
        let listitem = document.createElement("li");

        listitem.textContent = document.getElementById("input").value;
        list.appendChild(listitem);
        
    }
}
let listitem = document.getElementsByTagName("li");

listitem.onclick = function(){
    
}