//Se recomienda crear constantes para evitar problemas con los identificadores
//Muy importante: NO REPETIR NINGÚN literal
export const Constantes = {
    EVENTOS: {
        VIDAS: 'cambiaVidas',
        PUNTUACION: 'cambiaPuntuacion',
        BESKAR: 'cambiaBeskar'
    },
    HUD: {
        VIDAS: 'VIDA '
    },
    ESCENAS: {
        CARGA: 'Carga',
        MENU: 'Menu',
        NIVEL1: 'Nivel1',
        HUD: 'HUD'
    },
    REGISTRO: {
        VIDAS: 'vidas',
        PUNTUACION: 'puntuacion',
        NOMBRENIVEL: 'nombrenivel',
        BESKAR: 'numbeskar',
        BESKARMAX: 'numbeskarmax',
        GANADO: 'nivelpasado'
    },
    MAPAS: {
        NIVEL1: {
            TILEMAPJSON: 'mitilemapjson',
            CAPAPLATAFORMAS: 'fondo', //Nombre de capa en JSON
            CAPASUELO: 'colisionable', //Nombre de capa en el tileset
            TAPAPOZOS: 'pozos', //Nombre de capa en el tileset
            CAPAROCAS: 'rocas', //Nombre de capa en el tileset
            ENEMIGOS: 'enemigos', //Nombre de capa en el tileset
            ENEMIGOSAIRE: 'enemigosaire', //Nombre de capa en el tileset
            LINGOTES: 'beskar' //Nombre de capa en el tileset
        },
        TILESET: 'prueba' //Nombre del tileset en JSON
    },
    FONDOS: {
        NIVEL1: 'Arena',
        BANTHA: 'Bantha',
    },
    FUENTES: {
        NOMBREFUENTE: 'fuentePixel'//id interno

    },

    ANIMACION: {
        ESPERAR: 'esperar',
        CORRER: 'correr',
        SALTAR: 'saltar',
        ATACAR: 'atacar'
    },

    DIRECCION: {
        IZQUIERDA: 'izquierda',
        DERECHA: 'derecha'
    },

    JUGADOR: {
        ID: 'jugador',//Nombre de objeto en el tileset
        ANIMACION: {
            ESPERAR: 'esperar',
            CORRER: 'correr',
            SALTAR: 'saltar',
            ATACAR: 'atacar'
        }
    },

    SKELETON: {
        ID: 'skeleton',
        ANIMACION: {
            ESPERAR: 'esperar',
            CORRER: 'correr',
            ATACAR: 'atacar'
        }
    },

    FRANKY: {
        ID: 'power_1',//Nombre de objeto en el tileset
        ANIMACION: {
            ESPERAR: 'esperar',
            CORRER: 'correr',
            SALTAR: 'saltar',
            ATACAR: 'atacar'
        }
    },
    CANCERBERO: {
        ID: 'power_2',//Nombre de objeto en el tileset
        ANIMACION: {
            ESPERAR: 'esperar',
            CORRER: 'correr',
            SALTAR: 'saltar',
            ATACAR: 'atacar'
        }
    },


    DEMONIO: {
        ID: 'power_3',//Nombre de objeto en el tileset
        ANIMACION: {
            ESPERAR: 'esperar',
            CORRER: 'correr',
            SALTAR: 'saltar',
            ATACAR: 'atacar'
        }
    },

    JAWA: {
        ID: 'jawa',//Nombre de objeto en el tileset
        MUERTE: 'muerte',
        ANIMACION: {
            ESPERAR: 'esperarj',
            CORRER: 'correrj',
            GOLPEAR: 'golpearj'
        }
    },
    VOLADOR: {
        ID: 'mynock',
        ANIMACION: {
            VOLAR: 'volar'
        }
    },
    BESKAR: {
        ID: 'beskar',
        IMAGEN: 'beskar2png',
        IMAGENHUD: 'beskarpng'
    },
    SONIDOS: {
        JAWAATAQUE: 'utinni',
        JAWAMUERE: 'jawamuere',
        AY: 'ay',
        MONEY: 'money',
        INTRO: 'intro',
        DUNAS: 'dunas'
    },
    CONTROLES: {
        ID: 'ControlGamepad',
        IMAGEN: 'ControlIMG'
    }
};
export default Constantes;