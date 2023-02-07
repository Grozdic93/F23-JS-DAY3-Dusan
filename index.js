let fName = document.querySelector('#fname');
let lName = document.querySelector('#lname');
let age = document.querySelector('#age');
let myDiv = document.querySelector('#separate');
let myBtn = document.querySelector('#myBtn');
let option = document.querySelector('#profession');

myBtn.addEventListener('click', () => {
    myDiv.innerHTML = `<span id="color">${fName.value}</span> ${lName.value} ${age.value}`
    if ((fName.value).length < 5) {
        document.querySelector('#color').style.color = "red"

    } else {
        document.querySelector('#color').style.color = "green"
    }

    if (option.value == 'it') {
        myDiv.style.background = 'purple'
    }
    else if (option.value == 'hospitality') {
        myDiv.style.background = 'yellow'
    }
    else {
        alert('you must choose a proffesion')
    }
})

let container = document.querySelector('.santaContainer');


container.addEventListener('click', (event) => {
    if (event.target.className == 'santa') {
        (event.target).style.opacity = "0"
    }
})

//changing to a randoom color


let colorBtn = document.querySelector('#colorBtn');

colorBtn.addEventListener('click', () => {
    let parent = document.querySelector('.colorChange')
    let rColor1 = Math.floor(Math.random() * 256);
    let rColor2 = Math.floor(Math.random() * 256);
    let rColor3 = Math.floor(Math.random() * 256);
    parent.style.background = `rgb(${rColor1}, ${rColor2}, ${rColor3})`

})

let myParagraph = document.querySelector('#para')
let circle = document.querySelector('.circle');
circle.addEventListener('mouseover', function () {
    myParagraph.textContent = "you are in the circle"
}
)
circle.addEventListener('mouseout', function () {
    myParagraph.textContent = "you are outside of the circle"
}
)
circle.addEventListener('click', function () {
    circle.style.background = 'gray'
}
)
circle.addEventListener('dblclick', function () {
    circle.style.background = 'blue'
}
)





