const btn = document.querySelector("button");
const checkBox=document.querySelector("#check")
let title=document.querySelector("h1")
let text=document.getElementById("convert_text")


setInterval(function(){
  if(checkBox.checked===false){
    title.innerText="voice to text converter"
    text.setAttribute("placeholder","press button and start speak")
    btn.onclick= function voice() {
    var recognition = new webkitSpeechRecognition();
  recognition.lang = "en-GB";
  recognition.onresult = function (event) {
    console.log(event);
    text.value =
      event.results[0][0].transcript;
  };
  recognition.start();
  console.log("speach")
}
}else if(checkBox.checked===true){
  title.innerText="text to voice"
  text.setAttribute("placeholder","write your message")
  btn.onclick=function speech(){
    let paragraph= new SpeechSynthesisUtterance(text.value)
    speechSynthesis.speak(paragraph)
    console.log("listen")
  }
}
},500)




