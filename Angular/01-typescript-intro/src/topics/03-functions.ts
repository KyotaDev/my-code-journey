
function addNumbers( a: number, b: number){
    return a + b;
}

const addNumberArrow = (a: number, b: number) : string => {
    return `${ a + b }`;
}

function multiply( firstNumber: number, secondNumber? : number, base : number = 2)
{
    return firstNumber * base;
}

// const result : number = addNumbers(1, 2);
// const result2 : string = addNumberArrow(1, 2);
// const multplyResult : number = multiply(5);

// console.log({result, result2, multplyResult});

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character : Character, amount : number) : void => {
    character.hp += amount;
}

const strider : Character = {
    name: 'Strider',
    hp: 100,
    showHp(){
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

healCharacter(strider, 20);

strider.showHp();

export {};