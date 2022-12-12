export class Soldier {
    health:number;
    strength: number;

    constructor(healthArg: number, strengthArg: number) {
        this.health = healthArg
        this.strength = strengthArg
    };

    attack(){
        return this.strength = 0;
    }

    receiveDamage(dmg:number){
        this.health -= dmg
    }
}