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
                '<div class="col-sm-{{nPlayer}} player-view {{roundWin}}" style="background: {{color}}">' +
                    '<h4>Jogador: {{id}}</h4>' +
                    '<h3>Na Mão: {{inHandSticks}}</h3>' +
                    '<h3>Total: {{totalSticks}}</h3>' +
                '</div>';

        var nextRoundButtonTemplate =
            '<div class="row"> ' +
                '<div class="col-sm-12" style="margin-top: 20px;"> '+
                    '<button class="btn btn-primary bt-lg" id="next-round-button">Próxima Rodada</button>' +
                '</div>' +
            '</div>';

        playerViewTemplate = playerViewTemplate
                .replace('{{nPlayer}}', Math.floor(12 / players.length));

        gameView.innerHTML = '<div class="row"></div>';

        _.forEach(players, function (player) {
            var playerView = playerViewTemplate
                .replace('{{id}}', player.id + 1)
                .replace('{{inHandSticks}}', player.inHandSticks)
                .replace('{{totalSticks}}', player.totalSticks)
                .replace('{{roundWin}}', player.hadWin ? 'round-win' : '')
                .replace('{{color}}', config.playersColors[player.id]);

            gameView.firstChild.innerHTML += playerView;
        });

        gameView.firstChild.innerHTML += nextRoundButtonTemplate;

        document.getElementById('next-round-button').onclick = function () {
            window.game.nextRound(players);
            createPlayersView(players, gameView);
        };
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