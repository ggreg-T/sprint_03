
    //selecteur
const inaid = document.querySelector(".inaide");
const subaid = document.querySelector(".subaide");
const appren = document.querySelector(".apprenant");
var mdate = date_time();


//________ÉCOUTEURS___________
subaid.addEventListener("click", ajoutAide);
appren.addEventListener("click", deleteCheck)

        //______FONCTIONS______
//__________AJOUT D'UNE PERSONNE QUI VEUT ETRE AIDÉE______

function ajoutAide(event){
    event.preventDefault();
//creer une ligne
    const newAide = document.createElement("tr");
    newAide.classList.add("todo");
//creer une une cellule pour l'input
const newList = document.createElement("td");
newList.innerText = inaid.value;
newList.classList.add("todo_item");
newAide.appendChild(newList);
// creer date
const ndate = document.createElement("td");
ndate.innerText = adate.value;
newAide.appendChild(ndate)

//passe mon tour
// const pmt = document.createElement("td");
// pmt.innerText = compButton;
// newAide.appendChild(pmt)
const compButton = document.createElement("button");
compButton.innerText = 'Je passe mon tour'
compButton.classList.add("compbtn");
newAide.appendChild(compButton);
//renvoyer dans la liste
appren.appendChild(newAide);
//REINTINIALISE LA VALEUR DE L'INPUT
inaid.value = "";
}

//bouton supression a transposer autre part
// const trashButton = document.createElement("button");
// trashButton.innerText = 'XXX'
// trashButton.classList.add("trashbtn");
// newAide.appendChild(trashButton);

//___________GRISER OU SUPPRESSION D'UNE PERSONNE____________
function deleteCheck(e){
    // const item = e.target;
    // if (item.classList[0] === "trashbtn") {
    //     item.parentElement.remove();
    // }
    // //____Partie grisée_______
    if (item.classList[0] === "compbtn") {
        item.parentElement.classList.toggle("grise");
    }
}
// function refresh(e){
// const item = e.target;
// if (item.classList[0] === "butt2") {
//     item.parentElement.remove();
// }
// }


// //_______DATE________
// function date_time() {
//     var adate = new Date();
  
//     var year = adate.getFullYear();
//     var month = adate.getMonth();
//     var day = adate.getDay();
  
//     var date_formate = day + "/" + month + "/" + year;
//     return date_formate;
//   }

        
