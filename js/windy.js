document.addEventListener("click", handleClickEvent);
document.addEventListener("keydown", handleKeydownEvent);

function handleKeydownEvent(e) {
  if (e.key === "Escape") {
    hideMenus();
  }
}

function handleClickEvent(e) {
  let action, target;

  let element = e.target;

  while (element && !action && !target) {
    action = element.dataset.action;
    target = element.dataset.target;
    element = element.parentElement;
  }

  if (!element) {
    hideMenus();
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
  } else if (action === "toggle") {
    hideMenus();

    let targetElement = document.querySelector(target);

    if (!targetElement) {
      return;
    }

    targetElement.classList.toggle("hidden");
  }
}

function hideMenus() {
  const menus = document.querySelectorAll("[role=menu]");

  for (let menu of menus) {
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
    }
  }
}
