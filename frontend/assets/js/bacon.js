const addBaconSection = document.getElementsByTagName("section")[0];
const displayBaconSection = document.getElementsByTagName("section")[1];

addBaconSection.addEventListener("click", createBacon);

function createBacon() {
  displayBaconSection.insertAdjacentHTML(
    "beforeend",
    '<img src="/images/bacon.jpg" alt="Beautiful slices of fried bacon">'
  );
}

addBaconSection.insertAdjacentHTML(
  "beforeend",
  '<img src="/images/husky.jpg" alt="Beautiful wolfdog asking for bacon">'
);
// Have no idea why this code works fine separately, but when i combine it in one file or import together with form validation code its doesn't work, thats why i implemented this code in edge file.
