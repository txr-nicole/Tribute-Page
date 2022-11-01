function upPage() {
    window.scrollTo({
        top: '0',
        left: '0',
        behavior: 'smooth'
    })

}
const button = document.querySelector("div")
console.log(button);
function verifyScroll() {
    if (window.scrollY >= 406) {
        button.classList.add('showButton')
    } else {
        button.classList.remove('showButton')
    }
}
