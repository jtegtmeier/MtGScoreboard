import {Player} from './player';
export class PlayerList {
  players:Player[] = [];

  get(): Player[] {
    return this.players;
  }

  add(newPlayer:Player): void {
    this.players.push(newPlayer);
  }

  remove(toRemove:Player): void {
    this.players.pop();
  }

  length():number {
    return this.players.length;
  }
}
