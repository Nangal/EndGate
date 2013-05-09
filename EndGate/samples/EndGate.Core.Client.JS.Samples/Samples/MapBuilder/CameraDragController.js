var CameraDragController = (function () {
    function CameraDragController(canvas, camera, keyboardHandler, mouseHandler) {
        var _this = this;
        this._dragging = false;
        this._dragActive = false;
        keyboardHandler.OnCommandPress("space", function (e) {
            _this._dragActive = !_this._dragActive;
            if(_this._dragActive) {
                canvas.style.cursor = "move";
            } else {
                canvas.style.cursor = "default";
            }
        });
        mouseHandler.OnDown.Bind(function (e) {
            _this._downAt = e.Position;
            _this._cameraStartPosition = camera.Position.Clone();
            _this._dragging = true;
        });
        mouseHandler.OnUp.Bind(function (e) {
            _this._upAt = e.Position;
            _this._cameraStartPosition = null;
            _this._dragging = false;
        });
        mouseHandler.OnMove.Bind(function (e) {
            if(_this._dragging && _this._dragActive) {
                camera.Position = _this._cameraStartPosition.Add(_this._downAt.Subtract(e.Position));
            }
        });
    }
    return CameraDragController;
})();
//@ sourceMappingURL=CameraDragController.js.map