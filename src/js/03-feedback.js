const form = document.querySelector('form.feedback-form');
const formInputEl = document.querySelector('form.feedback-form input');
const formTextArea = document.querySelector('form.feedback-form textarea');
// const inputTEST = document.querySelector('#testID');
const formObj = {};
if (localStorage.getItem('feedback-form-state')) {
  let testX = JSON.parse(localStorage.getItem('feedback-form-state'));
  //   console.log('testX: ', testX.email);
  //   console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  formTextArea.value = testX?.message;
  formInputEl.value = testX?.email;
  formObj.email = testX?.email;
  formObj.message = testX?.message;
  //   inputTEST.value = testX?.email;

  //   console.log('formInputEl: ', formInputEl);
}

form.addEventListener('submit', submitFormFn);
formTextArea.addEventListener('input', inputFormTextAreaListener);
formInputEl.addEventListener('input', inputFormEmailListener);
function inputFormEmailListener(e) {
  //   localStorage.setItem(
  //     'feedback-form-state',
  //     JSON.stringify({ email: e.target.value })
  //   );
  formObj.email = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formObj));
  //   console.log('formObj: ', formObj);
}
function inputFormTextAreaListener(e) {
  //   console.log('e: ', e.target.value);

  //   console.log('e.message: ', e.target.message.value);
  //   console.log('e.email: ', e.target.email.value);
  formObj.message = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formObj));
  //   console.log('formObj: ', formObj);
}

function submitFormFn(e) {
  e.preventDefault();
  //   console.log('e.message: ', e.target.message.value);
  //   console.log('e.email: ', e.target.email.value);
  //   console.log({ email: e.target.email.value, message: e.target.message.value });
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
