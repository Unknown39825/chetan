var p =document.getElementById('num1');
var q = document.getElementById('num2');
var r=document.getElementById('output');
p.value=3;
q.value=10;
var form = document.getElementById('myform');
form.addEventListener('submit',function(event)
{
   var x= parseFloat(p.value);
   var y = parseFloat(q.value);
    var z = (x*y)/100;
   
    r.innerText = "anwer=" + z + "%";
    event.preventDefault();
});
