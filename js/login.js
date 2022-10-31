const body = document.getElementById("body")

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const code = urlParams.get('code')

if (code !== null) {
    fetch('https://Chanel-Backend.oskxzr.repl.co/login?code=' + code)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            sessionStorage.setItem("identity", data)
            console.log(sessionStorage.getItem("identity"))
            // window.location.replace("https://kats.nz")
        })
        .catch(err => {
            console.log(response)
            console.error(err)
            body.children[0].innerHTML = "uh oh!"
            body.children[1].innerHTML = "something went wrong... please try again"
        });

} else {
    body.children[0].innerHTML = "uh oh!"
    body.children[1].innerHTML = "something went wrong... please try again"
}
