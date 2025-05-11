const ranges = document.querySelectorAll('#ranges')
const image = document.querySelector('.image')
const img = document.querySelector('.image img')
const head = document.querySelector('.heading span')
const color = document.querySelector('#color')

ranges[0].addEventListener('input', (e) => {
    let value = e.target.value
    image.style.padding = `${value}px`
})
ranges[1].addEventListener('input', (e) => {
    let value = e.target.value
    image.style.filter = `blur(${value}px)`
})
ranges[2].addEventListener('input', (e) => {
    let value = e.target.value
    image.style.transform = `rotate(${value}deg)`
})
ranges[3].addEventListener('input', (e) => {
    let value = e.target.value
    img.style.transform= `scale(${value})`
})
color.addEventListener('input', (e) => {
    let value = e.target.value
    head.style.color = value
    image.style.backgroundColor = value
})