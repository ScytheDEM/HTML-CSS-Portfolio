// found this on a website, looks it's in the right direction// //https://github.com/loopj/jquery-tokeninput// yeah its for the 
document.addEventListener("keydown", input => { 
   if('Enter' === input.key){ 
         const log = document.getElementById("main-bar").value; 
      switch (log) {
         case '+':            //Allow words not just strictly equal to the case eg strictly '+'
            console.log("+");         
            break;
         case '-':
            console.log("-");
            break;
         case '*': 
         console.log("*");
            break;
         case '/':
            console.log("/");
            break;
         default:
            console.log("no log")
      }
   } 
});






//use switch statement  
 
//https://github.com/adelonzeta/calculator-scripts#readme