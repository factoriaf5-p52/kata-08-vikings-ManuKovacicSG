export class Soldier {
    health:number;
    strength: number;

    constructor(healthArg: number, strengthArg: number) {
        this.health = healthArg
        this.strength = strengthArg
    };

    attack(s:number){
        return this.strength = s
    }

}