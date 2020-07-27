function innerHTMLTimeoutAddition(id, skillList, timeout, text) {
  let element = document.getElementById(id);
  let i = 1;
  let animateFunc = setInterval(function () {
    if (i <= text.length) {
      let substring = text.substring(0, i);
      element.innerHTML = substring + "_";
      if (element.innerHTML === text + "_") {
        clearInterval(animateFunc);
        showSkillList(skillList);
      }
      i++;
    }
  }, timeout);

  if (element.innerHTML === text) alert("Done");
}

function showSkillList(id) {
  setTimeout(function () {
    increaseOpacityGradually(0, id);
  }, 750);
}

function increaseOpacityGradually(prev, id) {
  let element = document.getElementById(id);
  let increaseFunc = setInterval(function () {
    prev += 0.1;
    element.style.opacity = prev;
    if (prev == 1.0) clearInterval(increaseFunc);
  }, 50);
}
