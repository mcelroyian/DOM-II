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



// #1 On load append text to h1 with time
let welcome = get('.intro h2')

window.addEventListener('load', (e) => {
    var d = new Date().toTimeString()
    var t = d.slice(0, 7)

    welcome.append(` Page opened at: ${t}`)
})

//Mouse Hover - Add / Remove border

let paragraphs = getAll('p')

for (i=0; i < paragraphs.length; i++) {
    
    // #3 mouseover: add border
    paragraphs[i].addEventListener('mouseover', function(e) {
        // console.log(this)
        // debugger
        this.style.border = "2px solid red"
    })

    // #4 mouseout - remove border to paragraphs
    paragraphs[i].addEventListener('mouseout', function(e) {
        // console.log(this)
        // debugger
        this.style.border = null
    })

    // #5 dbclick: highlight text of element
    paragraphs[i].addEventListener('dblclick', (e) => {
        e.target.style.backgroundColor = 'yellow'
    })

}


// #6 hitting arrow up/down changes opacity

let body = get('body')
let opacity = 1
document.addEventListener('keydown', (e) => {
    
    if (e.keyCode === 38) {
        e.preventDefault()
        // increae opacity
        if (opacity < 1) {
            opacity = opacity + .1
        }
        body.style.opacity = opacity;
    } else if (e.keyCode === 40) {
        e.preventDefault()
        // decrease opacity
        if (opacity > 0) {
            opacity = opacity - .1
        }
        body.style.opacity = opacity;
    }
})


// #7 Get value from clipboard and assign it a background color

//Todo write a isHex function to check whether value is correct
//begins with # etc

const isHex = (text) => {
    return true;
}

document.addEventListener('dblclick', (e) => {
    navigator.clipboard.readText().then(
        clipText => {
            if (isHex(clipText)) {
                console.log(`current hex is ${clipText}`)
            document.querySelector("body").style.backgroundColor = clipText
        } else {
            console.log('not a hex');
        }
            })
            
        
})

// #8 Use mouse cordinates to make rgb values for background
let header = get('header');
document.addEventListener('mousemove', (e) => {
    let r, g
    r = e.screenX
    g = e.screenY
    header.style.backgroundColor = `rgb(${r},${g}, 100)`
    console.log(`rgb (${r},${g}, 255)`)
})

// #9 use wheel to add lorem ipsum to paragraph
let intro = get('.intro p')
let lorum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis vel lacus imperdiet vulputate."
intro.addEventListener('wheel', e => {
    e.preventDefault()
    e.target.innerText += lorum;
})

// #10 idk




/* 

Events
    click
    select
    focus
    cut
    copy
    resize

*/


