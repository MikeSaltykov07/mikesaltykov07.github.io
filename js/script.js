const start = new Date();
window.addEventListener('DOMContentLoaded', () => {
    console.log(`Время полной загрузки DOM: ${Date.now() - start} ms`)
})

window.addEventListener('load', () => {
    console.log(`Время полной загрузки страницы: ${Date.now() - start} ms`)
})
