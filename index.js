function togglePassword(id) {
    const input = document.getElementById(id);
    const type = input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);
}
