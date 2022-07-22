import Vec from "./Vec.js";
import State from "./State.js";

class Monster {
  constructor(pos, speed, reset) {
    this.pos = pos;
    this.speed = speed;
    this.reset = reset;
  }

  get type() {
    return "monster";
  }

  static create(pos) {
    return new Monster(pos.plus(new Vec(0, -1)), new Vec(0, 0));
  }

  update(time, state) {
    let newPos = this.pos.plus(this.speed.times(time));
    if (!state.level.touches(newPos, this.size, "wall")) {
      return new Monster(newPos, this.speed, this.reset);
    } else if (this.reset) {
      return new Monster(this.reset, this.speed, this.reset);
    } else {
      return new Monster(this.pos, this.speed.times(-1));
    }
  }

  collide(state) {
    let actors = state.actors;
    let status = state.status;
    const player = actors.find((actor) => actor.type === "player");

    if (player.pos.y > this.pos.y) status = "lost";
    else actors = actors.filter((actor) => actor !== this);
    return new State(state.level, actors, status);
  }
}

Monster.prototype.size = new Vec(1.2, 2);

export default Monster;
