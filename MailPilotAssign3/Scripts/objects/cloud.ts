module objects {
    // Cloud Class
    export class Cloud extends objects.GameObject {
        dy: number;
        dx: number;
        constructor(game:createjs.Container) {
            super("cloud", game);
            this.game.addChild(this);
            this.reset();
        }

        reset() {
            this.y = -this.height;
            this.x = Math.floor(Math.random() * stage.canvas.width);
            this.dy = Math.floor(Math.random() * 5 + 5);
            this.dx = Math.floor(Math.random() * 4 - 2);
        }

        update() {
            this.y += this.dy;
            this.x += this.dx;
            if (this.y > (this.height + stage.canvas.height)) {
                this.reset();
            }

        }
    }
} 