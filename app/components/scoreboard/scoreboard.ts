import {Component, CORE_DIRECTIVES, NgFor, NgStyle} from 'angular2/angular2';

import {PlayerList} from '../../services/player_list';
import {Player} from '../../services/player';

@Component({
  selector: 'scoreboard',
  templateUrl: './components/scoreboard/scoreboard.html',
  styleUrls: ['./components/scoreboard/scoreboard.css'],
  directives: [CORE_DIRECTIVES, NgFor, NgStyle]
})
export class ScoreboardCmp {
  formHidden:boolean;

  constructor(public playerList: PlayerList) {
    this.formHidden = false;
  }

  addPlayer(playername, life): boolean {
    this.playerList.add(new Player(playername.value, life.value));
    playername.value = '';
    return false;
  }

  hideForm(): void {
    this.formHidden = !this.formHidden;
  }
}
