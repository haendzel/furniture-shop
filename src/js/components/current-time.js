const viewHourPromo = document.querySelector('.hour')

let currentTime = new Date();
let currentMinutes = currentTime.getMinutes();
let currentHour = currentTime.getHours();

viewHourPromo.innerHTML = `${currentHour}:${currentMinutes < 10 ? ("0" + currentMinutes) : currentMinutes }`;
