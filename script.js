// létrehozzuk a _load függvényt 
function _load(){
  
  // változóba mentjük a root div elemet
  let rootE = document.getElementById("root");

  // létrehozunk egy stringekből álló tömböt
  let aTextArray = ["alma", "cseresznye", "eper", "dinnye", "szeder", "mandarin", "ribizli", "narancs", "paradicsom", "citrom", "banana", "datolya", "szilva", "barack", "pomelo", "kiwi","grapefruit", "kaki"];

  //console.log(aTextArray.length);

  // a tömb elemeiből fruit class-ú div elemeket hozunk létre for ciklussal
  for (let index = 0; index < aTextArray.length; index++) {

    //console.log(aTextArray[index]);

    rootE.insertAdjacentHTML("beforeend", `
      <div class="fruit">${aTextArray[index]}</div>
    `);

  }
  //console.log(document.getElementsByClassName("fruit"));

  // létrehozunk egy fruitDivs változót, amiben eltároljuk az összes fruit class-ú elemet
  let fruitDivs = rootE.querySelectorAll(".fruit");
  
  // kiíratjuk a tömb eleminek számát
  console.log(fruitDivs.length);

  // for ciklussal végigmegyünk a tömb elemein
  for (let index = 0; index < fruitDivs.length; index++) {
    //console.log(fruitDivs[index]);
    //fruitDivs[index].classList.add("anotherClass");
    
    //console.log(index === 1);
    //console.log(index % 2 === 0);

    // minden páros indexű elemre beállítjuk a trueClass-t
    if(index % 2 === 0){
      fruitDivs[index].classList.add("trueClass");
      
    // ha az elem indexe páratlan és maradék nélkül osztható 5-tel, akkor az anotherClass-t
    } else if(index % 5 === 0) {
      fruitDivs[index].classList.add("anotherClass");
      
    // az 5-tel maradék nélkül nem osztható páratlan elemekre a falseClass-t
    } else {
      fruitDivs[index].classList.add("falseClass");
    }
    
  }


}
// hozzárendeljük a window objektumhoz a _load függvényt a load eseményre
window.addEventListener("load", _load);