let form = document.querySelector(".login-form");
let emailinput = document.querySelector("[name='email']");
let passwordinput = document.querySelector("[name='password']");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    emailinput.value === null ||
    passwordinput.value === null ||
    emailinput.value === "" ||
    passwordinput.value === ""
  ) {
    alert("Toate campurile sunt obligatorii!");
  } else {
    let completedForm = {};
    const elements = form.elements;
    console.log(elements);
  }
});
