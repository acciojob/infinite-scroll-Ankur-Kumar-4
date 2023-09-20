document.addEventListener("DOMContentLoaded", function () {
  const olList = document.getElementById("infi-list");
  let itemCount = 10; // Initial number of list items
  const itemsToAdd = 2; // Number of items to add when scrolling

  // Function to add more list items
  function addMoreItems() {
    for (let i = 1; i <= itemsToAdd; i++) {
      const li = document.createElement("li");
      li.textContent = "Item " + (itemCount + i);
      olList.appendChild(li);
    }
    itemCount += itemsToAdd;
  }

  // Attach a scroll event listener to the main content area
  olList.addEventListener("scroll", function () {
    // Calculate the scroll position
    const scrollPosition = this.scrollTop + this.clientHeight;
    const totalHeight = olList.scrollHeight;

    // Check if the user has scrolled to the bottom or near it
    if (scrollPosition >= totalHeight - this.clientHeight) {
      // If the user is near the bottom, add more list items
      addMoreItems();
    }
  });

  // Initial loading of list items
  addMoreItems();
});
