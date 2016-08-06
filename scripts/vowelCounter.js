function pieChart(amount,total){

     var percentage = amount/total;
     console.log("percentage = " + percentage);
     console.log("vowels = " + amount);
     console.log("total letters = " + total)

     // draw chart on canvas
     var canvas = document.getElementById("ratios");
     var ctx = canvas.getContext("2d");
     var lastend = 0;
     var data = [percentage,(1 - percentage)];
     var myTotal = 0;
     var myColor = ['magenta','grey'];

     for(var e = 0; e < data.length; e++) {
       myTotal += data[e];
     }

     for (var i = 0; i < data.length; i++) {
          ctx.fillStyle = myColor[i];
          ctx.beginPath();
          ctx.moveTo(canvas.width/2,canvas.height/2);
          ctx.arc(canvas.width/2,canvas.height/2,canvas.height/2,lastend,lastend+(Math.PI*2*(data[i]/myTotal)),false);
          ctx.lineTo(canvas.width/2,canvas.height/2);
          ctx.fill();
          lastend += Math.PI*2*(data[i]/myTotal);
     }


}

function prevDef(e){ 
     e.preventDefault()
}

function vowelCounter(string){
     var input = document.getElementById('vowelInput');
     var string = input.value.toLowerCase();
     input.addEventListener( 'onchange', prevDef, false );



     var Vowels = {
          A : 0,
          E : 0,
          I : 0,
          O : 0,
          U : 0,
          total : 0
     };
               
     for(i = 0; i < string.length; i++){
          var ltr = string.charAt(i);
          
          if(ltr === 'a'){
               Vowels.total += 1;
               Vowels.A += 1;
          }else if(ltr === 'e'){
               Vowels.total += 1;
               Vowels.E += 1;
          }else if(ltr === 'i'){
               Vowels.total += 1;
               Vowels.I += 1;
          }else if(ltr === 'o'){
               Vowels.total += 1;
               Vowels.O += 1;
          }else if(ltr === 'u'){
               Vowels.total += 1;
               Vowels.U += 1;
          };
     }

     // table data output
     document.getElementById('vowelsA').innerHTML = Vowels.A;
     document.getElementById('vowelsE').innerHTML = Vowels.E;
     document.getElementById('vowelsI').innerHTML = Vowels.I;
     document.getElementById('vowelsO').innerHTML = Vowels.O;
     document.getElementById('vowelsU').innerHTML = Vowels.U;
     document.getElementById('totalVowels').innerHTML = Vowels.total;

     // build chart for vowel/consant percentage display
     pieChart(Vowels.total,string.length);

     // write out percentage under chart
     document.getElementById('percentOutput').innerHTML = "<svg width='16' height='16'><rect width='16' height='16' style='fill:magenta;' /></svg>" + " = " + ((Vowels.total/string.length) * 100).toFixed(2) + "% vowels</span>"; 
}
