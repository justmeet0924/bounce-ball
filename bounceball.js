//main file of this repository
class BounceBall {
  constructor(m,g) {
    this.x = 100+width/2 + width*random()/2;
    this.y = height*random()/8+height/8;
    this.r = random([10,20,30]);
    this.w = this.r*2;
    this.h = this.r*2;
    this.vx = random();
    this.vy = random();
    this.fx = 0;
    this.fy = 0;
    this.life = 0;
    this.own_color = [0,250*random([1,1/2,0]),250];//random(pallete).rgb//[0,250*random(),250];
    this.your_color = [250,0,0];
    this.color = [0, 0, 0,100];
    this.m = m;
    this.l0 = this.r;
    this.g = g;
  }
  
  init(){
    
    this.fx = 0;
    this.fy = this.g*this.m;
    
    
  }
	
	speed_mag(){
		
		let v = createVector(this.vx,this.vy);
		let mag = v.mag();
		
		return mag;
		
	}
	
	culc_e(){
		let v = this.speed_mag();
		let e = this.m*v*v;
		
		return e;
		
		
	}
	
	change_color(){
		
		let e = this.culc_e();
		// for(let i=0; i<3; i++){
		// 	this.color[i] = this.own_color[i]*e/2000
		// }
		
		// if(e > 250){
		// 	this.color[1] = 0
			
		// }else{
		// 	this.color[1] = 250;
			
		// }
		this.color[1] = abs(250-e)//*250/1000
		//this.color[1] = 25000/e
		
	}

	
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life += 1;
    
    this.vx += this.fx/this.m;
    this.vy += this.fy/this.m;


  }
  
  force(){
    
    balls.forEach(b => {
      
      let l = dist(b.x,b.y,this.x,this.y);
      
      if(l-this.l0 < 0){
        
        let vec = createVector(b.x-this.x,b.y-this.y);
        vec.normalize();
        vec.mult(abs(l-this.l0));
        
        b.fx += k*vec.x;
        b.fy += k*vec.y;
        
        
      }
      
      
    })
    
  }
  reflect_wall() {
    if (this.y < this.r) {
      this.vy = -this.vy*e;
      this.y = this.r;
    }
    if (this.y > height - this.r) {
      this.vy = -this.vy*e;
      this.y = height - this.r;
    }
    if (this.x < this.r) {
      this.vx = -this.vx*e;
      this.x = this.r;
    }
    if (this.x > width - this.r) {
      this.vx = -this.vx*e;
      this.x = width - this.r;
    }
  }

  render() {
    push();
    fill(this.color);
    translate(this.x, this.y);
    strokeWeight(1);
    circle(0, 0, this.r*2);
    pop();
  }

}

