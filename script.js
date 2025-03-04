function toggleMenu() {
    const menu = document.querySelector('.nav-items');
    menu.classList.toggle('active');
}
const userData = () => {
    let a = document.getElementById("name").value;
    let b = document.getElementById("email").value;
    let c = document.getElementById("subject").value;
    let d = document.getElementById("msg").value;
    if (a == "" || b == "" || c == "" || d == "") {
        alert("All Filds Mendotary");
            return false;
    } else {
        true;
    }
}   