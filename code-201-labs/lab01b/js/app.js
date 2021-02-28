let userName=prompt('Hi\n whats your name?');
alert('Hi '+userName)
let userAge=prompt('How old are you?');
if(userAge<30){
  alert('your young\n have a wonderfull life')
}else{
  alert('too old');
}
let userCountry=prompt('Where are you from?');
alert('its a beatiful country');
let userColor=prompt('what is you favirote color?');
alert('thats cute');
console.log(userName,userAge,userCountry,userColor);
if(userAge<30){
    alert('Hello '+userName +' from '+userCountry +' you should by a '+userColor + ' rose');
  }else{
    alert('What up grandpa '+ userName+ 'I heard you are even older than ' + userCountry +'\n JK we love and will buy you a '+userColor +'rose');
 }
