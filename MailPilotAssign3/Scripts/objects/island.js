var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Island Class
    var Island = (function (_super) {
        __extends(Island, _super);
        function Island(game) {
            _super.call(this, "island", game);
            this.dy = 5;
            this.game.addChild(this);
            this.reset();
        }
        Island.prototype.reset = function () {
            this.y = -this.height;
            this.x = Math.floor(Math.random() * stage.canvas.width);
        };

        Island.prototype.update = function () {
            this.y += this.dy;
            if (this.y > (this.height + stage.canvas.height)) {
                this.reset();
            }
        };
        return Island;
    })(objects.GameObject);
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map
