//your JS code here. If required.
const button = document.querySelector('input[type="button"]');

button.addEventListener("click", function () {
  const select = document.getElementById("colorSelect");

  // Remove the selected option
  if (select.selectedIndex !== -1) {
    select.remove(select.selectedIndex);
  }
});
