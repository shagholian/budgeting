class HtmlUI {

    // add li to list
    addToList(title, price) {
        const list = document.querySelector(".list-group");
        
        let li = document.createElement("li");
        li.classList = "list-group-item d-flex justify-content-between align-items-center";
        
        let spanTitle = document.createElement("span");
        spanTitle.textContent = title;
        li.appendChild(spanTitle);
        
        let spanPrice = document.createElement("span");
        spanPrice.classList = "badge badge-primary badge-pill";
        spanPrice.textContent = price;
        li.appendChild(spanPrice);
        
        list.appendChild(li);
    }

    // show all of the items in list
    showList() {
        const storage = new LocalStorage();
        const items = storage.getItems(); 
        items.forEach(element => {
            this.addToList(element.title, element.price)
        });
    }

    // check if remaining less show the alert
    checkAlert() {
        const storage = new LocalStorage();
        const budget = storage.getBudget();
        const remaining = storage.getRemaining();
        let result = (remaining/budget)*100;
        
        switch (true) {
            case result > 30 && result <= 50 : 
                $('.toast').toast('show');
                document.querySelector(".toast").classList.add("bg-warning");
                document.querySelector(".toast-header strong").classList.add("text-warning");
                document.querySelector(".toast-body").textContent = "کمتر از 50٪ از بودجه ی شما باقی مانده است!"
                break;
            case result <= 30 :
                $('.toast').toast('show');
                document.querySelector(".toast").classList.add("bg-danger");
                document.querySelector(".toast-header strong").classList.add("text-danger");
                document.querySelector(".toast-body").textContent = "کمتر از 30٪ از بودجه ی شما باقی مانده است!"
                break;
        }

        setTimeout(() => {
            $('.toast').toast('hide');
        }, 3000);
    }
}