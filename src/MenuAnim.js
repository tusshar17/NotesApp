let isClicked = true;
function MenuCollapse() {
  const editBtn = document.getElementById("edit");
  const starBtn = document.getElementById("star");
  const delBtn = document.getElementById("delete");
  const btnsArray = [editBtn, starBtn, delBtn];
  if (isClicked) {
    let topMargin = 10;
    for (let i = 0; i < btnsArray.length; i++) {
      // btnsArray[i].style.display = "flex";
      btnsArray[i].style.opacity = "1";
      btnsArray[i].style.transform = "translateY(" + topMargin + "px)";
      topMargin += 10;
    }
    isClicked = false;
  } else {
    let topMargin = 40;
    for (let i = 0; i < btnsArray.length; i++) {
      btnsArray[i].style.opacity = "0";
      btnsArray[i].style.transform = "translateY(-" + topMargin + "px)";
      topMargin += 40;
    }
    isClicked = true;
  }
}

export { MenuCollapse };
