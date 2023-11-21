//window.addEventListener("load", solve);

function solve() {
  // Get written from inputs fields
  let carModel = document.getElementById("car-model");
  let carYear = document.getElementById("car-year");
  let partName = document.getElementById("part-name");
  let partNumber = document.getElementById("part-number");
  let condition = document.getElementById("condition");

  let infoListUl = document.querySelector(".info-list");
  let confirmListUl = document.querySelector(".confirm-list");

  let imgComplete = document.getElementById("complete-img");
  let textComplete = document.getElementById("complete-text");

  const buttonNext = document.getElementById("next-btn");
  buttonNext.addEventListener("click", onClick);

  function onClick(e) {
    e.preventDefault();
    imgComplete.style.visibility = "hidden";
    textComplete.textContent = "";

    if(carModel.value.length < 1
       || carYear.value.length < 1
       || partName.value.length < 1
       || partNumber.value.length < 1
       || condition.value.length < 1
       || carYear.value < 1980
       || carYear.value > 2023
        ) {
          return;
    }

    // Create li and article for the part-content
    let li = document.createElement("li");
    li.setAttribute("class", "part-content");
    let article = document.createElement("article");
    li.appendChild(article);

    // Create paragraphs for the inputs
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let p5 = document.createElement("p");

    // Set textContent in the paragraphs and set paragraphs in the article
    p1.textContent = `Car Model: ${carModel.value}`;
    p2.textContent = `Car Year: ${carYear.value}`;
    p3.textContent = `Part Name: ${partName.value}`;
    p4.textContent = `Part Number: ${partNumber.value}`;
    p5.textContent = `Condition: ${condition.value}`;
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);
    article.appendChild(p5);

    // Create and inject class and textContent for the edit and continue buttons
    let btnEdit = document.createElement("button");
    let btnContinue = document.createElement("button");
    btnEdit.setAttribute("class", "edit-btn");
    btnContinue.setAttribute("class", "continue-btn");
    btnEdit.textContent = "Edit";
    btnContinue.textContent = "Continue";

    // inject new created buttons into the li
    li.appendChild(btnEdit);
    li.appendChild(btnContinue);

    // Set all text for the car parts and new buttons in the ul
    infoListUl.appendChild(li);

    // before reset values has to save into variable for use on the editBtn
    let carModelSaved = carModel.value;
    let carYearSaved = carYear.value;
    let partNameSaved = partName.value;
    let partNumberSaved = partNumber.value;
    let conditionSaved = condition.value;

    // clear info from input fields after click on Next button and disable Next Button
    carModel.value = "";
    carYear.value = "";
    partName.value = "";
    partNumber.value = "";
    condition.value = "";
    buttonNext.disabled = true;

    btnEdit.addEventListener("click", onEdit);
    function onEdit() {
      // return values from infoListUl
      carModel.value = carModelSaved;
      carYear.value = carYearSaved;
      partName.value = partNameSaved;
      partNumber.value = partNumberSaved;
      condition.value = conditionSaved;

      // delete li into infoListUl and activate again Next button
      infoListUl.removeChild(li);
      buttonNext.disabled = false;
    }

    btnContinue.addEventListener("click", onContinue);
    function onContinue() {
      // remove previous created buttons from infoList and remove infoListLi
      li.removeChild(btnEdit);
      li.removeChild(btnContinue);
      infoListUl.removeChild(li);

      // Create and inject class and textContent for the new buttons Confirm and Cancel
      let btnConfirm = document.createElement("button");
      let btnCancel = document.createElement("button");
      btnConfirm.setAttribute("class", "confirm-btn");
      btnCancel.setAttribute("class", "cancel-btn");
      btnConfirm.textContent = "Confirm";
      btnCancel.textContent = "Cancel";

      // inject into confirmListUl newly created buttons
      li.appendChild(btnConfirm);
      li.appendChild(btnCancel);

      // add info and new buttons into confirmList
      confirmListUl.appendChild(li);

      btnConfirm.addEventListener("click", onConfirm);
      function onConfirm() {
        confirmListUl.removeChild(li);
        buttonNext.disabled = false;

        imgComplete.style.visibility = "visible";
        textComplete.textContent = "Part is Ordered!";
      }

      btnCancel.addEventListener("click", onCancel);
      function onCancel() {
        confirmListUl.removeChild(li);
        buttonNext.disabled = false;
      }
    }
  }
}
