/* eslint-disable no-undef */
/* eslint-disable strict */
//To complete this challenge requires:

//1. Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.
//(done)2. Linking to an externally hosted library (jQuery) and a locally hosted JavaScript file (index.js).
//(done)3. Linking to your application JavaScript file from the index.html page.
//4. Using this and event delegation

//Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().

//enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
//check and uncheck items on the list by clicking the "Check" button
//permanently remove items from the list

//Event listener for "submit" being clicked. Adds a <li> element that adds what the user added to the shopping list
$(function addItem() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const newItem = $(event.currentTarget).find('#shopping-list-entry').val();
    console.log(newItem);
    if (newItem !=='') {
      const entry = $(`<li>
    <span class="shopping-item">${newItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
      $('.shopping-list').append(entry);
    }
  });



  //delete button
  $('.shopping-list').on(click, '.shopping-item-delete', event => {
    event.preventDefault();
    //Find the parents of the button clicked -- delete -- which should be the "li" container, and remove it
    $(event.currentTarget).parents('li').remove();
  });

  //Check-mark button
  $('.shopping-list').on(click, '.shopping-item-toggle', event => {
    event.preventDefault();
    //The "toggleClass" method removes the "checked" class if present, adds if not. CSS takes care of rest.
    $(event.currentTarget).parents('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
});

