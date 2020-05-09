class Form {
    
    // check not empty inputs
    validation(title, price) {
        let result = true;
        if(title.value == ""){
            result = false;
            title.classList.add("is-invalid");
        }else {
            title.classList.remove("is-invalid");
        }

        if(price.value == ""){
            result = false;
            price.classList.add("is-invalid");
        }else {
            price.classList.remove("is-invalid");
        }
        return result;
    }

    //check range of price
    checkPrice(price) {
        const remaining = parseInt(localStorage.getItem("remaining"));
        const value = parseInt(price.value);
        let error = "";
        
        if(document.querySelector(".error") !== null ) {
            document.querySelector(".error").remove();
            price.classList.remove("is-invalid");
        }
        
        if(value < 0) {
            error = "مبلغ وارد شده غیر مجاز است!";
        }else if(remaining < value) {
            error = "مبلغ وارد شده بیش از باقی مانده بودجه میباشد!";
        }

        if(error !== "") {
            let div = document.createElement("div");
            div.classList = "alert alert-danger error";
            div.textContent = error;
            message.appendChild(div);
            price.classList.add("is-invalid");
        }

    }
}
