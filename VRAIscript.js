    //------------VARIABLES----------
    const inaid = document.querySelector(".inaide");
    const subaid = document.querySelector(".subaide");
    const appren = document.querySelector(".apprenant");
    var ndate = recherche_date();
    
    //------------ÉCCOUTEURS-----------
    subaid.addEventListener("click", ajoutAide);
    appren.addEventListener("click", deleteCheck)
    // raffraichir.addEventListener("click", filtre)
    
    //------------FONCTIONS-------------
    //AJOUT D'UNE PERSONNE QUI VEUT ETRE AIDÉE
    function ajoutAide(event){
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
        const compButton = document.createElement("button");
        compButton.innerText = 'Je passe mon tour';
        compButton.classList.add("compbtn");

        // const pmt = document.createElement("td");
        // pmt.appendChild(compButton);
        // pmt.classList.add("passe");
        // newAide.appendChild(pmt);
        newAide.appendChild(compButton);
        
        //renvoyer dans le tableau
        appren.appendChild(newAide);
        //REINTINIALISE LA VALEUR DE L'INPUT
        inaid.value = "";
    }
    //___________GRISER OU SUPPRESSION D'UNE PERSONNE____________
    function deleteCheck(e){
        const item = e.target;
        if (item.classList[0] === "compbtn") {
            item.parentElement.classList.toggle("grise");
        }
    }
    //_________OK_OK_OK____________
    //____SUPPRIMER ET RAFFRAICHIR_____
    // const raffraichir = document.querySelector("butt2")
// const trashButton = document.createElement("button");
// trashButton.innerText = 'XXX'
// trashButton.classList.add("trashbtn");
// newAide.appendChild(trashButton);
// if (item.classList[0] === "trashbtn") {
    //     item.parentElement.remove();
    // }
    
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
    return date; } 
    
    //   function date_time() {
    //     var date = new Date();
    //     var year = date.getFullYear();
    //     var month = date.getMonth();
    //     var day = date.getDay();  
    //     var date_formate = day + "/" + month + "/" + year;
    //     return date_formate;
    //   }




//__________FILTRE_________
// function filtre(e) {
// const todos = appren.childNodes;
// todos.forEach(function(todo){
//     switch(e.target.value){

//     }
// })




// }


        
