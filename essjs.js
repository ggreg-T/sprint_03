//selecteur
const inaid = document.querySelector(".inaide");
const subaid = document.querySelector(".subaide");
const apcontain = document.querySelector(".apcontainer");
const appren = document.querySelector(".apprenant");
//ecouteur
subaid.addEventListener("click", ajoutAide);



//fonction
function ajoutAide(event){
    event.preventDefault();
    //creer une div
    const newAide = document.createElement("div");
    newAide.classList.add("todo");
//creer une liste ou date
const newList = document.createElement("li");
newList.innerText = "yoo";
newList.classList.add("todo_item");
newAide.appendChild(newList);
//passe mon tour
const compButton = document.createElement("button");
compButton.innerText = 'Passe mon tour'
compButton.classList.add("compbtn");
newAide.appendChild(compButton);
//renvoyer dans la liste
appren.appendChild(newAide);

}