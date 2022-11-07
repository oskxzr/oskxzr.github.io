const navbarHolder = document.getElementById("navbar")

const title = document.createElement("a")
const titleb = document.createElement("b")
titleb.innerHTML = "kats"
title.appendChild(titleb)
title.href = "/"
title.classList.add("title")
navbarHolder.appendChild(title)

const buttonsHolder = document.createElement("div")
buttonsHolder.classList.add("buttonsholder")
navbarHolder.appendChild(buttonsHolder)

// check if they are logged in
const identity = localStorage.getItem("identity")

if (identity == null) {
    const login = document.createElement("a")
    login.innerHTML = "login"
    login.href = "https://discord.com/api/oauth2/authorize?client_id=1036189222870196254&redirect_uri=https%3A%2F%2Fkats.nz%2Flogin&response_type=code&scope=identify%20email"
    login.classList.add("login")
    buttonsHolder.appendChild(login)
} else {
    fetch('https://Chanel-Backend.oskxzr.repl.co/users?code=' + identity)
        .then(response => response.json())
        .then(data => {
            const logout = document.createElement("a")
            logout.innerHTML = "Logout"
            logout.href = "/logout"
            buttonsHolder.appendChild(logout)

            const profile = document.createElement("a")
            profile.innerHTML = "Edit Profile"
            profile.href = "/myprofile"
            buttonsHolder.appendChild(profile)

            const username = document.createElement("p")
            console.log(data)
            username.innerHTML = data["username"] + "#" + data["discriminator"]
            buttonsHolder.appendChild(username)
        
            const profilePic = document.createElement("img")
            profilePic.src = `https://cdn.discordapp.com/avatars/${data["id"]}/${data["avatar"]}.jpeg`
            buttonsHolder.appendChild(profilePic)

        })
        .catch(err => {
            window.location.replace("https://kats.nz/logout")
        });
}

function onLoaded(){
    navbarHolder.classList.add("visible")
}

console.log(document.readyState)

if(document.readyState === 'complete') {
    onLoaded()
} else {
window.addEventListener('load', function () {
    onLoaded()
  })
}