function startclassifification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ZhTHZE3j2/model.json",modelready)
}
function modelready(){
    classifier.classify(gotresult)
}
function gotresult(error, results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results)
    }
}