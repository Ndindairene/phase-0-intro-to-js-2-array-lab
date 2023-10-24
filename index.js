const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
  }

  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }

  function destructivelyRemoveLastCat(name){
    cats.pop(name)
  }
  function destructivelyRemoveFirstCat(name){
    cats.shift(name)
  }
  function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
  }
 
  module.exports = {
    appendCat,
    cats,
  };


function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
  }
 
  module.exports = {
    prependCat,
    cats,
  };

  function removeLastCat() {
    if (cats.length === 0) {
      return cats;
    }
    const newCats = [...cats];
    newCats.pop();
    return newCats;
  }
 
  module.exports = {
    removeLastCat,
    cats,
  };

  function removeFirstCat() {
    if (cats.length === 0) {
      return cats;
    }
    const newCats = [...cats];
    newCats.shift();
    return newCats;
  }
 
  module.exports = {
    removeFirstCat,
    cats,
  };
