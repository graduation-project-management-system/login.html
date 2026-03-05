function showSection(sectionId) {

    let sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");

    let menuItems = document.querySelectorAll(".menu li");
    menuItems.forEach(item => {
        item.classList.remove("active");
    });

    event.target.classList.add("active");

}
function logout() {
  
    window.location.href = "index.html";
}