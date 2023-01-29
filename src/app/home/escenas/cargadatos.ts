import Constantes from "../constantes";
import Phaser from "phaser";

export default class CargaDatos extends Phaser.Scene {

    private barraC!: Phaser.GameObjects.Graphics; //barra de carga
    //Las ! en las variables indican que ese valor no puede ser ni null ni undefined, siempre ha de tener un valor

    constructor() {
        super('CargaDatos');
    }

    preload() {
     


        //CARGA DE ASSETS
       
        //Mapas
        /*this.load.image('tilesetnivel1', 'assets/imagenes/mapas/mapa1/tilesetnivel1.png');
        this.load.tilemapTiledJSON("mitilemapjson", 'assets/imagenes/mapas/mapa1/tatooine.json');*/

        /*this.load.image('tilesetnivel1', 'assets/imagenes/mapas/mapa2/Mapa.png');
        this.load.tilemapTiledJSON("mitilemapjson", 'assets/imagenes/mapas/mapa2/Mapa_Proyecto.json');*/

        this.load.image('tilesetnivel1', 'assets/imagenes/mapas/mapa/mapa.png');
        this.load.tilemapTiledJSON("mitilemapjson", 'assets/imagenes/mapas/mapa/mapa.json');
        
       

        //Fuente

        //Atlas Alucard1Walking
        this.load.atlas(Constantes.JUGADOR.ID, 'assets/imagenes/jugador/Alucard1/Alucard1Walking.png', 'assets/imagenes/jugador/Alucard1/Alucard1Walking.json');
        
        //ATLAS Franky
        this.load.atlas(Constantes.FRANKY.ID,'assets/imagenes/power_up/franky/spritesheet.png', 'assets/imagenes/power_up/franky/sprites.json');

        //ATLAS Cancerbero
        this.load.atlas(Constantes.CANCERBERO.ID,'assets/imagenes/power_up/cancerbero/spritesheet.png', 'assets/imagenes/power_up/cancerbero/sprites.json');
        
        //ATLAS DEMONIO
        this.load.atlas(Constantes.DEMONIO.ID,'assets/imagenes/power_up/demonio/spritesheet.png', 'assets/imagenes/power_up/demonio/sprites.json');


        //Atlas Enemigo - JAWA

        //Atlas Enemigo - Mynock


    }

    create() {
        this.scene.start(Constantes.ESCENAS.NIVEL1)
    }
   

}