//------------VARIABLES----------
let inaid = document.querySelector(".inaide");
let subaid = document.querySelector(".subaide");
let appren = document.querySelector(".apprenant");

//------------ÉCCOUTEURS-----------
subaid.addEventListener("click", ajoutAide);
appren.addEventListener("click", Check);

//------------FONCTIONS-------------
//AJOUT D'UNE PERSONNE QUI VEUT ETRE AIDÉE
function ajoutAide(event) {
  event.preventDefault();
  //Creer une nouvelle ligne
  const newAide = document.createElement("tr");
  newAide.classList.add("todo");
  //creer une cellule nom (input "je veux de l'aide")
  const newList = document.createElement("td");
  newList.innerText = inaid.value;
  newList.classList.add("todo_item");
  newAide.appendChild(newList);
  // creer une cellule date
  const nDate = document.createElement("td");
  nDate.innerHTML = recherche_date();
  nDate.classList.add("todo_date");
  newAide.appendChild(nDate);
  // creer une cellule avec le bouton "Je passe mon tour"
  const griButton = document.createElement("button");
  griButton.innerText = "Je passe mon tour";
  griButton.classList.add("gribtn");
  newAide.appendChild(griButton);
  //renvoyer dans le tableau
  appren.appendChild(newAide);
  //REINTINIALISE LA VALEUR DE L'INPUT
  inaid.value = "";
  console.log("coucou", newAide);
}
//___________GRISER UNE LIGNE____________
function Check(e) {
  const item = e.target;
  if (item.classList[0] === "gribtn") {
    item.parentElement.classList.toggle("grise");
  }
}
//------------DATE------------
function recherche_date() {
  var d = new Date(); //instensiation de la date
  let day = addZero(d.getDate()); //instensiation du jour
  let month = addZero(d.getMonth() + 1); //instensiation du mois
  let h = addZero(d.getHours()); //instensiation de l'heure
  let m = addZero(d.getMinutes()); //instensiation des minute
  let s = addZero(d.getSeconds()); //instensiation des seconde
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  time = h + ":" + m + ":" + s; //cree l'heure au format demander
  var date = day + "/" + month + "/" + d.getFullYear() + ",   " + time; //cree la date au format demander
  return date;
}

//#############################OK_OK_OK###################
//#############################OK_OK_OK###################
