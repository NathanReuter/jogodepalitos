/**
 * Created by nathangodinho on 08/04/17.
 */
(function () {
    "use strict";

    var config = require('./config');

    var getPlayerSticks = function () {
        return Math.floor(Math.random() * config.gameSettings.playersMaxSticks);
    };

    var Player = function (id) {
        this.id = id;
        this.sticks = getPlayerSticks();
    };

    module.exports = Player;
})();