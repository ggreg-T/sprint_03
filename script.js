
    //selecteur
const inaid = document.querySelector(".inaide");
const subaid = document.querySelector(".subaide");
const appren = document.querySelector(".apprenant");
// const apcontain = document.querySelector(".apcontainer");
// const now = new Date().toISOString().split('T');

//ecouteur
subaid.addEventListener("click", ajoutAide);
appren.addEventListener("click", deleteCheck)
        //______FONCTIONS______
//__________AJOUT D'UNE PERSONNE QUI VEUT ETRE AIDÉE
function ajoutAide(event){
    event.preventDefault();
//creer une div
    const newAide = document.createElement("div");
    newAide.classList.add("todo");
//creer une liste ou date
const newList = document.createElement("li");
newList.innerText = inaid.value;
newList.classList.add("todo_item");
newAide.appendChild(newList);
//passe mon tour
const compButton = document.createElement("button");
compButton.innerText = 'Passe mon tour'
compButton.classList.add("compbtn");
newAide.appendChild(compButton);
//bouton supression a transposer autre part
const trashButton = document.createElement("button");
trashButton.innerText = 'XXX'
trashButton.classList.add("trashbtn");
newAide.appendChild(trashButton);

//renvoyer dans la liste
appren.appendChild(newAide);
//REINTINIALISE LA VALEUR DE L'INPUT
inaid.value = "";
}
//___________GRISER OU SUPPRESSION D'UNE PERSONNE____________
function deleteCheck(e){
    const item = e.target;
    if (item.classList[0] === "trashbtn") {
        item.parentElement.remove();
    }
    //____Partie grisée_______
    if (item.classList[0] === "compbtn") {
        item.parentElement.classList.toggle("grise");
    }
}


//_______DATE________



        
