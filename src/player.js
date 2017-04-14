/**
 * Created by nathangodinho on 08/04/17.
 */
(function () {
    "use strict";

    var config = require('./config');

    var getPlayerSticks = function (maxSticks) {
        return Math.floor(Math.random() * maxSticks);
    };

    var Player = function (id) {
        this.id = id;
        this.totalSticks = config.gameSettings.playersMaxSticks;
        this.inHandSticks = getPlayerSticks(this.totalSticks);
    };

    Player.prototype.chooseNewsSticks = function () {
        this.inHandSticks = getPlayerSticks(this.totalSticks);
    };

    Player.prototype.decreaseStick = function () {
        this.totalSticks--;
    };

    Player.prototype.bet = function (totalSticksInGame) {
        return getPlayerSticks(totalSticksInGame);
    };

    module.exports = Player;
})();