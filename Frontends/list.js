var limit = 30;
counter = 1;
var inputlist = [];
var res = [];
function addInput(divName){
    
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "<label for='item' >Item</label> " + (counter + 1) + ": <input type='text' class='form-control' id='item' name='myInputs[]'>";
         document.getElementById(divName).appendChild(newdiv);
         //addInput.push(divName.lowercase); 
         counter += 1;
     }
}
var myFunction = function() {
    var x = document.getElementById("y");
    var i;
    for (i = 0; i < x.length ;i++) {
        inputlist.append(x.elements[i].value);
        console.log("huhuhu");
    }};

    
var foodRef = new Firebase("https://quiklist.firebaseio.com/Foods");
    
var getSections = function(vfoodRef,userinput){
    sections = [];
    console.log(myInputs.length);
    
    
    return sections;
};
$( "#btn btn-default hu" ).click(function() {
  
    console.log("hu2");
    res = myFunction;
});


console.log('hi');
console.log(res.length);