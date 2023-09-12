

//funciones

function sumar(a:number,b:number):number{
    return a+b;

}
const resultado=sumar(4,6);

console.log(resultado);

function multiplicar(n1:number, otronumero:number, base:number=3):nombre{
    let tem=n1*base;
    return tem;
}

console.log(multiplicar(3,5));

interface mascotas{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}
function calcular(mascotas:mascotas, x:number):void{
    mascotas.edad+=x;
    console.log(mascotas);
}
const nuevamascota:mascotas={
    nombre:'Miau',
    edad:2,
    mostrarEdad(){
        console.log('La edad es:', this.edad);
    },
}
calcular(nuevamascota,3);