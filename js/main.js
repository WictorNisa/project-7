const alertBox = document.querySelector('.alert');
const closeAlert = document.getElementById('closeAlert');
const sendInput = document.getElementById('input-send');
const inputArea = document.getElementById('input-text');
const textArea = document.getElementById('textarea-input');

function alertCloser (e) {
  e.preventDefault();
  alertBox.style.visibility = 'hidden'
}

function sumbitForm(e) {
  alert('Your form has been sumbitted!');
  const inputArea = document.getElementById('input-text').value="";
  const textArea = document.getElementById('textarea-input').value="";
}



closeAlert.addEventListener('click', alertCloser);


sendInput.addEventListener('click', sumbitForm);
