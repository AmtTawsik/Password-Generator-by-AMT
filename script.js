let charSet = "abcdefghijklmnopqrstuvwxABCDEFGHIJKLMNOPQRSTUVWX";
let numberSet = "0123456789";
let specialCharSet = "!@#$%^&*()";

const getElement = (id) => {
  const element = document.getElementById(id);
  return element;
};

const handleSlider = (event) => {
  const charCountEl = getElement("char-count");
  charCountEl.innerText = event;
  generatePassword()
};

const handleCheckbox = () => {
  const numberEl = getElement("number");
  const specialCharEl = getElement("special");

  if (numberEl.checked === true) {
    console.log('in if')
    charSet += "0123456789";
  } else {
    charSet = charSet.replace(/0123456789/g, "");
  }
  if (specialCharEl.checked === true) {
    charSet += "!@#$%^& .()";
  } else {
    charSet = charSet.replace(/[^\w ]/g, "");
  }
  generatePassword();
};

const generatePassword = () => {
  const passwordEl = getElement("password");

  const charCount = getElement("char-count").innerText;

  let password = "";

  for (let i = 0; i < charCount; i++) {
    console.log(charCount)
    const randomNumber = Math.floor(Math.random() * charSet.length);
    password += charSet.substring(randomNumber, randomNumber + 1);
  }
  console.log(password)
  passwordEl.value = password;
};

const handleViewPassword = () => {
  const passwordEl = getElement("password");
  const view = getElement("view-check");
  const viewIcon = getElement("view-icon");

  if (view.checked === true) {
    passwordEl.setAttribute("type", "text");
    viewIcon.innerHTML = `<i class="fa-solid fa-eye-slash text-white"></i>`;
  } else {
    passwordEl.setAttribute("type", "password");
    viewIcon.innerHTML = `<i class="fa-solid fa-eye text-white"></i>`;
  }
};

const handleCopy = () => {
  const copyText = getElement("password");
  copyText.select();
  document.execCommand("copy");
  alert("Password copied to clipboard");
};

generatePassword();
