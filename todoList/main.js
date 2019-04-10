all_item_array = [];

window.onload = function() {
  const input_things = document.getElementsByClassName("todo-app__input")[0];
  const footer_count = document.getElementsByClassName("todo-app__total")[0];

  function someCodeToCreateNewItem() {
    var thingtodo = input_things.value;
    input_things.value = "";
    const root = document.getElementById("root");
    const item_block = document.getElementById("todo-list");
    const itemNode = document.createElement("LI");
    const wrapper = document.createElement("DIV");
    const input_title = document.createElement("h1");
    const close_img = document.createElement("img");
    checkbox = document.createElement("INPUT");
    const checkbox_label = document.createElement("label");

    newItem = { node: itemNode, isComplete: false };
    all_item_array.push(newItem);
    footer_count.innerHTML = all_item_array.length + " left";

    item_block.setAttribute("id", "todo-list");
    item_block.setAttribute("class", "todo-app__list");
    input_things.after(item_block);

    itemNode.setAttribute("class", "todo-app__item");
    item_block.appendChild(itemNode);

    wrapper.setAttribute("class", "todo-app__checkbox");
    itemNode.appendChild(wrapper);

    input_title.setAttribute("class", "todo-app__item-detail");
    input_title.innerHTML = thingtodo;
    itemNode.appendChild(input_title);

    close_img.setAttribute("class", "todo-app__item-x");
    close_img.src = "./img/x.png";
    itemNode.appendChild(close_img);

    checkbox.setAttribute("id", "checkbox_donot");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = false;
    wrapper.appendChild(checkbox);

    checkbox_label.setAttribute("for", "0");
    wrapper.appendChild(checkbox_label);
  }

  input_things.addEventListener("keyup", event => {
    if (event.keyCode === 13 && event.target.value !== "") {
      someCodeToCreateNewItem();
    }
  });

  function close_imgclose(parent) {
    for (var i = 0; i < all_item_array.length; i++) {
      if (all_item_array[i]["node"] === parent) {
        all_item_array.splice(i, 1);
      }
    }
  }

  function toggle(parent) {
    for (var i = 0; i < all_item_array.length; i++) {
      if (
        all_item_array[i]["node"] === parent &&
        all_item_array[i]["isComplete"] === false
      ) {
        parent
          .getElementsByClassName("todo-app__item-detail")[0]
          .setAttribute("style", "text-decoration: line-through");
        all_item_array[i]["isComplete"] = true;

        break;
      } else if (
        all_item_array[i]["node"] === parent &&
        all_item_array[i]["isComplete"] === true
      ) {
        all_item_array[i]["isComplete"] = false;
        parent
          .getElementsByClassName("todo-app__item-detail")[0]
          .setAttribute("style", "");
        break;
      }
    }
  }

  const tag = document.getElementById("todo-list");

  tag.addEventListener("click", function(event) {
    //toogle between active complete
    if (event.target.nodeName == "LABEL") {
      //console.log(event.target.parentElement.parentElement);
      if (event.target.previousSibling.checked == false) {
        toggle(event.target.parentElement.parentElement);
        event.target.previousSibling.checked = true;
        //console.log(all_item_array);
      } else {
        event.target.previousSibling.checked = false;
        toggle(event.target.parentElement.parentElement);
        //console.log(all_item_array);
      }
    }
    //remove list by X
    if (event.target.nodeName == "IMG") {
      close_imgclose(event.target.parentElement);
      event.target.parentElement.remove();
      footer_count.innerHTML = all_item_array.length + " left";
    }
  });

  const down_bar = document.getElementById("todo-footer");

  down_bar.addEventListener("click", function(event) {
    //clear button
    if (event.target.id == "clear") {
      var tmp = [];
      for (var i = 0; i < all_item_array.length; i++) {
        console.log(i);
        if (all_item_array[i]["isComplete"] === true) {
          all_item_array[i]["node"].remove();
          tmp.push(i);
        }
      }
      for (var i = tmp.length - 1; i >= 0; i--)
        all_item_array.splice(tmp[i], 1);

      footer_count.innerHTML = all_item_array.length + " left";
    }
    //all complete active button
    if (event.target.id == "all") {
      footer_count.innerHTML = all_item_array.length + " left";
    }
    if (event.target.id == "complete") {
      var count = 0;
      for (var i = 0; i < all_item_array.length; i++) {
        if (all_item_array[i]["isComplete"] === true) {
          count += 1;
        }
        footer_count.innerHTML = count + " left";
      }
    }
    if (event.target.id == "active") {
      var count = 0;
      for (var i = 0; i < all_item_array.length; i++) {
        if (all_item_array[i]["isComplete"] === false) {
          count += 1;
        }
        footer_count.innerHTML = count + " left";
      }
    }
  });
};
