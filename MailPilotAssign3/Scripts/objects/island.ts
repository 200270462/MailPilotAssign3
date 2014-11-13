module objects {
    // Island Class
    export class Island extends objects.GameObject {
        dy: number;
        constructor(game: createjs.Container) {
            super("island", game);
            this.dy = 5;
            this.game.addChild(this);
            this.reset();
        }

        reset() {
            this.y = -this.height;
            this.x = Math.floor(Math.random() * stage.canvas.width);
        }

        update() {
            this.y += this.dy;
            if (this.y > (this.height + stage.canvas.height)) {
                this.reset();
            }

        }
    }
} 