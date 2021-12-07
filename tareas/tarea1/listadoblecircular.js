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
        } else {
            if(this.ini == this.fin) {
                this.ini.sig = nuevo;
                this.ini.ant = nuevo;
                nuevo.ant = this.ini;
                nuevo.sig = this.ini;
                this.fin = nuevo;
            } else {
                let aux = this.ini.sig;
                while(aux != this.ini) {
                    if(aux == this.fin) {
                        nuevo.sig = this.ini
                        nuevo.ant = aux;
                        aux.sig = nuevo;
                        this.ini.ant = nuevo;
                        this.fin = nuevo;
                        break;
                    }
                    aux = aux.sig
                }
            }
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
listaDobleCircular.mostrar();
listaDobleCircular.mostrarReversa();