const start = performance.now();

window.addEventListener('load', () => {
    console.log(`Время полной загрузки страницы: ${performance.now() - start} ms`)
})
