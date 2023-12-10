const categoryList = document.querySelector('.categories');
const jokeEl = document.querySelector('.joke');
const another = document.querySelector('.another');
let currentCategory;
let currentCategoryEl;

const loadJoke = async (category) => {
  const res = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
  const joke = await res.json();
  jokeEl.textContent = joke.value;
};

const showCategories = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/categories");
  const categories = await res.json();

  categories.forEach((category) => {
    const li = document.createElement('li');
    li.textContent = category;
    categoryList.append(li);

    li.addEventListener('click', () => {
      if (currentCategoryEl) {
        currentCategoryEl.classList.remove('current');
      }
      currentCategory = category;
      currentCategoryEl = li;
      li.classList.add('current');

      loadJoke(category);
    });
  });
};

showCategories();
another.addEventListener('click', () => {
  if (currentCategory) {
    loadJoke(currentCategory);
  }
});
