//variabels
const budget = localStorage.getItem("budget");
const budgetInput = document.querySelector("#getBudget-input");
const storage = new LocalStorage();
const form = document.querySelector("#budgeting-form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const message = document.querySelector("#messages");
const formClass = new Form();
const htmlUI = new HtmlUI();


// eventListener
eventListener();
function eventListener(params) {
    document.addEventListener("DOMContentLoaded", loadContent);
    document.querySelector("#getBudget-btn").addEventListener("click", saveToLs);
    form.addEventListener("submit", submitForm)
}



// function
function loadContent() {
    if(budget === null) {
        $("#getBudgetModal").modal("show");
        setTimeout(() => {
            if(budgetInput.value === "") {
                location.reload();
            }
        }, 5500);
    }
    console.log(document.querySelector("#getBudgetModal").classList);

    htmlUI.showList();
    document.querySelector(".alert-primary").innerHTML = `
        بودجه ماهیانه : 
        <span class="alert-link budget-show">${storage.getBudget()}</span>
        تومان
    `;
    document.querySelector(".alert-secondary").innerHTML = `
    باقی مانده بودجه :
    <span class="alert-link remainig-show">${storage.getRemaining()}</span>
    تومان
`;
}

function saveToLs() {
    if(budgetInput.value == "" || budgetInput.value === "0") {
        budgetInput.classList.add("is-invalid");
    }else {
        storage.addBudget(budgetInput.value );
        budgetInput.classList.remove("is-invalid");
        $("#getBudgetModal").modal("hide");
        location.reload();
    }
}

function submitForm(e) {
    e.preventDefault();
    formClass.validation(title, price);
    formClass.checkPrice(price);
    if(document.querySelector(".is-invalid") == null && document.querySelector(".error") == null) {
        storage.addItem({"title": title.value, "price": price.value});
        htmlUI.checkAlert();
        htmlUI.addToList(title.value, price.value);
        document.querySelector(".budget-show").textContent = storage.getBudget();
        document.querySelector(".remainig-show").textContent = storage.getRemaining();
    }
}


