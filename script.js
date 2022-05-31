(function (){
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day= hour * 24;


let birthday = "June 10, 2022 00:00:00",
countdown = new Date(birthday).getTime(),
x=setInterval(function (){

    let now = new Date().getTime(),
    distance = countdown - now;

document.getElementById("days").innerText =
Math.floor(distance/(day)),


document.getElementById("hours").innerText =
Math.floor((distance%(day)) / (hour)),


document.getElementById("minutes").innerText =
Math.floor((distance%(hour)) / (minute)),


document.getElementById("seconds").innerText =
Math.floor((distance%(minute)) / second) 

//  when the date is reached
if (distance < 0) {
    let headline = document.getElementById("headline");

        countdown = document.getElementById("countdown");
        happy = document.getElementById("happy");
        content = document.getElementById("content");
        birth = document.getElementById("birth");
        birthday = document.getElementById("birthday");
    headline.innerText="";
    countdown.style.display ="none";
    happy.style.display ="none";
    content.style.display = "none";
    birth.style.display = "none";
    birthday.style.display = "block";
    clearInterval(x);
}
// seconds
}, 0)

}());


// function loader(){
//     document.querySelector('.loader-container').classList.add('fade-out');
  
//   }
//   function fadeOut(){
//     setInterval(loader, 3000);
//   }
//   window.onload = fadeOut();
  