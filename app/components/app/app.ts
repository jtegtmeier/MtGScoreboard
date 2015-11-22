import {Component, ViewEncapsulation} from 'angular2/angular2';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'http/http';

import {HomeCmp} from '../home/home';
import {ScoreboardCmp} from '../scoreboard/scoreboard';
import {PlayerList} from '../../services/player_list';

@Component({
  selector: 'app',
  viewProviders: [PlayerList],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: HomeCmp, as: 'Home' },
  { path: '/scoreboard', component: ScoreboardCmp, as: 'Scoreboard' }
])
export class AppCmp {}
