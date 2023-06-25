let d = new Date();

let date = d.getDate(); // date = 14
let year = d.getFullYear(); // year = 2023
let month = d.getMonth();
let days = d.getDay();

console.log(month);

// console.log(days);

switch (days) {
  case 0:
    days = "Sunday";
    break;
  case 0:
    days = "Sunday";
    break;
  case 1:
    days = "Monday";
    break;
  case 2:
    days = "Tuesday";
    break;
  case 3:
    days = "Wednesday";
    break;
  case 4:
    days = "Thursday";
    break;
  case 5:
    days = "Friday";
    break;
  case 6:
    days = "Suterday";
    break;
}

switch (month) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "Octuber";
    break;
  case 10:
    month = "November";
    break;
  case 11:
    month = "December";
    break;
}

printdate = document.getElementById("date");
printdate.innerHTML = date;

printday = document.getElementById("year");
printday.innerHTML = year;

printmonth = document.getElementById("month");
printmonth.innerHTML = month;

printday = document.getElementById("day");
printday.innerHTML=days;