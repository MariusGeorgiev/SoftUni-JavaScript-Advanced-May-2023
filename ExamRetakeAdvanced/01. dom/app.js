window.addEventListener('load', solve);

function solve() {

    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let contactNumber = document.getElementById("contact-number");
    let preferredClass = document.getElementById("class-type");
    let classTime = document.getElementById("class-time");

    let nextBtn = document.getElementById("next-btn")
    nextBtn.addEventListener("click", publishHandler);

    let previewInfo = document.querySelector(".class-info");
    let confirmClass = document.querySelector(".confirm-class");

    function publishHandler(e) {

        let name = nameInput.value;
        let email = emailInput.value;
        let cNumber = contactNumber.value;
        let pClass = preferredClass.value;
        let cTime = classTime.value;

        if (
            name === "" ||
            email === "" ||
            cNumber === "" ||
            pClass === "" ||
            cTime === "") { return; }

        let post = createPost(name, email, cNumber, pClass, cTime);
        previewInfo.appendChild(post);

        nameInput.value = '';
        emailInput.value = '';
        contactNumber.value = '';
        preferredClass.value = '';
        classTime.value = '';

        nextBtn.disabled = true
    }


    function createPost(name, email, cNumber, pClass, cTime) {
        // e.preventDefault();

        let liElement = document.createElement("li");
        liElement.classList.add('info-item');

        let article = document.createElement('article');

        let paragraph1 = document.createElement("p");
        paragraph1.textContent = `${name}`;

        let paragraph2 = document.createElement("p");
        paragraph2.textContent = `${email}`;

        let paragraph3 = document.createElement("p");
        paragraph3.textContent = `${cNumber}`;

        let paragraph4 = document.createElement("p");
        paragraph4.textContent = `${pClass}`;

        let paragraph5 = document.createElement("p");
        paragraph5.textContent = `${cTime}`;

        article.appendChild(paragraph1);
        article.appendChild(paragraph2);
        article.appendChild(paragraph3);
        article.appendChild(paragraph4);
        article.appendChild(paragraph5);


        let editBtn = document.createElement('button');
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");
        editBtn.addEventListener("click", editHandler);

        let continueBtn = document.createElement('button');
        continueBtn.textContent = "Continue";
        continueBtn.classList.add("continue-btn");
        continueBtn.addEventListener("click", continueHandler);

        liElement.appendChild(article);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        return liElement;

    }

    function editHandler(e) {
        // 1 Remove html representation of the post (li element) from review list
        let liElement = e.target.parentElement;
        liElement.remove();

        let paragraph = liElement.querySelectorAll("p")

        nameInput.value = paragraph[0].textContent;
        emailInput.value = paragraph[1].textContent;
        contactNumber.value = paragraph[2].textContent;
        preferredClass.value = paragraph[3].textContent;
        classTime.value = paragraph[4].textContent;

        nextBtn.disabled = false;
    }

    function continueHandler(e) {

        let liElement = e.target.parentElement;
        liElement.remove();

        let editRemove = liElement.querySelector(".edit-btn")
        let continueRemove = liElement.querySelector(".continue-btn")
        editRemove.remove()
        continueRemove.remove()

        let cancelBtn = document.createElement('button');
        cancelBtn.textContent = "Cancel";
        cancelBtn.classList.add("cancel-btn");
        cancelBtn.addEventListener("click", cancelHandler);

        let confirmBtn = document.createElement('button');
        confirmBtn.textContent = "Confirm";
        confirmBtn.classList.add("confirm-btn");
        confirmBtn.addEventListener("click", confirmHandler);

        liElement.appendChild(cancelBtn);
        liElement.appendChild(confirmBtn);

        confirmClass.appendChild(liElement);

    }

    function cancelHandler(e) {
        let liElement = e.target.parentElement;
        liElement.remove();

        nextBtn.disabled = false;

    }

    function confirmHandler() {

        document.getElementById("main").remove();

        let body = document.getElementById("body");

        let h1 = document.createElement('h1');
        h1.setAttribute("id", "thank-you");
        h1.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!"


        let doneBtn = document.createElement('button');
        doneBtn.textContent = "Done";
        doneBtn.setAttribute("id", "done-btn");;
        doneBtn.addEventListener("click", doneHandler);

        body.appendChild(h1)
        body.appendChild(doneBtn)

        function doneHandler() {
            location.reload()
          }

    }


}




