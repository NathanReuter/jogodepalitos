/**
 * Created by nathangodinho on 08/04/17.
 */

(function () {
    "use strict";

    var _ = require('lodash'),
        config = require('./config');

    var hideBeginForm = function () {
        var beginForm = document.getElementById('begin-form');

        beginForm.style.display = 'none';

        return beginForm;
    };

    var showGameView = function () {
        var gameView = document.getElementById('game-view');

        gameView.style.display = 'block';

        return gameView;
    };

    var createPlayersView = function (players, gameView) {
        var playerViewTemplate =
                '<div class="col-sm-{{nPlayer}} player-view" style="background: {{color}}">' +
                    '<h4>Jogador: {{id}}</h4>' +
                    '<h3>Palitos: {{sticks}}</h3>' +
                '</div>';

        playerViewTemplate = playerViewTemplate
                .replace('{{nPlayer}}', Math.floor(12 / players.length));

        gameView.innerHTML = '<div class="row"></div>';

        _.forEach(players, function (player) {
            var playerView = playerViewTemplate
                .replace('{{id}}', player.id)
                .replace('{{sticks}}', player.sticks)
                .replace('{{color}}', config.playersColors[player.id]);

            gameView.firstChild.innerHTML += playerView;
        });
    };

    var View = function () {
        this.init = function (players) {
            hideBeginForm();
            _()
                .thru(showGameView)
                .thru(_.bind(createPlayersView, null, players))
                .value();
        }
    };

    module.exports = View;
})();