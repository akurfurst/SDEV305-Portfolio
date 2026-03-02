document.getElementById("contact-form").onsubmit = validate;


function validate(){
    let isValid = true;
    clearErrors();

    let fname = document.getElementById("fname").value.trim();
    if(!fname){
        document.getElementById("err-fname").style.display = "block";
        isValid = false;
    }

    let lname = document.getElementById("lname").value.trim();
    if(!lname){
        document.getElementById("err-lname").style.display = "block";
        isValid = false;
    }
    /** 
    let job = document.getElementById("job").value.trim();
    if(!job){
        document.getElementById("err-job").style.display = "block";
        isValid = false;
    }
    
    let company = document.getElementById("company").value.trim();
    if(!company){
        document.getElementById("err-company").style.display = "block";
        isValid = false;
    }
    */
    let linkedin = document.getElementById("linkedin").value.trim();
    if(linkedin && !linkedin.startsWith("https://linkedin.com/in/") && !linkedin.startsWith("https://www.linkedin.com/in/")){
        document.getElementById("err-linkedin").style.display = "block";
        isValid = false;
    }
    
    let email = document.getElementById("email").value.trim();
    let list = document.getElementById("email-list").checked;
    if(!email && list){
        document.getElementById("err-email").style.display = "block";
        isValid = false;
    }
    
    let meet = document.getElementById("meet").value;
    if(meet == "none"){
        document.getElementById("err-meet").style.display = "block";
        isValid = false;
    }

    let other = document.getElementById("other").value.trim();
    if(meet == "other" && !other){
        document.getElementById("err-other").style.display = "block";
        isValid = false;
    }
    /*
    let html = document.getElementById("html").value;
    let text = document.getElementById("text").value;
    if(!html.checked && !text.checked){
        document.getElementById("err-type").style.display = "block";
        isValid = false;
    }
    */

    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none"
    }

}

function emailList(){
    let list = document.getElementById("email-list").checked;
    if(list){
        document.getElementById("send-type-section").style.visibility = "visible";
    } else {
        document.getElementById("send-type-section").style.visibility = "hidden";
    }
}
