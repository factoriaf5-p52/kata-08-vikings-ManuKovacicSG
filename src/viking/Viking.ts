import { Soldier } from "../soldier/Soldier";

export class Viking extends Soldier {
  name: string;

  constructor(name: string, healthArg: number, strengthArg: number) {
    super(healthArg, strengthArg);
    this.name = name;
  }

  /* attack() {
        super(this.strength)
    } */

  receiveDamage(dmg: number) {
    this.health -= dmg;
    if (this.health > 0)
      return this.name + " has received " + dmg + " points of damage";
    else if (this.health <= 0) return this.name + " has died in act of combat";
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}
