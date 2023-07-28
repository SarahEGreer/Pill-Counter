let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count

}

const timestamp = new Date().toLocaleString();

function save() {
    let countStr = `${count} pills @ ${timestamp} \r\n`
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

}
