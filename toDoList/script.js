function add(){
    var inputValue = document.getElementById("inputTask");
    if(inputValue.value.length==0){
        alert("Fill the input field!!")
    }
    else{
        var outerShell = document.createElement("div")
        outerShell.className="outerShellClass"
        document.getElementById("input").appendChild(outerShell)
        var textShell = document.createElement("p")
        outerShell.appendChild(textShell)
        textShell.innerHTML=inputValue.value
        var strike=document.getElementsByTagName("p")
        for(var j=0;j<strike.length;j++){
            strike[j].onclick = function(){
                this.style.textDecoration="line-through"
            }
        }
        var deleteAction = document.createElement("button")
        deleteAction.innerHTML = "X"
        outerShell.appendChild(deleteAction)
        var close=document.getElementsByTagName("button")
        for(var j=0;j<close.length;j++){
            close[j].onclick = function(){
                this.parentElement.style.display="none"
            }
        }
    }
   
}