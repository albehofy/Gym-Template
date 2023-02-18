
document.querySelector('.links-toggle .links').addEventListener("click", () => {
    document.querySelector('.links-toggle img').style.display = 'block'
    document.querySelector('header .main-menue .d-flex').classList.add("open")
    document.querySelector('.links-toggle .links').style.display = "none"
})
document.querySelector('.links-toggle img').addEventListener("click", () => {
    document.querySelector('.links-toggle img').style.display = 'none'
    document.querySelector('header .main-menue .d-flex').classList.remove("open")
    document.querySelector('.links-toggle .links').style.display = "block"
})