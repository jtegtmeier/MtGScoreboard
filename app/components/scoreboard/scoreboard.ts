import {Component, CORE_DIRECTIVES, NgFor} from 'angular2/angular2';

import {PlayerList} from '../../services/player_list';
import {Player} from '../../services/player';

@Component({
  selector: 'scoreboard',
  templateUrl: './components/scoreboard/scoreboard.html',
  directives: [CORE_DIRECTIVES, NgFor]
})
export class ScoreboardCmp {
  constructor(public playerList: PlayerList) {}
  addPlayer(playername, life): boolean {
    this.playerList.add(new Player(playername.value, life.value, 'blue'));
    playername.value = '';
    return false;
  }
}
