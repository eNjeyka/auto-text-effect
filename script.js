let textEl = document.getElementById("text")
let speedEl = document.getElementById("speed")
let text = "We Love Programming!"

let i = 1
let speed = 300 / speedEl.value

writeText()

function writeText () {
    textEl.innerHTML = text.slice(0, i)

    i++

    if (i > text.length) {
        i = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => {
    speed = 300/e.target.value
})