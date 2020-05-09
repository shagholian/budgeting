class LocalStorage {
    
    // start app to add budget to local storage
    addBudget(value) {
        localStorage.setItem("budget", value);
        localStorage.setItem("remaining", value);
    }

    // add item of budget of LS 
    addItem(value) {
        let items = this.getItems();
        items.push(value);
        localStorage.setItem("items", JSON.stringify(items));

        // change remaining 
        let remaining = parseInt(localStorage.getItem("remaining"));
        remaining -= parseInt(value.price);
        localStorage.setItem("remaining", remaining);
    }

    // get items key form local storage
    getItems() {
        let items = localStorage.getItem("items");
        if(items !== null) {
            items = JSON.parse(items);
        } else {
            items = [];
        }
        return items;
    }

    // get budget key form local storage
    getBudget() {
        let budget = localStorage.getItem("budget");
        if(budget !== null) {
            budget = parseInt(budget);
        } else {
            budget = "تعریف نشده";
        }
        return budget;
    }

    // get remaining key form local storage
    getRemaining() {
        let remaining = localStorage.getItem("remaining");
        if(remaining !== null) {
            remaining = parseInt(remaining);
        } else {
            remaining = "تعریف نشده";
        }
        return remaining;
    }
}