export class Hero {
    name: string;
    type: string;
    health: number;
    mana: number;
    dmg: number;

    constructor(name: string,
                type: string,
                health: number,
                mana: number,
                dmg: number) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.mana = mana;
        this.dmg = dmg;
    }
}
