var item_id = 2;

function addMenuItem() {
  $(".menu-items").append("<hr>");
  $(".menu-items").append(
    `<div class='form-group'><label for="type_res${item_id}">Menu Type</label><input type='text'class='form-control' id=type_res${item_id} required></div>`
  );
  $(".menu-items").append(
    `<div class='form-group'><label for="item_name${item_id}">Item Name</label><input type='text'class='form-control' id=item_name${item_id} required></div>`
  );
  $(".menu-items").append(
    `<div class='form-group'><label for="item_desc${item_id}">Item Description</label><input type='text'class='form-control' id=item_desc${item_id} required></div>`
  );
  $(".menu-items").append(
    `<div class='form-group'><label for="item_price${item_id}">Item Price</label><input type='text'class='form-control' id=item_price${item_id} required></div>`
  );
  item_id++;
}

function addRestaurant() {
  //  console.log($(".menu-items > div").length);
}

// {
//   /* <div class="form-group">
// <label for="type_res1">Menu Type</label>
// <input type="text" class="form-control" id="type_res1" placeholder="Eg. Breakfast, Lunch, Dinner"
//     required>
// </div>
// <div class="form-group">
// <label for="item_name1">Item Name</label>
// <input type="text" class="form-control" id="item_name1" placeholder="Eg. Greek Salad, Burrito, etc..."
//     required>
// </div>
// <div class="form-group">
// <label for="item_desc1">Item Description</label>
// <input type="text" class="form-control" id="item_desc1"
//     placeholder="Description of Item, Include allergies, ingredients etc..." required>
// </div>
// <div class="form-group">
// <label for="item_price1">Item Price</label>
// <input type="text" class="form-control" id="item_price1" placeholder="Eg. Greek Salad, Burrito, etc..."
//     required>
// </div> */
// }
