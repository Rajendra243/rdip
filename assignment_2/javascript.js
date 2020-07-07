function valid(){
    var a=document.getElementById("phn").value;
    var b=document.getElementById("name").value;
    var c=document.getElementById("email").value;

    var emailreg=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var reg=/^[a-zA-z]{2,30}$/;
    var regexp=/^[6-9]\d{9}$/;
    
     if(regexp.test(a)!=true)
    {
        document.getElementById("lbl").innerHTML="Invalid";
        document.getElementById("lbl").style.visibility="visible";

    }
    if(regexp.test(a)==true)
    {
        document.getElementById("lbl").innerHTML="valid";
        document.getElementById("lbl").style.color="green";
        document.getElementById("lbl").style.visibility="visible";

    }
    if(emailreg.test(c)!==true)
    {
        document.getElementById("em").innerHTML="enter valid email";
        document.getElementById("em").style.visibility="visible";
    }
    if(emailreg.test(c)==true)
    {
        document.getElementById("em").innerHTML="valid ";
        document.getElementById("em").style.color="green";
        document.getElementById("em").style.visibility="visible";
    }
    if(reg.test(b)!=true)
    {
        document.getElementById("nb").innerHTML="Name must contain alphabets and start with alphabet";
        document.getElementById("nb").style.visibility="visible";
    }
    if(reg.test(b)==true)
    {
        document.getElementById("nb").innerHTML="valid";
        document.getElementById("nb").style.color="green";
        document.getElementById("nb").style.visibility="visible";
    }

}

function checksurvivor(val1,val2)
{//console.log("ww");
    let survivalmap = new Map([
        ['0','Human'],
        ['1','Cockroach'],
        ['2','Nuclear Bomb']
    ]);
    var a=document.getElementById("input1").value;
    var b=document.getElementById("input2").value;
   // console.log(b);
    if((a == '') || (b == ''))
    {
        alert("Nothing found!! Try Again...");
        return false;
    }
    a= parseInt(a);
    //console.log(a);
    b= parseInt(b);
    //console.log(b);
    var m = a%3 ;
    var n = b%3;
    //console.log(r,s);
    var TIE=true;
    if (m == n)
    {
    alert("Both objects are same so it's a TIE! ");
    return TIE;
    }
    if(((m==0) && (n==1)) || ((m==1) && (n==0)))
    {
        if((m==0) && (n==1))
        {alert(" Objects are "+survivalmap.get('0')+" and " + survivalmap.get('1')+"; Hurry! "+survivalmap.get('0') +" SURVIVES.");}
        else
        {alert(" Objects are "+survivalmap.get('1')+" and " + survivalmap.get('0')+"; Hurry! "+survivalmap.get('0') +" SURVIVES.");}
    return survivalmap.get('0');
    }

    if(((m ==1) && (n==2)) || ((m==2) && (n==1)))
    {
        if((m ==1) && (n==2))
        {alert(" Objects are "+survivalmap.get('1')+" and " + survivalmap.get('2')+"; So "+survivalmap.get('1') +" SURVIVES!");}
        else
        {alert(" Objects are "+survivalmap.get('2')+" and " + survivalmap.get('1')+"; So "+survivalmap.get('1') +" SURVIVES!");}
        return survivalmap.get('1');
    }
    if(((m==0) && (n==2)) || ((m==2) && (n==0)))
    {   if((m==0) && (n==2))
        {alert(" Objects are "+survivalmap.get('0')+" and " + survivalmap.get('2')+"; OOPS! "+survivalmap.get('0') +" DIES.");}
        else
        {alert(" Objects are "+survivalmap.get('2')+" and " + survivalmap.get('0')+"; OOPS!  "+survivalmap.get('0') +" DIES.");}
        return survivalmap.get('2');
    }
} 
function generateRandomNumber()
{
    document.getElementById("input1").value=Math.floor(Math.random()*Math.floor(1000));
    document.getElementById("input2").value=Math.floor(Math.random()*Math.floor(1000));
}
function check(str){
    
   var temp=str.toLowerCase();
    temp=temp.replace(/[^a-zA-Z0-9]+/g,'');
    if(temp=="")
    {
        alert("nothing found");
    }
    var length=temp.length;
    for(var i=0;i<length;i++)
    {
        if(temp[i]!=temp[length-1-i])
        {
           alert("not a palindrome");
           return false;
        }
        else{
            alert("palindrome");
            return true;
        }
    }
    
}
function checkanag(stringA,stringB){
    tempA=stringA;
    tempB=stringB;
    stringA = stringA.replace(/[^\w]/g, '');
    stringA = stringA.toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '');
    stringB = stringB.toLowerCase();
    stringA = stringA.split('').sort().join('');
 
    stringB = stringB.split('').sort().join('');
    
    if(stringA==="" || stringB==="") 
    {
        alert("Please enter something to search");
        return false;
    }
   if(stringA===stringB)
   {
       alert(tempA+" and "+tempB+" are "+" ANAGRAMS!");
       return true;
   }
   else{
    alert(tempA+" and "+tempB+" are "+" NOT ANAGRAMS!");
    return false;
   }
}
function addition()
{   var a;
    a=calci.output.value + '+';
    console.log(a);
    return a;
}

function subtraction()
{let b;
    b=calci.output.value + '-';
    console.log(b);
    return b;
}
function multiplication()
{
    var c;
    c=calci.output.value + '*';
    console.log(c);
    return c;
}
function divi()
{
    var d;
    d=calci.output.value + '/';
    console.log(d);
    return input4;
}
function perce()
{var e;
    e = (calci.output.value/100);
    e=e+'*';
    console.log(e);
    return e;
}
function absolute()
{   var f;
    f=(eval(calci.output.value))
    if(f<0)
    {f = Math.abs(f);}
    console.log(f);
    return f;
}
function sqroot()
{   var g;
    g=(eval(calci.output.value))
    g = (Math.sqrt(g))

if((g).toString().split('.').length==2){
    g= g.toFixed(3);
    }
    console.log(g);
    return g;

}
function eq()
{   var input8;
    input8=eval(calci.output.value);
    if(input8.toString().split('.').length ==2)
  { input8=input8.toFixed(3);}
    console.log(input8);
    return input8;
}

function decimal()
{   var input9;
    input9=calci.output.value + '.';
    if(((input9).split('.').length>2) && ((input9).indexOf('+') <1 && (input9).indexOf('-') <1 && (input9).indexOf('/') <1 && (input9).indexOf('*') <1 ))
    {alert("invalid");
    return '0';}
    console.log(input9);
    return input9;
}