const submitListButton = document.getElementById('addItem');
const newList = document.getElementById('inputList');
const list = document.getElementById('list');
const deleteList = document.getElementsByClassName('delete-list');

submitListButton.addEventListener('click', function (e) {
  const template = '' +
  '<article class="media">' +
    '<div class="media-content">' +
        '<div class="content">' +
            '<p>' + newList.value + '</p>' +
            '<button class="button is-danger delete-list">حذف</button>' +
        '</div>' +
    '</div>' +
  '</article>';
  list.innerHTML += template;
  newList.value = "";
  newList.focus();

  for (i = 0; i < deleteList.length; i++) {
    deleteList[i].addEventListener('click', function(e){
      e.target.closest('.media').remove();
    });
  }
  
});

