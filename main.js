//https://teachablemachine.withgoogle.com/models/3SlSP2PiC/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3SlSP2PiC/.model.json", modelready)
}
function modelready(){
    classifier.classify(got_results())
}