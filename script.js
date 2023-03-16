






let x=false;
let x1,x2,x3,x4,x5,x6,x7,x8,x9;
x1=false;x2=false;x3=false;x4=false;x5=false;x6=false;x7=false;x8=false;x9=false;
let w1,w2,w3,w4,w5,w6,w7,w8,w9;
w1=false;w2=false;w3=false;w4=false;w5=false;w6=false;w7=false;w8=false;w9=false;
let o1,o2,o3,o4,o5,o6,o7,o8,o9;
o1=false;o2=false;o3=false;o4=false;o5=false;o6=false;o7=false;o8=false;o9=false;




function initial(){
document.getElementById("b1").innerHTML =" ";
document.getElementById("b2").innerHTML =" ";
document.getElementById("b3").innerHTML =" ";
document.getElementById("b4").innerHTML =" ";
document.getElementById("b5").innerHTML =" ";
document.getElementById("b6").innerHTML =" ";
document.getElementById("b7").innerHTML =" ";
document.getElementById("b8").innerHTML =" ";
document.getElementById("b9").innerHTML =" ";

x1=false;x2=false;x3=false;x4=false;x5=false;x6=false;x7=false;x8=false;x9=false;
w1=false;w2=false;w3=false;w4=false;w5=false;w6=false;w7=false;w8=false;w9=false;
o1=false;o2=false;o3=false;o4=false;o5=false;o6=false;o7=false;o8=false;o9=false;


}







function myFunction1() 
  {  
if(x1==false)
  	    {
  	     if(x==false)
              {document.getElementById("b1").innerHTML ="X";x=true;w1=true;}
         else
               {document.getElementById("b1").innerHTML ="O" ;x=false;o1=true;}
           x1=true;
           verificare();
           }

else
{alert('E apasat deja');}
   
}

function myFunction2() 
  {

  	if(x2==false){
          if(x==false)
    {document.getElementById("b2").innerHTML ="X"; x=true;w2=true;}
else
   {document.getElementById("b2").innerHTML ="O" ; x=false;o2=true;}
x2=true;verificare();
}
   else
{alert('E apasat deja');}
}


function myFunction3() 
  {  
if(x3==false)
  	    {
  	     if(x==false)
              {document.getElementById("b3").innerHTML ="X";x=true;w3=true;}
         else
               {document.getElementById("b3").innerHTML ="O" ;x=false;o3=true;}
           x3=true;verificare();
           }

else
{alert('E apasat deja');}
   
}

function myFunction4() 
  {  
if(x4==false)
  	    {
  	     if(x==false)
              {document.getElementById("b4").innerHTML ="X";x=true;w4=true;}
         else
               {document.getElementById("b4").innerHTML ="O" ;x=false;o4=true;}
           x4=true;verificare();
           }

else
{alert('E apasat deja');}
   
}
function myFunction5() 
  {  
if(x5==false)
  	    {
  	     if(x==false)
              {document.getElementById("b5").innerHTML ="X";x=true;w5=true;}
         else
               {document.getElementById("b5").innerHTML ="O" ;x=false;o5=true;}
           x5=true;verificare();
           }

else
{alert('E apasat deja');}
   
}
function myFunction6() 
      {  
if(x6==false)
  	    {
  	     if(x==false)
              {document.getElementById("b6").innerHTML ="X";x=true;w6=true;}
         else
               {document.getElementById("b6").innerHTML ="O" ;x=false;o6=true;}
           x6=true;verificare();
           }

else
{alert('E apasat deja');}
   
}
function myFunction7() 
  {  
if(x7==false)
  	    {
  	     if(x==false)
              {document.getElementById("b7").innerHTML ="X";x=true;w7=true;}
         else
               {document.getElementById("b7").innerHTML ="O" ;x=false;o7=true;}
           x7=true;verificare();
           }

else
{alert('E apasat deja');}
   
}
function myFunction8() 
  {  
if(x8==false)
  	    {
  	     if(x==false)
              {document.getElementById("b8").innerHTML ="X";x=true;w8=true;}
         else
               {document.getElementById("b8").innerHTML ="O" ;x=false;o8=true;}
           x8=true;verificare();
           }

else
{alert('E apasat deja');}
   
}
function myFunction9() 
  {  
if(x9==false)
  	    {
  	     if(x==false)
              {document.getElementById("b9").innerHTML ="X";x=true;w9=true;}
         else
               {document.getElementById("b9").innerHTML ="O" ;x=false;o8=true;}
           x9=true;verificare();
           }

else
{alert('E apasat deja');}
   
}


let nrx=0;
function scorX(){
nrx++;
let textx = nrx.toString();
document.getElementById("score_player1").innerHTML = textx;
}

let nro=0;
function scorO(){
nro++;
let texto = nro.toString();
document.getElementById("score_player2").innerHTML = texto;
}




function verificare(){
      
     if(w1==w2 && w2==w3 && w3==w1 && w1==true && w2==true && w3==true )
     	{alert('X castiga');scorX();}
     if(w4==w5 && w5==w6 && w6==w4 && w4==true && w5==true && w6==true )
 	{alert('X castiga');scorX();}
     if(w7==w8 && w8==w9 && w9==w7 && w7==true && w8==true && w9==true )
 	{alert('X castiga');scorX();}
     if(w1==w4 && w4==w7 && w7==w1 && w1==true && w4==true && w7==true )
 	{alert('X castiga');scorX();}
     if(w2==w5 && w5==w8 && w8==w2 && w2==true && w5==true && w8==true )
 	{alert('X castiga');scorX();}
     if(w3==w6 && w6==w9 && w9==w3 && w3==true && w6==true && w9==true )
 	{alert('X castiga');scorX();}
      if(w1==w5 && w5==w9 && w9==w1 && w1==true && w5==true && w9==true )
 	{alert('X castiga');scorX();}
    if(w3==w5 && w5==w7 && w7==w3 && w3==true && w5==true && w7==true )
 	  {alert('X castiga');scorX();}



     	if(o1==o2 && o2==o3 && o3==o1 && o1==true && o2==true && o3==true )
     	{alert('O castiga');scorO();}
     if(o4==o5 && o5==o6 && o6==o4 && o4==true && o5==true && o6==true )
     	{alert('O castiga');scorO();}
     if(o7==o8 && o8==o9 && o9==o7 && o7==true && o8==true && o9==true )
     	{alert('O castiga');scorO();}
     if(o1==o4 && o4==o7 && o7==o1 && o1==true && o4==true && o7==true )
     	{alert('O castiga');scorO();}
     if(o2==o5 && o5==o8 && o8==o2 && o2==true && o5==true && o8==true )
     	{alert('O castiga');scorO();}
     if(o3==o6 && o6==o9 && o9==o3 && o3==true && o6==true && o9==true )
     	{alert('O castiga');scorO();}
      if(o1==o5 && o5==o9 && o9==o1 && o1==true && o5==true && o9==true )
     	{alert('O castiga');scorO();}
    if(o3==o5 && o5==o7 && o7==o3 && o3==true && o5==true && o7==true )
     	 { alert('O castiga');scorO();}



     	if(x==false)
     		document.getElementById("randul").innerHTML = "----X----";
     	else
     		document.getElementById("randul").innerHTML = "----O----";


}