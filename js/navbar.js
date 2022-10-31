const navbarHolder = document.getElementById("navbar")

const title = document.createElement("a")
title.innerHTML = "kats"
title.href = "/"
title.classList.add("title")
navbarHolder.appendChild(title)

const buttonsHolder = document.createElement("div")
buttonsHolder.classList.add("buttonsholder")
navbarHolder.appendChild(buttonsHolder)

// check if they are logged in
const identity = sessionStorage.getItem("identity")

if (identity == null) {
    const login = document.createElement("a")
    login.innerHTML = "login"
    login.href = "https://discord.com/api/oauth2/authorize?client_id=1036189222870196254&redirect_uri=https%3A%2F%2Fkats.nz%2Flogin&response_type=code&scope=identify%20email"
    login.classList.add("login")
    buttonsHolder.appendChild(login)
} else {
    
}