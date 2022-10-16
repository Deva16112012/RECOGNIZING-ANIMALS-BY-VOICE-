function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    Classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9DrVP1Cab/model.json',modelReady);
}
function modelReady(){
    Classifier.classify(gotResults);
}
function gotResults(error,result){
    console.log(result);
   if(error){
        console.log(error);
    }
    else{
        console.log(result);
        red=Math.floor(Math.random()*255)+1;
        green=Math.floor(Math.random()*255)+1;
        blue=Math.floor(Math.random()*255)+1;

        document.getElementById("v").innerHTML="I hear - "+result[0].label;
        document.getElementById("f").innerHTML="Accuracy - "+(result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("v").style.color="rgb("+red+","+green+","+blue+")";
        document.getElementById("f").style.color="rgb("+red+","+green+","+blue+")";

        o=document.getElementById("q");
        if(result[0].label == "Chirping"){
            o.src="bird.png";
        }
        else if(result[0].label == "Meow"){
            o.src="cat.png";
        }
        else if(result[0].label == "Barking"){
            o.src="dog.png";
        }
        else if(result[0].label == "Roar"){
            o.src="lion.png";
        }
        else{
            o.src="ear.png";
        }
    }
}