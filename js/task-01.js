// 1. Знайти унікальний елемент categories
// 2. Знайти всі категорії ul та їх кількість(li.item) і вивести
// 2. Для кожного элемента li.item  знайти і вивести  
//  - текст заголовку елемента(тегу < h2 >)
//  - кількість елементів в категорії(усіх < li >)

const getItemRef = () => {
    const categories = document.querySelector(`#categories`);
    const categoriesAll = document.querySelectorAll(`#categories ul`);
    console.log(`Number of categories:`, categoriesAll.length);

    const itemAll = document.querySelectorAll(`.item`);
    for (const item of itemAll) {
        const categoriesItemName = item.querySelector(`h2`);
        console.log(` Category:${categoriesItemName.textContent}`);

        const categoriesItemLength = item.querySelectorAll(`ul li`);
        console.log(`Elements: ${categoriesItemLength.length}`);
    }
    
}
getItemRef();
