var Deli = ["antipasti","ready-cooked meals","sushi","platters","cured meat","olives","salami"];

var Dairy = ["butter","cheese","milk","cream",
    "milk","sour cream","whipped cream","yogurt",'eggs'];
    
    var Seafood= ["fish","salmon","cod","bass","tuna","sole","mackerel","tilapia","trout","scallops","mussels","oysters","crab","lobster","octopus","shrimp"];
    
    var Meat = ['chicken','beef','pork','lunchmeats','bologna','bacon','sausages','turkey','ham'];
    
    var Produce= 
['apples','oranges','peaches','watermelon','prunes','celery','cucumber','tomatoes','carrots','radishes','tangerines','clementines','apricots','avocado','blueberries','strawberries','raspberries','blackberries','cherries','figs','star fruit','banana','squash','grapefruit','nectarines','dragonfruit','coconuts','pears','lime','lemon','kiwi','grapes','pomelo','raisin'];

var Frozen= ['frozen vegetables','frozen meals','frozen drinks','pizza','frozen rolls'];

var Bulk= ['candy','snacks','bars','flour','rice','pasta','trail mix','nuts','seeds','dried fruits'];

var Bakery =  ['bread','baguettes','bagels','buns','rolls','cakes','cupcakes','tarts','doughnuts','sourdough']

var Snacks = ['chips','cookies','pop','soda','soft drinks','chocolate','cereal']

var limit = 30;
var counter = 1;
var inputlist = [];
var res = [];
var foodArray = []; 

function addInput(divName) {
    
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

var readingFoodData = function(){
        var fin = [];
        for(var i =0;i<Deli.length;i++){
            fin.push(Deli[i]);
        }
        for(var i =0;i<Dairy.length;i++){
            fin.push(Dairy[i]);
        }
        for(var i =0;i<Meat.length;i++){
            fin.push(Meat[i]);
        }
        for(var i =0;i<Bakery.length;i++){
            fin.push(Bakery[i]);
        }
        for(var i =0;i<Produce.length;i++){
            fin.push(Produce[i]);
        }
        for(var i =0;i<Frozen.length;i++){
            fin.push(Frozen[i]);
        }
        for(var i =0;i<Snacks.length;i++){
            fin.push(Snacks[i]);
        }
        for(var i =0;i<Seafood.length;i++){
            fin.push(Seafood[i]);
        }
        return fin;
        };

var huhu = readingFoodData();

for(var t = 0; t<huhu.length;t++){
    console.log(huhu[t]);
}