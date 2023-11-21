window.addEventListener('load', solve);

function solve() {
   //console.log("Hello M");

   let fName = document.getElementById("first-name");
   let lName = document.getElementById("last-name");
   let pCount = document.getElementById("people-count");
   let formDate = document.getElementById("from-date");
   let daysCount = document.getElementById("days-count");

   let selectNextBtn = document.getElementById("next-btn")
   selectNextBtn.addEventListener("click", publishHandler);


   let ticketInfoList = document.querySelector(".ticket-info-list");
   let confirmTicket = document.querySelector(".confirm-ticket");


   function publishHandler(e) {

        let firstName = fName.value;
        let lastName = lName.value;
        let numPeople = pCount.value;
        let date = formDate.value;
        let days = daysCount.value;

        if(
            firstName === "" ||
            lastName === "" ||
            numPeople === ""||
            date === "" ||
            days === "" ) { return ; }

            let post = createPost(firstName, lastName, numPeople, date, days);
            ticketInfoList.appendChild(post);

            fName.value = '';
            lName.value = '';
            pCount.value = '';
            formDate.value = '';
            daysCount.value = '';

            selectNextBtn.disabled = true

   }


      function createPost(firstName, lastName, numPeople, date, days) {
        // e.preventDefault();

                let liElement = document.createElement("li");
                liElement.classList.add('ticket');

                let article = document.createElement('article');

                let h3 = document.createElement('h3');
                h3.textContent = `Name: ${firstName} ${lastName}`;

                let paragraph1 = document.createElement("p");
                paragraph1.textContent = `From date: ${date}`;

                let paragraph2 = document.createElement("p");
                paragraph2.textContent = `For ${days} days`;

                let paragraph3 = document.createElement("p");
                paragraph3.textContent = `For ${numPeople} people`;

                article.appendChild(h3);
                article.appendChild(paragraph1);
                article.appendChild(paragraph2);
                article.appendChild(paragraph3);

                

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

        // 2 add current post title, category and content to input fields in pool
        let nameH3 = liElement.querySelector("h3");
        let name = nameH3.textContent.split(" ");
        //name.split(" ")
    
        let paragraphs = liElement.querySelectorAll("p");
        let dateValue = paragraphs[0].textContent.split(": ");
        //dateValue.split(": ")

        let daysValue = paragraphs[1].textContent.split(" ");
        //daysValue.split(" ")

        let peopleValue = paragraphs[2].textContent.split(" ");
        //peopleValue.split(" ")
    
            fName.value = name[1];
            lName.value = name[2];
            pCount.value = peopleValue[1];
            formDate.value = dateValue[1];
            daysCount.value = daysValue[1];

            selectNextBtn.disabled = false;
    
      }



      // 4. Implement Approve logic
  function continueHandler(e) {

    let liElement = e.target.parentElement;
        liElement.remove();

    let editRemove = liElement.querySelector(".edit-btn")
    let continueRemove = liElement.querySelector(".continue-btn")
    editRemove.remove()
    continueRemove.remove()


                let confirmBtn = document.createElement('button');
                confirmBtn.textContent = "Confirm";
                confirmBtn.classList.add("confirm-btn");
                confirmBtn.addEventListener("click", confirmHandler);

                let cancelBtn = document.createElement('button');
                cancelBtn.textContent = "Cancel";
                cancelBtn.classList.add("cancel-btn");
                cancelBtn.addEventListener("click", cancelHandler);

                liElement.appendChild(confirmBtn);
                liElement.appendChild(cancelBtn);

                confirmTicket.appendChild(liElement);

  }

 function confirmHandler() {
  document.getElementById("main").remove();
  let body = document.getElementById("body");

  let h1 = document.createElement('h1');
  h1.setAttribute("id", "thank-you");
  h1.textContent = "Thank you, have a nice day!"

  let backBtn = document.createElement('button');
  backBtn.textContent = "Back";
  backBtn.setAttribute("id", "back-btn");;
  backBtn.addEventListener("click", backHandler);

  body.appendChild(h1);
  body.appendChild(backBtn);

  function backHandler() {
    location.reload()
  }

 }

 function cancelHandler(e) {
  let liElement = e.target.parentElement;
  liElement.remove();

  selectNextBtn.disabled = false;

 }


}


    
    
