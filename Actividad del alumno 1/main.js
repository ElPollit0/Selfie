SpeechRecognition = window.webkitSpeechRecognition;

Recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function(event){
    console.log(event);
    Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if(Content =="selfie."|Content =="Selfie."|Content =="Selfie"|Content =="selfie")
    {
      console.log("tomando selfie --- ");
      speak();
    }
}
function speak (){
    mario = window.speechSynthesis;
    datohablado="Te vamos a tomar una foto en 5 segundos";
    hablaesto = new SpeechSynthesisUtterance(datohablado);
    mario.speak(hablaesto);
    Webcam.attach(camera);
    setTimeout(function()
    { 
        take_snapshot(); 
        save();
    }, 5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:100
});

camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}