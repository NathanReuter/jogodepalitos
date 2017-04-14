/**
 * Created by nathangodinho on 08/04/17.
 */
(function () {
    "use strict";

    var config = require('./config'),
        Player = require('./player'),
        _ = require('lodash');

    var createPlayers = function (nOfPlayers) {
        return _.times(nOfPlayers)
            .map(function (id) {
                return new Player(id);
            });
    };

    var checkNumberOfPlayer = function (nOfPlayers) {
        if (nOfPlayers > config.gameSettings.maxPLayers) {
            return config.gameSettings.maxPLayers;
        }

        if (!nOfPlayers || nOfPlayers < config.gameSettings.minPlayers) {
            return config.gameSettings.minPlayers;
        }

        return nOfPlayers;
    };

    var checkWinCondition = function (player) {
        if (!player.totalSticks) {
            alert('Jogador ' + player.id + ' Venceu!');
        }
    };

    var nextRound = function (players) {
        var totalInGameSticks = function () {
            return _(players)
                .map(function (player) {
                    return player.totalSticks;
                }).reduce(function (sticksSum, nSticks) {
                    return sticksSum += nSticks;
                });
        }();

        var totalInHandSticks = function () {
            return _(players)
                .map(function (player) {
                    return player.inHandSticks;
                }).reduce(function (sticksSum, nSticks) {
                    return sticksSum += nSticks;
                });
        }();

        var isCorrectBet = function (playerBet, totalInHandSticks) {
            return playerBet === totalInHandSticks;
        };

        var checkPlayersBet = function (players) {
          _.each(players, function (player) {
              var playerbet = player.bet(totalInGameSticks);

              if (isCorrectBet(playerbet, totalInHandSticks)) {
                player.decreaseStick();
                checkWinCondition(player);
              }
              console.log(playerbet);
          })
        };

        checkPlayersBet(players);
    };

    var Game = function () {
        this.players = [];
    };

    Game.prototype.init = function (nOfPlayers) {
        console.log('this', this);
        var players = createPlayers(checkNumberOfPlayer(nOfPlayers));

        nextRound(players);

        return players;
    };

    Game.prototype.nextRound = nextRound;
    module.exports  = Game;
})();