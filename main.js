function setup(){
    canvas = createCanvas(200,200);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function preload(){
    classifier = ml2.imageClassifier("DoodleNet")
}

function clearCanvas(){
    background("white")
}

function draw(){
    strokeWeight(13);
    stroke0(0)
    if (mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,MouseY)
    }
}

function classifyCanvas(){
    classifier.classify(canvas , gotResults);
}

function gotResults(error,results){
     (error) {
        console.error(error);
    }



console.log(results);
document.getElementById('label').innerHTML = 'Label: ' + results[0].label;

document.getElementById('confidence').inneerHTML = 'Confidence: ' + Math.round(results[0].confidence = 100)

utterThis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);

}