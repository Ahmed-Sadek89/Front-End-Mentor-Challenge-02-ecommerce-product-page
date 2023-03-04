const body = document.body
const image_view = document.getElementById('image-view')
const layout_view = document.getElementById('image-view2');
const image_list = document.querySelectorAll('.image-list');

const layout = document.getElementById('layout')
const layout_close = document.getElementById('close');

const prev = document.getElementById('prev');
const next = document.getElementById('next');

const prev2 = document.getElementById('prev2');
const next2 = document.getElementById('next2');

layout_close.addEventListener('click', () => {
    layout.setAttribute("style", "display:none;")
    body.setAttribute("style", "overflow:scroll;")
})

image_list[0].classList.add('selectedImage')

image_list.forEach(element => {
    element.addEventListener('click', (e) => {
        // remove classes firstly from each image
        image_list.forEach(index => {
            index.className = ''
        })

        // open and close the layout
        layout.setAttribute("style", "display:block;");
        body.setAttribute("style", "overflow:hidden;");

        let imageSplit = e.target.alt.split('-')
        let imageName = `images/${imageSplit[0]}-${imageSplit[1]}-${imageSplit[2]}.jpg`
        image_view.setAttribute("src", imageName);
        layout_view.setAttribute('src', `${imageName}`);

        // select the clicked image in the list and layout
        element.classList.toggle("selectedImage")
        
        
    })
});


let i = 1
next.addEventListener('click', () => {
    console.log(next);
    i++
    image_view.setAttribute('src', `images/image-product-${i}.jpg`);
    if( i >= 4 ) {
        i = 0
    }
})

prev.addEventListener('click', () => {
    console.log(prev);
    i--
    image_view.setAttribute('src', `images/image-product-${i}.jpg`);
    if( i <= 1 ) {
        i = 5
    }
})

next2.addEventListener('click', () => {
    console.log(next);
    i++
    layout_view.setAttribute('src', `images/image-product-${i}.jpg`);
    if( i >= 4 ) {
        i = 0
    }
})

prev2.addEventListener('click', () => {
    console.log(prev);
    i--
    layout_view.setAttribute('src', `images/image-product-${i}.jpg`);
    if( i <= 1 ) {
        i = 5
    }
})