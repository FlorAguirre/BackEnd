//Desafio 1

class Usuario {
    constructor(nombre, apellido, libros, mascotas){
    this. nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
    this.librosADevolver = [];
    }

    getFullName() {
        return console.log(`El usuario se llama ${this.nombre} y se apellida ${this.apellido}`);
    }
        
    addMascotas(nombreMascota) {
        this.mascotas.push(nombreMascota);

    }
    countMascotas() {
        return console.log(`La cantidad de mascotas es ${this.mascotas.length}`);
    }

    addBook(libro){
        this.libros.push(libro);
    }

    getBookNames(){
        this.libros.forEach(libro => {
            this.librosADevolver.push(libro.nombre);
            
        });

        console.log(this.librosADevolver)

    }
}

let usuarioP = new Usuario(
    'Flor',
    'Aguirre',

    [
        {nombre: 'Romeo y Julieta' , Autor: 'William Shakespeare' },
        {nombre: 'Orgullo y Prejuicio' ,  Autor: 'Jane Austen'},
    ],
    ['Perro' , 'Gato']
);

usuarioP.getFullName();
usuarioP.addMascotas('Tortuga');
usuarioP.countMascotas();
usuarioP.addBook({nombre: 'Dracula', Autor: 'Bram Stoker'});
usuarioP.getBookNames();