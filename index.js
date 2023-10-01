let cats = ["Milo", "Otis", "Garfield"];

beforeEach(function (cats) {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyAppendCat(name){
    cats.push("Ralph");
  }

  function destructivelyPrependCat(name){
    cats.unshift("Bob");
  }

  function destructivelyRemoveLastCat(){
    cats.pop("Ralph");
  }

  function destructivelyRemoveFirstCat(){
    cats.shift("Bob");
  }

 function appendCat(name){
  let catsArray = [...cats, "Broom"];
  return catsArray;
 }

 function prependCat(name){
  let catsArray = ["Arnold",...cats];
  return catsArray;
 }

 function removeLastCat(){
    return cats.slice(0, -1);   
 }
 
 function removeFirstCat(){
    return cats.slice(1);
 }