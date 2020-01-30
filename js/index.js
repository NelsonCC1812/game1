let started = true

window.onload = () => {

    let btn = document.getElementById("start")
    btn.onclick = () => {
        btn.classList.add("invisible")
        Game.init(document.getElementById("myCanvas"))

    }

}

// function start() {
//     Game.init(document.getElementById("myCanvas"))
//     return true
// }