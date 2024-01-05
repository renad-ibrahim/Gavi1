// ****************************Small Screen Navbar **********************************************
var hamburger = document.getElementsByClassName("bars-menu")[0];
var smallMenue = document.getElementsByClassName("small-nav-menu")[0];
// var small = document.getElementsByClassName("small")[0];
// console.log(small);


hamburger.addEventListener("click", function () {
  console.log("hello");
  smallMenue.classList.toggle("hide");
  // small.classList.toggle("fixed");
  // console.log(smallMenue.classList.contains("hide"));
});
// ******************************Skills Section Progress Bar **********************************
var p = document.getElementsByTagName('progress')[0];
var span = document.getElementsByClassName("skill-rate")[0];
var count = 0;
function countProgress1() {
  if (count < 90) {
    p.value = count;
    count = count + 1;
    span.innerHTML = count + "%"
  }
  setTimeout(countProgress1, 400);
}
countProgress1();

var p1 = document.getElementsByTagName('progress')[1];
var span1 = document.getElementsByClassName("skill-rate")[1];
var count1 = 0;
function countProgress2() {
  if (count1 < 60) {
    p1.value = count1;
    count1 = count1 + 1;
    span1.innerHTML = count1 + "%"
  }
  setTimeout(countProgress2, 500);
}
countProgress2();

var p2 = document.getElementsByTagName('progress')[2];
var span2 = document.getElementsByClassName("skill-rate")[2];
var count2 = 0;
function countProgress3() {
  if (count2 < 85) {
    p2.value = count2;
    count2 = count2 + 1;
    span2.innerHTML = count2 + "%"
  }
  setTimeout(countProgress3, 600);
}
countProgress3();

var p3 = document.getElementsByTagName('progress')[3];
var span3 = document.getElementsByClassName("skill-rate")[3];
var count3 = 0;
function countProgress4() {
  if (count3 < 75) {
    p3.value = count3;
    count3 = count3 + 1;
    span3.innerHTML = count3 + "%"
  }
  setTimeout(countProgress4, 700);
}
countProgress4();
/////////////////////////////////////////////////////////////////////////////////////////
//********************Form validation in GET IN TOUCH SECTION*******************************  */
var form = document.forms[0];
var userName = document.getElementById('name');
var userEmail = document.getElementById('email');
var userSub = document.getElementById('subject');
var sendbtn = document.getElementsByClassName("send")[0];

var errorName = document.getElementsByClassName("error")[0];
var errorEmail = document.getElementsByClassName("error")[1];
var errorSubject = document.getElementsByClassName("error")[2];
var wrongIconName = document.getElementsByClassName("wrong-icon")[0];
var wrongIconEmail = document.getElementsByClassName("wrong-icon")[1];
var wrongIconSubject = document.getElementsByClassName("wrong-icon")[2];

sendbtn.addEventListener("click", formdisplay);
function formdisplay(e) {
  validateName(e);
  validateEmail(e);
  validateSubject(e);
}
// ******************************************* Validate Name input *****************************************
function validateName(e) {
  if (userName.value === "" || userName.value.length < 3) {
    e.preventDefault();
    errorName.style.display = 'block';
    wrongIconName.style.display = 'block';
  }
  else if (isFinite(userName.value)) {
    e.preventDefault();
    errorName.style.display = 'block';
    wrongIconName.style.display = 'block';
  }
  else {
    errorName.style.display = "none";
    wrongIconName.style.display = 'none';
  }
}
// ******************************************* Validate Email input *****************************************
function validateEmail(e) {
  var regexEmail = /^\S+@\S+\.\S+$/; //ex)>>>> renad@gmail.com
  if (regexEmail.test(userEmail) || userEmail.value === "") {
    e.preventDefault();
    errorEmail.style.display = 'block';
    wrongIconEmail.style.display = 'block';
  }
  else {
    errorEmail.style.display = 'none';
    wrongIconEmail.style.display = 'none';
  }
}
// ******************************************* Validate Subject input *****************************************
function validateSubject(e) {
  if (userSub.value === "" || userSub.value.length < 10) {
    e.preventDefault();
    errorSubject.style.display = 'block';
    wrongIconSubject.style.display = 'block';
  }
  else if (isFinite(userSub.value)) {
    e.preventDefault();
    errorSubject.style.display = 'block';
    wrongIconSubject.style.display = 'block';
  }
  else {
    errorSubject.style.display = "none";
    wrongIconSubject.style.display = 'none';
  }
}
/* *********************************************************************************** */


const progressBar = document.getElementById('progress-bar');
  const progressFill = document.getElementById('progress-fill');

  function updateProgressBar() {
    const scrollY = window.scrollY || window.pageYOffset;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / maxScroll) * 100;

    progressFill.style.width = `${progress}%`;
  }

  window.addEventListener('scroll', () => {
    updateProgressBar();
    toggleProgressBarVisibility();
  });

  function toggleProgressBarVisibility() {
    const scrollY = window.scrollY || window.pageYOffset;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollY > 0 && scrollY < maxScroll) {
      progressBar.style.display = 'block';
    } else {
      progressBar.style.display = 'none';
    }
  }