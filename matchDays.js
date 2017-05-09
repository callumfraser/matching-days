var firstDate = document.querySelector('#firstDate')  ;
var secondDate = document.querySelector('#secondDate');
var button = document.querySelector('.subButton');
var days = document.querySelectorAll('.days')

firstDate.addEventListener('change', filter);

secondDate.addEventListener('change', filter)

function filter(){
  var frstDt = new Date(firstDate.value);
  var day1 = frstDt.getDay();
  var scndDt = new Date(secondDate.value);
  var day2 = scndDt.getDay();

  for (i=0; i<days.length; i++){
    days[i].classList.remove("secondDate");
    days[i].classList.remove("firstDate");
    days[i].classList.remove("matchingDays");
  }
  if(day1===day2){
    days[day2].classList.add("matchingDays")
  }
  else{
    if (day2>=0){
    days[day2].classList.add("secondDate");
  }
    if (day1>=0){
      days[day1].classList.add('firstDate');
    }
  }
};
