function filterRecipes(category) {
  const recipes = document.querySelectorAll('.recipe');
  recipes.forEach(recipe => {
    if (recipe.classList.contains(category)) {
      recipe.style.display = 'block';
    } else {
      recipe.style.display = 'none';
    }
  });
}

function showAll() {
  const recipes = document.querySelectorAll('.recipe');
  recipes.forEach(recipe => {
    recipe.style.display = 'block';
  });
}

function send() {
  let nember = '+212772129809';
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  


  var url = 'https://wa.me/' + nember + '?text=' + ' الاسم : ' + name + '%0a' +
    'رقم الهاتف : ' + phone + '%0a' +
    'العنوان : ' + address + '%0a';
  window.open(url, '_blanck').focus();
}
