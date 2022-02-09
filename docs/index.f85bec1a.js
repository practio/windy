document.addEventListener("click", handleClickEvent);
function handleClickEvent(e) {
    const { action , target  } = e.target.dataset;
    if (action === "show" || action === "showModal") {
        let targetElement = document.querySelector(target);
        if (!targetElement) return;
        targetElement[action]();
    } else if (action === "close") {
        let targetElement = document.querySelector(target) || e.target.closest("dialog");
        if (!targetElement) return;
        targetElement.close();
    }
}

//# sourceMappingURL=index.f85bec1a.js.map
