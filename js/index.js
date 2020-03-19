let started = true

window.onload = () => {
    let input = document.getElementById("enemies")
    let title = document.querySelector("h2")

    let btn = document.getElementById("start")
    btn.onclick = () => {
        btn.classList.add("invisible")
        title.classList.add("invisible")
        input.classList.add("invisible")

        Game.init(document.getElementById("myCanvas"), btn, input.value)
    }
}

// function start() {
//     Game.init(document.getElementById("myCanvas"))
//     return true
// }