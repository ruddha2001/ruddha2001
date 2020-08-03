function nameHandler(id, nameField) {
  let element = document.getElementById(id);
  let name = document.getElementById(nameField).value;
  element.innerHTML = `Hello ${name}, it's nice to meet you!`;
}

function emailHandler(id, emailField) {
  let element = document.getElementById(id);
  let email = document.getElementById(emailField).value;
  if (!validateEmail(email)) {
    element.innerHTML = `Opps! This doesn't look like a proper email`;
  } else {
    element.innerHTML = `It looks perfect!`;
  }
}

function messageHandler(id, messageField) {
  let element = document.getElementById(id);
  element.innerHTML = `You message gets the top priority always!`;
}

function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}
