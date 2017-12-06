function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["numberFun"].elements.length; 
        loopCounter++) {
        if (document.forms["numberFun"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["numberFun"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}

    function resetForm() {
        clearErrors();
        document.forms["numberFun"]["startnum"].value = "";
        document.forms["numberFun"]["endnum"].value = "";
        document.forms["numberFun"]["step"].value = "";
        document.forms["numberFun"]["startnum"].focus();
        document.getElementById("results").style.display = "none";
    }

function validateItems() {
    
    var startnum = document.forms["numberFun"]["startnum"].value;
    var endnum = document.forms["numberFun"]["endnum"].value;
    var step = document.forms["numberFun"]["step"].value;

    if (startnum == "" || isNaN(startnum)) {
        alert("Starting number must be filled in with a number.");
        document.forms["numberFun"]["startnum"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["startnum"].focus();
        return false;
    }
   if (endnum == "" || isNaN(endnum)) {
       alert("Ending number must be filled in with a number.");
       document.forms["numberFun"]["endnum"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["endnum"].focus();
       return false;
   }
   if (step == "" || isNaN(step)) {
    alert("Step number must be filled in with a number.");
    document.forms["numberFun"]["step"]
       .parentElement.className = "form-group has-error"
    document.forms["numberFun"]["step"].focus();
    return false;
}
if (step <1) {
    alert("Step must be a postive number");
    document.forms["numberFun"]["step"]
       .parentElement.className = "form-group has-error"
    document.forms["numberFun"]["step"].focus();
    return false;
}
if (Number(startnum) >= Number(endnum)) {
    alert("Ending number must be greater than starting number");
    document.forms["numberFun"]["endnum"]
       .parentElement.className = "form-group has-error"
    document.forms["numberFun"]["endnum"].focus();
    return false;
}

function findevens(startnum,endnum,step){
    var evens = new Array();
   
    
    for (i=Number(startnum); i<=Number(endnum);i= i+Number(step) ){
         if (i%2 ==0)  {
             evens.push([i]);
         }

    }
    return evens.join("\r\n");
}

   document.getElementById("startnum1").innerText = Number(startnum);
   document.getElementById("endnum1").innerText = Number(endnum);
   document.getElementById("step1").innerText = Number(step);
   document.getElementById("evennums").innerText = findevens(startnum,endnum,step);
   document.getElementById("results").style.display = "block";
  
   return false;
}