const btn = document.getElementById("button");
const birth_day = document.getElementById("birthday");
const resultAge = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birth_day.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultAge.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if ( month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
    age--;
  }

  return age;
}

btn.addEventListener("click", calculateAge);