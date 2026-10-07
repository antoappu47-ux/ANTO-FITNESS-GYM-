var toastTimer;

function showToast(msg){
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ t.classList.remove('show'); }, 3000);
}

function joinNow(){
  showToast("Welcome to ANTO FIT! 💪");
}

function selectPlan(plan){
  showToast("You selected the " + plan + " membership plan!");
}

function contactUs(){
  showToast("Thank you for contacting ANTO FIT! Phone: +91 6385415974");
}
