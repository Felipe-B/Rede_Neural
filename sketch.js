function setup() {
	createCanvas(500, 500);
    background(100,500,600);
	
	
	var nn = new RedeNeural(1,3,5);
	var arr = [1,2];
	nn.feedforward(arr)
 }

function draw() {
	
}
