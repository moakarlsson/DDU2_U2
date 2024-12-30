let main = document.createElement("main");
let commonBoxContainer = document.createElement("div");
let howManyNumbersText = document.createElement("p");
let input = document.createElement("input");
input.type = "text";

let createButton = document.createElement ("button");
document.body.append(main);
main.append(commonBoxContainer);
commonBoxContainer.append(howManyNumbersText);
commonBoxContainer.append(input);
commonBoxContainer.append(createButton);

createButton.textContent = "Create";
createButton.style.marginLeft = "10px"
createButton.style.padding = "7px";

howManyNumbersText.textContent = "How Many Numbers In the Grid?";
howManyNumbersText.style.fontFamily = "Helvetica";
howManyNumbersText.style.margin = "30px 10px";

input.style.width = "60px";
input.style.height = "30px";
input.style.borderRadius = "3px";
input.placeholder = "95";

commonBoxContainer.style.display = "flex";
commonBoxContainer.style.alignItems = "center";
commonBoxContainer.style.justifyContent = "center";

let boxContainer = document.createElement("div");
    boxContainer.style.display = "grid";
    boxContainer.style.gridTemplateColumns = "repeat(19, 1fr)";
    boxContainer.style.gap = "5px";
    boxContainer.style.marginTop = "70px";
    document.body.appendChild(boxContainer); 


function createBoxesForAll(count){
    boxContainer.innerHTML = "";
    for (let i = 0; i < count; i++){
        let box = document.createElement("div");
        let randomNumber = Math.floor(Math.random()*90) + 1;
        box.textContent = randomNumber;

        box.style.display = "flex";
        box.style.justifyContent = "center";
        box.style.alignItems = "center";
        box.style.border = "1px solid black";
        box.style.borderRadius = "10px";
        box.style.height = "50px";
        box.style.width = "50px"
        box.style.fontSize = "16px";
        box.style.backgroundColor = "white"; 
    
        boxContainer.appendChild(box);
    }  
}
createBoxesForAll(95);

createButton.addEventListener("click", function(){
    let count = Number(input.value);
    createBoxesForAll(count);
});

