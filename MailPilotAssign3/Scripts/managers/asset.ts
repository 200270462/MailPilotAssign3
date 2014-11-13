module managers {

    export class Asset{

        static loader;
        static atlas: createjs.SpriteSheet;

        static spriteSheetData = {
            "images": ["assets/images/atlas.png"],
            "frames": [

                [2, 2, 226, 178],
                [297, 69, 62, 63],
                [230, 2, 65, 65],
                [297, 2, 65, 65],
                [230, 69, 65, 65]
            ],
            "animations": {

                "cloud": [0],
                "island": [1],
                "plane": {
                    frames: [2, 3, 4],
                    speed: 1
            },

            }

        }

        static manifest = [
            { id: "ocean", src: "assets/images/ocean.gif" },
            { id: "yay", src: "assets/sounds/yay.ogg" },
            { id: "thunder", src: "assets/sounds/thunder.ogg" }
        ];

        static init() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);   
            this.loader.loadManifest(this.manifest);

            this.atlas = new createjs.SpriteSheet(this.spriteSheetData);

        }

   
    }
} 