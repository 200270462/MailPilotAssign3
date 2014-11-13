var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Plane Class
var objects;
(function (objects) {
    var Plane = (function (_super) {
        __extends(Plane, _super);
        function Plane(game) {
            _super.call(this, "plane", game);
            this.y = 430;

            this.game.addChild(this);
        }
        Plane.prototype.update = function () {
            this.x = stage.mouseX;
        };
        return Plane;
    })(objects.GameObject);
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map
