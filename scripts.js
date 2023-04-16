function toggleNav() {
  navSize = document.getElementById("layout-content").style.marginLeft;
  sidebar = document.querySelector(".sidebarmenu").style.width;
  if (navSize == "320px") {
    return close();
  }
  if (sidebar == "260px") {
    return close();
  }
  return open();
}
function open() {
  document.getElementById("layout-content").style.marginLeft = "320px";
  document.querySelector(".sidebarmenu").style.width = "260px";
}
function close() {
  document.getElementById("layout-content").style.marginLeft = "65px";
  document.querySelector(".sidebarmenu").style.width = "0px";
}
