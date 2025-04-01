const box = document.getElementById('box');
const gala = document.getElementById('gala');
const boxes = document.querySelectorAll('.swiper-slide')
let imgContainer = document.getElementById('imgContainer')

closeBox = () => {
    box.classList.remove('left-1/2')
    box.classList.add('left-[-100%]')
}

gala.addEventListener('click', closeBox);


boxes.forEach(item => {
    item.addEventListener('click', () => {
        let imgSrc = item.querySelector('img').src
        let img = document.createElement('img')
        img.src = imgSrc
        img.alt = 'sample_image'
        img.classList.add('w-full', 'shadow-2xl')
        imgContainer.innerHTML = ""
        imgContainer.appendChild(img)

        box.classList.remove('left-[-100%]')
        box.classList.add('left-1/2')
    })
})