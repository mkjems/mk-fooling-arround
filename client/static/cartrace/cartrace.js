
window.onload = function(){
	var canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	ctx.fillStyle = 'white';
	ctx.fillRect (50,50,100,100);

	ctx.strokeStyle = 'white';
	ctx.lineWidth = 0.1;
	ctx.beginPath();
	ctx.moveTo(400,10);
	ctx.lineTo(400,390);
	ctx.lineTo(200,390);
	ctx.lineTo(100,100);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.rotate((Math.PI/180)*25);
};
