var user=[];
button1.onclick=function(){
    result.innerHTML="";
    for(var i=0;i<user.length;i++)
    {
        result.innerHTML+=user[i]+"<br>";
    }
};
button2.onclick=function(){
    var name=prompt("Enter a name").trim();
    var index=user.indexOf(name.toLowerCase());
    if(index<0)
    {
        result.innerHTML=name+" not found!";
    }
    else if(index>=0)
    {
        user.splice(index,1);
        result.innerHTML=name+" deleted!";
    }
};
button3.onclick=function(){
    var name=prompt("Enter a name").trim();
    var index=user.indexOf(name.toLowerCase());
    if(index<0)
    {
        user.push(name.toLowerCase());
        result.innerHTML=name+" add to list!";
    }
    else if(index>=0)
    {
        result.innerHTML=name+" is already exist!";
    }
};
var signUp=false;
button4.onclick=function(){
    var name=prompt("Enter a name").trim();
    var index=user.indexOf(name.toLowerCase());
    if(signUp===false)
    {
        if(index<0)
    {
        result.innerHTML=name+" is not a user sign up first";
    }
    else if(index>=0)
    {
        result.innerHTML=name+" sign up successful!";
        wellcomeG.innerHTML="Wellcome, "+name;
        signUp=true;
    }
    }
    else{
        result.innerHTML="first logout from other account";
    }
};
button5.onclick=function(){
    if(signUp===true)
    {
        result.innerHTML="you are now log out!";
        wellcomeG.innerHTML="Wellcome, Guest!";
        signUp=false;
    }
    else{
        result.innerHTML="First sign up from a user";
    }
};
wellcomeG.onclick=function(){
    result.innerHTML=wellcomeG.innerHTML;
};
logo.onclick=function(){
    alert("you already at main page!");
};