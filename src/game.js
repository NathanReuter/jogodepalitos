/**
 * Created by nathangodinho on 08/04/17.
 */
(function () {
    "use strict";

    var config = require('./config'),
        Player = require('./player'),
        _ = require('lodash');


    var Game = function () {
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

        this.init = function (nOfPlayers) {
            var players = createPlayers(checkNumberOfPlayer(nOfPlayers));

            console.log(players);

            return players;
        }
    };

    module.exports  = Game;
})();