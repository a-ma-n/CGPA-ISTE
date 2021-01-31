var markInputs=document.getElementById("texts");
var finalMark=document.getElementById("Final mark");
var totalSubs=document.getElementById("Num subjects");
var no=0;
var total=0;


function createField(){
  for(var i=0;i<no;i++){
    var input=document.getElementById(i);
    markInputs.removeChild(input);
  }
  no=0;
  for(var i=0;i<totalSubs.value;i++){
    var input = document.createElement("input");
    input.type = "number";
    input.name="mark";
    input.id=no;
    markInputs.appendChild(input);
    no+=1;
  }


}
function calculate(){

  var final=document.getElementById('output')
  finalMark.removeChild(final);
  
  
  
  for(var i=0;i<no;i++)
  {
    var texts=document.getElementById(i);
    total+=parseFloat(texts.value);
    
  }
  var gpa;
  switch(parseInt((parseInt(total/no)/10))*10)
  {
    case 100:
    case 90:
      gpa='S';
      break;
    case 80:
      gpa='A';
      break;
    case 70:
      gpa='B';
      break;
    case 60:
      gpa='C';
      break;
    case 50:
      gpa='D';
      break;
    case 40:
      gpa='E';
      break;
    case 30:
      gpa='F';
      break;
    default:
      gpa='N';
      break;
  }
  var final=document.createElement("P");
  final.innerText=gpa;
  final.id='output';
  finalMark.appendChild(final);
  total=0;
}
