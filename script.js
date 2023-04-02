let submitbutton = document.getElementById("submitbutton");
let errors = {};

submitbutton.addEventListener("click", function(e){
  e.preventDefault();
  errors = {};
 let signupform = document.forms["signupform"];
 //console.log(signupform);
    let firstnameinput= signupform.firstname ;
   // console.log(firstnameinput.value);
   let lastnameinput= signupform.lastname ;
   let emailinput= signupform.email ;
   let passwordinput= signupform.password ;
   

   if(firstnameinput.value == "")
   {
    errors.firstname= "FirstName should not be empty";

    // let firstnamegroup= document.getElementById("firstnamegroup");
    // let firstnamemessage= document.querySelector("#firstnamegroup .message");
    // firstnamegroup.classList.add("error");
    // firstnamemessage.textContent= "FirstName should not be empty";
   }

   if(lastnameinput.value == "")
   {
    errors.lastname= "LastName should not be empty";
   }

   if(emailinput.value == "")
   {
    errors.email= "Email should not be empty";
   }

   if(passwordinput.value.length <= 5)
   {
    errors.password= "Password should be of at least 5 characters";
   }

   console.log(errors);
     for (let error in errors){
        let lastnamegroup= document.getElementById(`${error}group`);
        let lastnamemessage= document.querySelector(`#${error}group .message`);
        lastnamegroup.classList.add("error");
        lastnamemessage.textContent= errors[error];

     }
     if(Object.keys(errors).length == 0){
     signupform.submit();
     }
   
});
