const categoriesEl = document.querySelectorAll('li.item')
console.log(`'В списке ${categoriesEl.length} категории.'`)



const calcEl = () => {
    categoriesEl.forEach((categorie) => {
        console.log(`Категория: ${categorie.querySelector('h2').textContent};
        Количество элементов: ${categorie.querySelectorAll('li').length}`)
    })
}

calcEl();
