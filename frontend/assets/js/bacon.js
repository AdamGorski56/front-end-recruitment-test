const addBaconSection = document.getElementsByTagName("section")[0];
const displayBaconSection = document.getElementsByTagName("section")[1];

addBaconSection.addEventListener("click", function () {
  displayBaconSection.insertAdjacentHTML(
    "beforeend",
    '<img src="/images/bacon.jpg" alt="Beautiful slices of fried bacon">'
  );
});
addBaconSection.insertAdjacentHTML(
  "beforeend",
  '<img src="/images/husky.jpg" alt="Beautiful wolfdog asking for bacon">'
);
