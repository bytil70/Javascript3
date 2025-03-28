
let errorParagraph = document.getElementById('error')
console.log(errorParagraph)

function purchase() {
    console.log('buton clicked')
    errorParagraph.textContent = 'Something went wrong, please try again.'
}