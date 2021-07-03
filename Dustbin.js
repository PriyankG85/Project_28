class Dustbin {
    constructor(x, y, width, height) {

        var options={
            isStatic : true
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        this.container=Bodies.rectangle(this.x, this.y,this.width, this.height, options);
        World.add(world, this.container);
    }
    display() {
        var pos=this.container.position;
        rectMode(CENTER);
        fill('blue');
        rect(this.x, this.y, this.width, this.height);
    }
}