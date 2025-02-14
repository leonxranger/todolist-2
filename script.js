
const list = document.getElementsByTagName("ul")[0];

document.getElementsByClassName("add-button")

function newtask(){
   
    if (document.getElementById("input").value === ''){
        window.alert("Please enter a valid task")
    }
    else{
        let listitem = document.createElement("li");

        listitem.textContent = document.getElementById("input").value;
        list.appendChild(listitem);
        input.value = "";

        listitem.onclick = function(){
            
            if (this.style.textDecoration==="line-through"){
                this.style.textDecoration = "none";
                this.style.backgroundColor = "#FFF0DC";
                button.style.backgroundImage = "url(./images/button-unchecked.png)"
            }
            else{
                this.style.textDecoration = "line-through";
                this.style.backgroundColor = "#F8E7F6"
                button.style.backgroundImage = "url(./images/button-checked.png)"
            }
            
        }
        let  button = document.createElement("b");
        listitem.appendChild(button);

        document.getElementById("input").textContent = '';
        
    }
}
let listitem = document.getElementsByTagName("li");


    for(let i of listitem){
        
        i.onclick = function checked(){

        let button = document.createElement("b");
        i.appendChild(button);
        
            if (this.style.textDecoration==="line-through"){
                this.style.textDecoration = "none";
                button.style.backgroundImage === "url(./images/button-checked.png)"
                
            }
            else{
                this.style.textDecoration = "line-through";
                this.style.backgroundColor = "F8E7F6"
                button.style.backgroundImage === "url(./images/button-unchecked.png)"
            }
           }
           
}