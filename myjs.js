var n1=document.getElementById("btn1")
n1.onclick=function check()
{
    var name=window.txtUser.value;
    var pass=window.txtPass.value;
   if(name=='aa'&pass=='aa')
   {
   document.getElementById("lbl").innerHTML="True";
   }   
   else
   {
    document.getElementById("lbl").innerHTML="False";
   } 

}
