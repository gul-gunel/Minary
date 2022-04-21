const navbar = document.querySelector('.navbar-home');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.remove('attop');
        navbar.classList.add('atbot');
    } else {
      navbar.classList.remove('atbot');
      navbar.classList.add('attop');
    }
};

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

const userSidePanel = document.querySelector('#userSidePanel');
function userSideNav() {
  userSidePanel.classList.toggle('open');
  if (window.scrollY < 100) {
    navbar.classList.remove('attop');
    navbar.classList.add('atbot');
  }
}

const mobSidePanel = document.querySelector('#mobileSidePanel');
const headermenu = document.querySelector('#header-menu');
function mobSideNav() {
  mobSidePanel.classList.toggle('open');
  headermenu.classList.toggle('menu');
  headermenu.classList.toggle('cancel');
}


var timerID = 1;
function timer_has_left(timid) {
    const time = document.querySelector('#time-'+timid);
    const date = time.querySelector('.date').innerText;
    time.querySelector('.date').style.display = "none";
    var endDate = new Date(date).getTime();
    let now = new Date().getTime();
    let t = endDate - now;

    if (t >= 0) {

        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));

        if(days>1){
          time.querySelector("#timer-days").innerText = days + " days ";
        }else if(days==1){
          time.querySelector("#timer-days").innerText = "1 day ";
        }

        if(hours>1){
          time.querySelector("#timer-hours").innerText= ("0" + hours).slice(-2) + " hours ";
        }else if(hours==1){
          time.querySelector("#timer-hours").innerText = "1 hour ";
        }

        if(minutes>1){
          time.querySelector("#timer-minutes").innerText= ("0" + minutes).slice(-2) + " minutes ";
        }else if(minutes==1){
          time.querySelector("#timer-minutes").innerText= "1 minute";
        }

    } else {
        time.querySelector('.timer').innerHTML = "Mint started!";
    }
}


var timerTriggerList = [].slice.call(document.querySelectorAll('[date-type="left"]'));
var timerList = timerTriggerList.map(function(){ timer_has_left(timerID); timerID++; });

setInterval( function(){ var timerxID = 1;
var timerList = timerTriggerList.map(function(){ timer_has_left(timerxID); timerxID++; });
},60000);








/* ORTAK */
// like 
function toggleClass(e) {
  if (e.className == "far fa-heart fa-2x"){
    e.className = "fas fa-heart fa-2x"
  } else {
    e.className = "far fa-heart fa-2x"
  }
}





