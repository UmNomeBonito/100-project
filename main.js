
var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");

Webcam.set({
    width:360,
  height:250,
  image_format:'png',
  png_quality:90
  
  });



save(function()
{

    imgId = "selfie1"
    takeSelfie();
    speakData = "Tirando sua foto em 10 segundos"
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterthis);
    
},10000);

function takeSelfie()
{

    console.log(ImgId);

    Webcam.snap(function(data_uri) {
    if(imgId==selfie1){
        document.getElementById("foto1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
    }
    if(imgId==selfie2){
        document.getElementById("foto2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
    }
    if(imgId==selfie3){
        document.getElementById("foto3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
    }
    });
}