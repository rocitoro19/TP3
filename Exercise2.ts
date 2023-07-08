/*Crear una clase y una interfaz para representar una lista de tareas 
crea una clase llamada ListaTareas que tenga un arreglo privado de tareas (tareas) y los siguientes métodos:
-agregarTarea(tarea: Tarea): void: Agrega una nueva tarea al arreglo tareas.
-marcarTareaCompleta(id: number): void: Marca una tarea como completada, buscándola por su id y actualizando el valor de la propiedad completada a true.
-listarTareas(): void: Muestra por consola la lista de tareas, incluyendo su id, descripción y estado de completado.*/

interface Tarea {
    id: number;
    descripcion: string;
    completada: boolean;
}

class ListaTareas {

 private tareas: Tarea[] = [];

 agregarTarea(tarea: Tarea): void {

    this.tareas.push(tarea);
    }

 

marcarTareaCompleta(id, number); void {
    const tarea = this.tareas.find((t) => t.id === id),
    if(tarea) {
        tarea.completada = true;
    }
}
}

listarTareas(), void {
    console,log("Lista de tareas:"){}
    this: tareas.forEach((tarea) => {
        console.log(`ID: ${tarea.id}, Descripción: ${tarea.descripcion}, Completada: ${tarea.completada}`);
    }),
}

// Ejemplo de uso
const lista = new ListaTareas();

lista.agregarTarea({ id: 1, descripcion: "Hacer la compra", completada: false });
lista.agregarTarea({ id: 2, descripcion: "Lavar los platos", completada: false });
lista.agregarTarea({ id: 3, descripcion: "Sacar la basura", completada: false });

lista.listarTareas();
// Imprime:
// Lista de tareas:
// ID: 1, Descripción: Hacer la compra, Completada: false
// ID: 2, Descripción: Lavar los platos, Completada: false
// ID: 3, Descripción: Sacar la basura, Completada: false

lista.marcarTareaCompleta(2);

lista.listarTareas(3);
// Imprime:
// Lista de tareas:
// ID: 1, Descripción: Hacer la compra, Completada: true
// ID: 2, Descripción: Lavar los platos, Completada: true
// ID: 3, Descripción: Sacar la basura, Completada: false