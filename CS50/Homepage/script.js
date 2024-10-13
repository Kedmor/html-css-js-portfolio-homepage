// Display the current year in the footer
document.getElementById("current-year").textContent = new Date().getFullYear();

document.getElementById("packing-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const itemInputField = document.getElementById("item-input");
    const itemText = itemInputField.value.trim();

    if (itemText !== "") {
        addItemToPackingList(itemText);
        itemInputField.value = "";
    }
});

/* Adding items */
function addItemToPackingList(itemText) {
    const packingListContainer = document.getElementById("packing-list");
    const listItemElement = document.createElement("li");
    listItemElement.className = "list-group-item d-flex justify-content-between align-items-center";
    listItemElement.textContent = itemText;


    const packButtonElement = document.createElement("button");
    packButtonElement.className = "btn btn-success btn-sm mx-1";
    packButtonElement.textContent = "Pack";

    const removeButtonElement = document.createElement("button");
    removeButtonElement.className = "btn btn-danger btn-sm mx-1";
    removeButtonElement.textContent = "Remove";

    packButtonElement.addEventListener("click", function() {
        if (packButtonElement.textContent === "Pack") {
            packButtonElement.textContent = "Unpack";
        } else {
            packButtonElement.textContent = "Pack";
        }
    });
    
/* Removing items */
    removeButtonElement.addEventListener("click", function() {
        packingListContainer.removeChild(listItemElement);
    });

    listItemElement.appendChild(packButtonElement);
    listItemElement.appendChild(removeButtonElement);

    packingListContainer.appendChild(listItemElement);
}
