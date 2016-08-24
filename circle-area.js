function calcCircleArea(){
        var radius = document.form1.txtRadius.value;
       var val = radius * radius * Math.PI;
   document.getElementById('demo').innerHTML = ("<P>Area is " + (val) + "</p>");
    }