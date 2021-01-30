//inpN...inpE..inpI..btn
var ime=document.getElementById('inpN');
var email=document.getElementById('inpE');
var info=document.getElementById('inpI');
var send=document.getElementById('btn');
var xx;

send.addEventListener('click', validacija);
ime.addEventListener('focus', clearAll);
email.addEventListener('focus', clearAll);
info.addEventListener('focus', clearAll);

function validacija (){
xx=1;
    //name
if (ime.value==""){
    ime.value="This field is mandatory";
    ime.style.color='red';
    xx=0;
};
//email
if(email.value.indexOf('@')==-1){
email.value="Enter a valid email!!!";

}
if (email.value==""){
    email.value="This field is mandatory";
    email.style.color='red';
xx=0;
};
//info
if (info.value==""){
    info.value="This field is mandatory";
    info.style.color='red';
    xx=0;
};
}
if(xx=1){
    window.location.assign('second.html');
}


function clearAll(){
this.value="";
this.style.color='black';    
}


