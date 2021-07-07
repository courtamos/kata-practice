// given a date, convert it to a readable string
// 2017/12/02 => December 2nd, 2017

const talkingCalendar = function (date) {
  const dateSplit = date.split("/");
  const year = dateSplit[0];
  let month = dateSplit[1];
  let day = dateSplit[2];

  if (month === "01") {
    month = "January";
  } else if (month === "02") {
    month = "February";
  } else if (month === "03") {
    month = "March";
  } else if (month === "04") {
    month = "April";
  } else if (month === "05") {
    month = "May";
  } else if (month === "06") {
    month = "June";
  } else if (month === "07") {
    month = "July";
  } else if (month === "08") {
    month = "August";
  } else if (month === "09") {
    month = "September";
  } else if (month === "10") {
    month = "October";
  } else if (month === "11") {
    month = "November";
  } else if (month === "12") {
    month = "December";
  }

  if (
    day === "01" ||
    day === "02" ||
    day === "03" ||
    day === "04" ||
    day === "05" ||
    day === "06" ||
    day === "07" ||
    day === "08" ||
    day === "09"
  ) {
    day = day.slice(1);
  }

  if (day === "01" || day === "31") {
    day += "st";
  } else if (day === "02") {
    day += "nd";
  } else if (day === "03") {
    day += "rd";
  } else {
    day += "th";
  }

  const dateString = `${month} ${day}, ${year}`;
  return dateString;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
