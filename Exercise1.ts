/*Crear una clase abstracta llamada Animal y dos clases hijas llamadas Perro y Gato que extiendan la clase Animal.
Cada una de las clases hijas debe implementar el método hacerSonido() de forma diferente.*/

abstract class Animal {


    abstract hacerSonido(): void;
}

class Perro extends Animal {

    hacerSonido(): void { 
        console.log("El Perro hace: guau");
    }
}

class Gato extends Animal {

    hacerSonido(): void {
        console.log("El Gato hace: miau");
    }
}

// Ejemplo de uso
const perro = new Perro();
perro.hacerSonido(); // Imprime: El Perro hace: guau

const gato = new Gato();
gato.hacerSonido(); // Imprime: El Gato hace: miau
