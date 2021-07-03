class Ground {
    constructor(x, y, w) {
        var options = {
            isStatic: true
        }
        this.plane = Bodies.rectangle(x, y, w, 15, options);
        World.add(world, this.plane);
        this.x = x;
        this.y = y;
        this.w = w;
    }
    display() {
        var groundPos = this.plane.position;
        push()
        translate(groundPos.x, groundPos.y);
        rectMode(CENTER)
        fill(128, 128, 128)
        rect(0, 0, this.w, 15);
        pop()
    }
}