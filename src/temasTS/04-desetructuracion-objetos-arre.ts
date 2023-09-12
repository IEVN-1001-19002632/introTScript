

//desetructurar objetos y arreglos

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}
interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Reproductor={
    volumen: 90,
    segundo: 66,
    cancion: "ramito de violetas",
    detalles: {
        autor:'banda el mexicano',
        year:1993
    }
}

/* console.log(`El volumen actual es:${reproductor.volumen}`);
console.log(`Los segundos son: ${reproductor.segundo}`);
console.log(`La cancion es : ${reproductor.cancion}`);
console.log(`El cantante es : ${reproductor.detalles.autor}`);
console.log(`El año es : ${reproductor.detalles.year}`); */

const{volumen,segundo,cancion,detalles}=reproductor;
const{autor}=detalles;

console.log(`El volumen actual es:${volumen}`);
console.log(`Los segundos son: ${segundo}`);
console.log(`La cancion es : ${cancion}`);
console.log(`El cantante es : ${autor}`);
//console.log(`El año es : ${reproductor.detalles.year}`);
const dbz:string[]=['Goku', 'Vegeta', 'Trunks', 'MR.Satan'];
console.log(`Personajes 1:$dbz[0]`);
console.log(`Personajes 2:$dbz[1]`);
console.log(`Personajes 3:$dbz[2]`);
console.log(`Personajes 4:$dbz[3]`);
const[a,,,d]=dbz;

console.log(`Personajes n: ${a}`);
console.log(`Personajes n: ${d}`);
