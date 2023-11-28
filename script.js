const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".form input"),
  generateBtn = wrapper.querySelector(".form button"),
  qrImg = wrapper.querySelector(".qr-code img");

let preValue;



// generateBtn.addEventListener("click", () => {
//   let qrValue = qrInput.value.trim();
//   if (!qrValue || preValue === qrValue) return;
//   preValue = qrValue;
//   generateBtn.innerText = "Generating QR Code...";
//   qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
//   qrImg.addEventListener("load", () => {
//     wrapper.classList.add("active");
//     generateBtn.innerText = "Generate QR Code";
//   });
// });



// qrInput.addEventListener("keyup", () => {
//   if (!qrInput.value.trim()) {
//     wrapper.classList.remove("active");
//     preValue = "";
//   }
// });




// this active code

generateBtn.addEventListener('click', () => {
  let qrValue = qrInput.value.trim();

  if (!qrValue || preValue === qrValue) return;

  preValue = qrValue;
  generateBtn.textContent = 'Generating QR Code...';
  qrImg.src = '';

  if (isValidURL(qrValue) || isValidText(qrValue)) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener('load', () => {
      wrapper.classList.add('active');
      generateBtn.textContent = 'Generate QR Code';
    });
    qrError.textContent = '';
  } else {
    qrError.textContent = 'Invalid input. Please enter a valid URL or text.';
    wrapper.classList.remove('active');
  }
});

qrInput.addEventListener('keyup', () => {
  if (!qrInput.value.trim()) {
    wrapper.classList.remove('active');
    qrImg.src = '';
    preValue = '';
  }
});

function isValidURL(urlString) {
  const urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\w\.)*\w(:\d+)?(\/.*)?$/gm;
  return urlRegex.test(urlString);
}

function isValidText(textString) {
  return textString.trim().length > 0;
}
