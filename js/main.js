const alertBox = document.querySelector('.alert');
const closeAlert = document.getElementById('closeAlert');
const sendInput = document.getElementById('input-send');
const inputArea = document.getElementById('input-text');
const textArea = document.getElementById('textarea-input');

function alertCloser (e) {
  e.preventDefault();
  alertBox.style.visibility = 'hidden'
}

function sumbitForm() {
  alert('Your form has been sumbitted!');
  const inputArea = document.getElementById('input-text').value="";
  const textArea = document.getElementById('textarea-input').value="";
}

function errorCheck(e) {
  if (inputArea.value == "") {
    alert('Please input a user!');
    return false;
  } if (textArea.value == "") {
    alert('Please enter a message!')
    return false;
  } else {
    sumbitForm();
  }
  return true;
}


closeAlert.addEventListener('click', alertCloser);


sendInput.addEventListener('click', errorCheck);
