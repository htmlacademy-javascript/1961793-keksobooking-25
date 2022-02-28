let min=1;
let max=10;
function getLocation(min, max) {
  return Math.random() * (max - min) + min;
}

if (min>max) {
  alert( "Ошибка!" );
}

getLocation(min, max);