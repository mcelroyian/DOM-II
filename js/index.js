// Your code goes here


//helper functions
const get = (element) => document.querySelector(element)
const getAll = (element) => document.querySelectorAll(element)

//prevent links to go anywhere
let navLinks = getAll('.nav a')
for (i=0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', e => {
        e.preventDefault()
    })
}



// On load append text to h1 with time
let welcome = get('.intro h2')

window.addEventListener('load', (e) => {
    var d = new Date().toTimeString()
    var t = d.slice(0, 7)

    welcome.append(` Page opened at: ${t}`)
})

//Mouse Hover - Add / Remove border

let paragraphs = getAll('p')

for (i=0; i < paragraphs.length; i++) {
    
    // mouseover: add border
    paragraphs[i].addEventListener('mouseover', function(e) {
        // console.log(this)
        // debugger
        this.style.border = "2px solid red"
    })

    //mouseout - remove border to paragraphs
    paragraphs[i].addEventListener('mouseout', function(e) {
        // console.log(this)
        // debugger
        this.style.border = null
    })

    //dbclick: highlight text of element
    paragraphs[i].addEventListener('dbclick', (e) => {
        e.target.style.backgroundColor = 'yellow'
        debugger
    })

}
/* 

Events
    click
    keydown
    dbclick
    select
    focus
    cut
    copy
    wheel
    resize

*/


