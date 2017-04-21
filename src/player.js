/**
 * Created by nathangodinho on 08/04/17.
 */
(function () {
    "use strict";

    var config = require('./config'),
        _ = require('lodash');

    var getPlayerSticks = function (maxSticks) {
        return Math.ceil(Math.random() * maxSticks);
    };

    var findBestBet = function (players) {

    };

    var Player = function (id) {
        this.id = id;
        this.totalSticks = config.gameSettings.playersMaxSticks;
        this.inHandSticks = getPlayerSticks(this.totalSticks);
        this.hadWin = false;
    };

    Player.prototype.chooseNewsSticks = function () {
        this.inHandSticks = getPlayerSticks(this.totalSticks);
    };

    Player.prototype.decreaseStick = function () {
        this.totalSticks--;
    };

    Player.prototype.setWin = function () {
        this.hadWin = true;
    };

    Player.prototype.clearWin = function () {
        this.hadWin = false;
    };

    Player.prototype.bet = function (totalSticksInGame, players, playersBets) {
        // findBestBet(players);
        console.log(playersBets);

        return getPlayerSticks(totalSticksInGame);
    };

    module.exports = Player;
})();