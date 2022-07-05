var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start(){
document.getElementById("tb").innerHTML = "";
Recognition.start();
}

Recognition.onresult = function (event){
console.log (event);
var msg = event.results[0][0].transcript;
document.getElementById("tb").innerHTML = msg;
if (msg=="Take my selfie"){
    console.log("Taking your selfie---");
    speak();
}
 
}

function speak(){
var synth = window.speechSynthesis;
var speak = "Taking your selfie in 3 seconds";
var utterthis = new SpeechSynthesisUtterance(speak);
synth.speak(utterthis);
Webcam.attach(camera);
setTimeout(function(){
    take_snapshot();
    save();
},3000); 
}

Webcam.set({
width:360,
height:250,
image_format:'png',
png_quality:100
});

camera = document.getElementById("cam");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfie").innerHTML = '<img id="png" src="'+data_uri+'"> ';
    });
}

function save(){
link = document.getElementById("anc");
image = document.getElementById("png").src;
link.href = image;
link.click();
}