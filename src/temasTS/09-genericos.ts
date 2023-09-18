
//clase generica
class PilaGenerica<T>{
    private vec:T[]=[];
    insertar(x:T){

        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null

        }
   }

class PilaString{
    private vec:string[]=[];
    insertar(x:string){

        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0){
            return this.vec.pop();
                         return null

       }
    }
}
let pila3=new PilaGenerica<number>;
pila3.insertar(20);
pila3.insertar(23);
pila3.insertar(2);
console.log(pila3.extraer());

let pila4=new PilaGenerica<string>;
pila4.insertar('Juan');
pila4.insertar('Ana');
pila4.insertar('Luis');
console.log(pila4.extraer());

//clas

