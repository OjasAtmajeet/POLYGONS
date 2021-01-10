class brick2 {
    constructor(x, y, angle) {
        var options = {
            'isStatic': false,
            'restitution': 0.1,
            'friction': 1,
            'density': 0.1
        }
        this.body = Bodies.rectangle(x, y, 50, 75, options);
        this.width = 50;
        this.height = 75;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(5);
        stroke("black");
        fill("#FFC0CB");
        rect(0, 0, 50, 75);
        pop();
    }
};
