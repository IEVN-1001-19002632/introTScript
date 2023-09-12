

interface Alumno{
    matricula?:number;
    nombre:string;
    edad:number;
    email:string;
}




const alumno:Alumno={
    nombre:'oscar',
    edad:'23',
    email:'ostronasa@gmail.com',

}

console.log(alumno)

let mascotas=['perro','gato','perico'];

mascotas[1]='nuevo gato';
mascotas.push()
console.log(mascotas);

let tem:(number|string)[]=[];
tem.push(11);
tem.push('nombre');
console.log(tem);