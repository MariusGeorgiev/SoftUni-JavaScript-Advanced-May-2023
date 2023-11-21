window.addEventListener("load", solve);

function solve() {
  let fName = document.getElementById("first-name");
   let lName = document.getElementById("last-name");
   let age = document.getElementById("age");
   let storyTitle = document.getElementById("story-title");
   let genre = document.getElementById("genre");
   let story = document.getElementById("story");

   let publishBtn = document.getElementById("form-btn")
   publishBtn.addEventListener("click", publishHandler);

   let previewList = document.getElementById("preview-list");

function publishHandler(e) {

        let firstName = fName.value;
        let lastName = lName.value;
        let ageAuthor = age.value;
        let storyT = storyTitle.value;
        let genreType = genre.value;
        let yourStory = story.value;

        if(
            firstName === "" ||
            lastName === "" ||
            ageAuthor === ""||
            storyT === "" ||
            yourStory === "" ) { return ; }

            let post = createPost(firstName, lastName, ageAuthor, storyT, genreType, yourStory);
            previewList.appendChild(post);

            fName.value = '';
            lName.value = '';
            age.value = '';
            storyTitle.value = '';
            //genre.value = '';
            story.value = '';

            publishBtn.disabled = true

   }

   function createPost(firstName, lastName, ageAuthor, storyT, genreType, yourStory) {
    // e.preventDefault();

            let liElement = document.createElement("li");
            liElement.classList.add('story-info');

            let article = document.createElement('article');

            let h4 = document.createElement('h4');
            h4.textContent = `Name: ${firstName} ${lastName}`;

            let paragraph1 = document.createElement("p");
            paragraph1.textContent = `Age: ${ageAuthor}`;

            let paragraph2 = document.createElement("p");
            paragraph2.textContent = `Title: ${storyT}`;

            let paragraph3 = document.createElement("p");
            paragraph3.textContent = `Genre: ${genreType}`;

            let paragraph4 = document.createElement("p");
            paragraph4.textContent = `${yourStory}`;

            article.appendChild(h4);
            article.appendChild(paragraph1);
            article.appendChild(paragraph2);
            article.appendChild(paragraph3);
            article.appendChild(paragraph4);

            
            let saveBtn = document.createElement('button');
            saveBtn.textContent = "Save Story";
            saveBtn.classList.add("save-btn");
            saveBtn.addEventListener("click", saveHandler);

            let editBtn = document.createElement('button');
            editBtn.textContent = "Edit Story";
            editBtn.classList.add("edit-btn");
            editBtn.addEventListener("click", editHandler);

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete Story";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.addEventListener("click", deleteHandler);

            liElement.appendChild(article);
            liElement.appendChild(saveBtn);
            liElement.appendChild(editBtn);
            liElement.appendChild(deleteBtn);

            return liElement;

  }


  function editHandler(e) {

    // 1 Remove html representation of the post (li element) from review list
    let liElement = e.target.parentElement;
    liElement.remove();

    // 2 add current post title, category and content to input fields in pool
    let nameH4 = liElement.querySelector("h4");
    let name = nameH4.textContent.split(" ");
    

    let paragraphs = liElement.querySelectorAll("p");
    let ageValue = paragraphs[0].textContent.split(": ");
    
    let titleValue = paragraphs[1].textContent.split(": ");
    
    let genereValue = paragraphs[2].textContent.split(": ");
    
    let storyValue = paragraphs[3].textContent;
    

        fName.value = name[1];
        lName.value = name[2];
        age.value = ageValue[1];
        storyTitle.value = titleValue[1];
        genre.value = genereValue[1];
        story.value = storyValue;

        publishBtn.disabled = false
        saveBtn.disabled = true
        editBtn.disabled = true
        deleteBtn.disabled = true

  }

  function saveHandler() {
    let main = document.getElementById("main");
    main.innerHTML = '';

    let h1 = document.createElement('h1');
    h1.textContent = "Your scary story is saved!";
    main.appendChild(h1)

  }

  function deleteHandler(e) {
    let liElement = e.target.parentElement;
    liElement.remove();

    publishBtn.disabled = false;

  }


}
