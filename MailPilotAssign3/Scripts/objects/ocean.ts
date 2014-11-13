module objects {
    // Ocean Class
    export class Ocean extends createjs.Bitmap {
        width: number;
        height: number;
        game: createjs.Container;
        dy: number;
        constructor(game: createjs.Container) {
            super(managers.Asset.loader.getResult("ocean"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.game = game;
            this.dy = 5;
            this.game.addChild(this);
            this.reset();
        }

        reset() {
            this.y = -this.height + stage.canvas.height;
        }

        update() {
            this.y += this.dy;
            if (this.y >= 0) {
                this.reset();
            }

        }
    }
} 