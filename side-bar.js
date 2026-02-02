var hamburger = document.querySelector(".hamburger");
var sidebar = document.querySelector(".side-nav");

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    updateSidebarWidth();
})

// Function to overide the sidebar width value
function updateSidebarWidth() {
    if(sidebar.classList.contains("collapsed")) {
        document.documentElement.style.setProperty('--side-nav-width', '3.5rem');
    }
    else {
        document.documentElement.style.setProperty('--side-nav-width', '12rem');
    }
}


window.addEventListener("load", () => {
    var w = window.innerWidth;
    if(w < 768) {
        sidebar.classList.add("collapsed");
        updateSidebarWidth();
    }
})
