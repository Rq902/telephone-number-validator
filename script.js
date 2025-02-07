const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const validate = (value) => {
  const phoneRegEx = /^(?:\+91|0)?[-\s]?[6-9]\d{9}$/;

  if (phoneRegEx.test(value)) {
    result.innerHTML += `<span>Valid number: ${value}</span><br>`;
  } else {
    result.innerHTML += `<span>Invalid number: ${value}</span><br>`;
  }
};

const showAlert = (value) => {
  if (value) {
    validate(value.trim());
  } else {
    alert("Please provide a phone number");
  }
};

checkBtn.addEventListener("click", () => {
  showAlert(input.value);
});

clearBtn.addEventListener("click", () => {
  input.value = ""; 
  result.innerHTML = ""; 
});
