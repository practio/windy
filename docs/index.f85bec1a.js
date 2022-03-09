main();
function main() {
    dropdowns();
    modals();
}
function dropdowns() {
    document.addEventListener("click", handleClickEvent);
    document.addEventListener("keydown", handleKeydownEvent);
    function handleClickEvent(e) {
        let action, target;
        const isClickOnElementInMenu = e.target.matches("[role=menu] *");
        const isClickOnLinkInMenu = e.target.matches("[role=menu] a");
        if (isClickOnElementInMenu && !isClickOnLinkInMenu) return;
        let element = e.target;
        while(element && !action && !target){
            action = element.dataset.action;
            target = element.dataset.target;
            element = element.parentElement;
        }
        if (!element) {
            hideDropdownMenus();
            return;
        }
        if (action === "toggle") {
            hideDropdownMenus();
            let targetElement = document.querySelector(target);
            if (!targetElement) return;
            targetElement.classList.toggle("hidden");
        }
    }
    function handleKeydownEvent(e) {
        if (e.key === "Escape") hideDropdownMenus();
    }
    function hideDropdownMenus() {
        const dropdownMenus = document.querySelectorAll("[role=dropdown] > [role=menu]");
        for (let dropdownMenu of dropdownMenus)if (!dropdownMenu.classList.contains("hidden")) dropdownMenu.classList.add("hidden");
    }
}
function modals() {
    document.addEventListener("click", handleClickEvent);
    function handleClickEvent(e) {
        let action, target;
        let element = e.target;
        while(element && !action && !target){
            action = element.dataset.action;
            target = element.dataset.target;
            element = element.parentElement;
        }
        if (action === "show" || action === "showModal") {
            let targetElement = document.querySelector(target);
            if (!targetElement) return;
            targetElement[action]();
        } else if (action === "close") {
            let targetElement = document.querySelector(target) || e.target.closest("dialog");
            if (!targetElement) return;
            if (targetElement.close) targetElement.close();
        } else if (action === "remove") {
            let targetElement = e.target.closest(target) || document.querySelector(target);
            if (!targetElement) return;
            if (targetElement.remove) targetElement.remove();
        }
    }
}

//# sourceMappingURL=index.f85bec1a.js.map
