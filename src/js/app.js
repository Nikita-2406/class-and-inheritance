// TODO: write your code here
console.clear()
class Character {
    constructor(name, type, attack, defence) {
        this.name = name
        this.type = type
        this.health = 100
        this.level = 1
        this.attack = attack
        this.defence = defence
    }
}

class Bowerman extends Character {
    constructor(name, type) {
        if (name.length >= 2 && name.length <= 10 && type === "Bowerman") {
            super(name, type, 25, 25)
        } else {
            throw new Error("НЕ соблюдаются правила игры")
        }
    }
}

class Zombie extends Character {
    constructor(name, type) {
        if (name.length >= 2 && name.length <= 10 && type === "Zombie") {
            super(name, type, 40, 10)
        } else {
            throw new Error("НЕ соблюдаются правила игры")
        }
    }
}

class Daemon extends Character {
    constructor(name, type) {
        if (name.length >= 2 && name.length <= 10 && type === "Daemon") {
            super(name, type, 10, 40)
        } else {
            throw new Error("НЕ соблюдаются правила игры")
        }
    }
}

class Magician extends Character {
    constructor(name, type) {
        if (name.length >= 2 && name.length <= 10 && type === "Magician") {
            super(name, type, 10, 40)
        } else {
            throw new Error("НЕ соблюдаются правила игры")
        }
    }
}

class Swordsman extends Character {
    constructor(name, type) {
        if (name.length >= 2 && name.length <= 10 && type === "Swordsman") {
            super(name, type, 40, 10)
        } else {
            throw new Error("НЕ соблюдаются правила игры")
        }
    }
}

class Undead extends Character {
    constructor(name, type) {
        if (name.length >= 2 && name.length <= 10 && type === "Undead") {
            super(name, type, 25, 25)
        } else {
            throw new Error("НЕ соблюдаются правила игры")
        }
    }
}

const bowerman = new Bowerman('111', 'Bowerman')
const zombie = new Zombie('222', 'Zombie')
const daemon = new Daemon('333', 'Daemon')
const magician = new Magician('444', 'Magician')
const swordsman = new Swordsman('555', 'Swordsman')
const undead = new Undead('666', 'Undead')
console.log(bowerman)
console.log(zombie)
console.log(daemon)
console.log(magician)
console.log(swordsman)
console.log(undead)
