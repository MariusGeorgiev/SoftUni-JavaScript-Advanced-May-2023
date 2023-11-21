function deleteByEmail(e) {
    let deleteLink = document.createElement("a");
    deleteLink.textContent = "delete";


    let link  = e.target;
    let li = link.parentElement;
    li.remove();

   }
