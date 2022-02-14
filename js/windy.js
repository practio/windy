document.addEventListener("click", handleClickEvent);

function handleClickEvent(e) {
  let action, target;

  let element = e.target;

  while (element && !action && !target) {
    action = element.dataset.action;
    target = element.dataset.target;
    element = element.parentElement;
  }

  if (action === "show" || action === "showModal") {
    let targetElement = document.querySelector(target);

    if (!targetElement) {
      return;
    }

    targetElement[action]();
  } else if (action === "close") {
    let targetElement =
      document.querySelector(target) || e.target.closest("dialog");

    if (!targetElement) {
      return;
    }

    if (targetElement.close) {
      targetElement.close();
    }
  } else if (action === "remove") {
    let targetElement =
      e.target.closest(target) || document.querySelector(target);

    if (!targetElement) {
      return;
    }

    if (targetElement.remove) {
      targetElement.remove();
    }
  }
}
