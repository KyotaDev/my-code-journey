let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = '';
    if (juegaMessi) {
        equipo1 += messi;
        motivo = ' porque juega Messi';
    }
    if (equipo1 > equipo2) {
        console.log(`Gana Inter Miami${motivo}`);
    }
    if (equipo1 === equipo2) {
        console.log('Empate');
    }
    if (equipo1 < equipo2) {
        console.log('Gana FC Dallas');
    }
}
jugar(interMiami, fcDallas, juegaMessi);
