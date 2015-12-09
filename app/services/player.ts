/**
 * Created by TEG on 11/20/2015.
 */

export class Player {
  name:string;
  life:number;
  color:string;
  poisonCount:number;

  constructor(name, life) {
    this.name = name;
    this.life = +life;
    this.color = '#' + Math.random().toString(16).substring(2, 8);
    this.poisonCount = 0;
  }

  removeLife(damage:number) {
    if(damage < 0) {
      window.alert('Damage must be greater then 0.');
    } else if(damage > 100) {
      window.alert('Reached damage limit. Must be < 100.');
    } else {
      this.life = this.life -damage;
    }
  }

  addLife(life: number): void {
    if(life < 0) {
      window.alert('Life must be greater then 0.');
    } else if(life > 100) {
      window.alert('Reached life limit. Must be < 100.');
    } else {
      this.life += life;
    }
  }

  removePoisonCount(count:number ) {
    if(count < 0) {
      window.alert('Count must be greater then 0.');
    } else if(count > 100) {
      window.alert('Reached count limit. Must be < 100.');
    } else {
      this.poisonCount = this.poisonCount - count;
    }
  }

  addPoisonCount(count:number) {
    if(count < 0) {
      window.alert('Count must be greater then 0.');
    } else if(count > 100) {
      window.alert('Reached count limit. Must be < 100.');
    } else {
      this.poisonCount = this.poisonCount + count;
    }
  }

  setPlayerColor(color:string) {
    // TODO: check color string for valid color
    this.color = color;
  }
}
