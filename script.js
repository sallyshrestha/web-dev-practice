let submitbutton = document.getElementById("submitbutton");
let errors ={};

submitbutton.addEventListener("click", function(e){
  e.preventDefault();
 let signupform = document.forms["signupform"];
 //console.log(signupform);
    let firstnameinput= signupform.firstname ;
   // console.log(firstnameinput.value);
   let lastnameinput= signupform.lastname ;

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
   console.log(errors);
     for (let error in errors){

     }
   
});
// let lastnamegroup= document.getElementById("lastnamegroup");
// let lastnamemessage= document.querySelector("#lastnamegroup .message");
// lastnamegroup.classList.add("error");
// lastnamemessage.textContent= "LastName should not be empty";