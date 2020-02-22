let endDate = new Date("Mar 01, 2020 23:59:59").getTime();


let i = setInterval(function() {

    var now = new Date().getTime();
    var distance = endDate - now;
    

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.querySelector('.timer').innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;
    

    if (distance < 0) {
        clearInterval(i);
        document.querySelector(".timer").innerHTML = "Koniec promocji";
    }
}, 1000);
