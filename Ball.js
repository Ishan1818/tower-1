class Ball {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }

      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    display(color){
      fill(color);
      var pos =this.body.position;
      
    }
  }