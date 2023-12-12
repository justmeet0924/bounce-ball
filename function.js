function effect(array){
	
	array.forEach(obj =>{
		
		let vec = createVector(obj.x-mouseX,obj.y-mouseY);
		vec.normalize().mult(10);
		obj.vx = (vec.x);
		obj.vy = (vec.y);
		
		
		
	})
	

	
}
