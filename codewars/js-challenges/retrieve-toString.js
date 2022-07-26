// Recover toString() here :)
//Booleans, Numbers, Array -> to string
// Recover toString() here :)
//Booleans, Numbers, Array -> to string
// let tipos = [Boolean, Number, Array]

//OBJETIVO: cuando recibamos cualquiera de estos tipos pasarlos a string sin usar directamente toString()

Boolean.prototype.toString = function () {
  return JSON.stringify(this);
};
Array.prototype.toString = function () {
  return JSON.stringify(this);
};
Number.prototype.toString = function () {
  return JSON.stringify(this);
};

// MEJOR SOLUCIÓN

tipos.forEach(
  (tipo) =>
    (tipo.prototype.toString = function () {
      return JSON.stringify(this);
    })
);
