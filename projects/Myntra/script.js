let bagItems = [];
displayItemsOnHomePage();

function addToBag(itemId) {
  bagItems.push(itemId);
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = "visible";
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = "hidden";
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector(".items-container");
  
if (!itemsContainerElement){
  return;
}

  let innerHtml = "";
  items.forEach((item) => {
    innerHtml += `<div class="item-container">
  <img class="item-image"
    src="${item.image}"
    alt="item-image
    "
  />
  <div class="rating">${item.rating.stars}⭐ | ${item.rating.count}</div>
  
  <div class="company-name">${item.company}</div>
  <div class="item-name">${item.item_name}</div>
  <div class="price">
    <span class="current-price">Rs ${item.current_price}</span>
    <span class="Original-price">Rs ${item.original_price}</span>
    <span class="discount">(${item.discount_percentage}% OFF)</span>
  </div>
  <button class="btn-add-bag" onclick = "addToBag(${item.id})" >Add to Bag</button>
  </div>`;
  });
  itemsContainerElement.innerHTML = innerHtml;
}
// let item = {
//   item_image: "images/1.jpg",
//   rating: {
//     stars: 4.5,
//     noOfReview: 1500,
//   },
//   company_name: "Carlton London",
//   item_name: "Rhodium-Plated CZ Floral Studs",
//   current_price: 606,
//   original_price: 1045,
//   discount_percentage: 42,
// };