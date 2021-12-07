class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.sig = null;
        this.ant = null;
    }
}

class ListaDobleCircular {
    constructor() {
        this.ini = null;
        this.fin = null;
    }

    insertar(dato) {
        let nuevo = new Nodo(dato);

        if(this.ini == null) {
            this.ini = this.fin = nuevo;
            this.ini.sig = this.fin;
            this.ini.ant = this.fin;
            this.fin.sig = this.ini;
            this.fin.ant = this.ini;
        } else {
            let aux = this.ini.sig;
            do {
                if(aux == this.fin) {
                    nuevo.sig = this.ini
                    nuevo.ant = aux;
                    aux.sig = nuevo;
                    this.ini.ant = nuevo;
                    this.fin = nuevo;
                    break;
                }
                aux = aux.sig
            } while(aux != this.ini);
        }
    }

    mostrar() {
        let aux = this.ini;
        let contador = 1;
        while(contador <= 3 || aux != this.ini) {
            if(aux == this.ini) {
                console.log("Vuelta: " + contador);
                contador++;
            }
            console.log(aux.dato);
            aux = aux.sig;
        }
    }

    mostrarReversa() {
        let aux = this.ini;
        let contador = 1;
        while(contador <= 3 || aux != this.ini) {
            if(aux == this.ini) {
                console.log("Vuelta: " + contador);
                contador++;
            }
            console.log(aux.dato);
            aux = aux.ant;
        }
    }
}

let listaDobleCircular = new ListaDobleCircular();
listaDobleCircular.insertar(3);
listaDobleCircular.insertar(4);
listaDobleCircular.insertar(5);
listaDobleCircular.insertar(6);
listaDobleCircular.insertar(7);
console.log("Vuelta Horaria")
listaDobleCircular.mostrar();
console.log("Vuelta Antihoraria")
listaDobleCircular.mostrarReversa();
