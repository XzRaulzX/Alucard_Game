import { map } from "rxjs";
import Constantes from "../constantes";
import Jugador from '../gameobjects/jugador';
import Miestilo from "../textos";


export default class Nivel1 extends Phaser.Scene {


    public jugador!: Jugador;
    public ancho!: integer;
    public alto!: integer;


    constructor() {
        super(Constantes.ESCENAS.NIVEL1);
    }

    preload() //Ejecuta una única vez la precarga de los assets
    {
    }

    create() //Crea escena 
    {
        this.ancho = this.sys.game.canvas.width;
        this.alto = this.sys.game.canvas.height;

        const mapa = this.make.tilemap({ key: 'mitilemapjson', tileWidth: 16, tileHeight: 16 })
        this.physics.world.bounds.setTo(0, 0, mapa.widthInPixels, mapa.heightInPixels)
        const tileset = mapa.addTilesetImage('mapa', 'tilesetnivel1')


        const nubes = this.add.image(0, this.ancho, 'nubes')
            .setOrigin(0, 1)
            .setScrollFactor(0.25)

        const colisionable = mapa.createLayer('colisionable', tileset)
        colisionable.setVisible(false)


        mapa.setCollisionByExclusion([-1]);

        const fondo = mapa.createLayer('fondo', tileset)

        /*
        // Código para mostrar colisiones
        const debug = this.add.graphics().setAlpha(0.7)
        colisionable.renderDebug(debug, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243, 243, 48, 255),
            faceColor: new Phaser.Display.Color(40, 39, 37, 255)
        })
        */






        //Se establecen las animaciones (siempre se usa la misma plantilla)
        this.anims.create({
            key: Constantes.JUGADOR.ANIMACION.ESPERAR,
            frames: this.anims.generateFrameNames(Constantes.JUGADOR.ID, {
                start: 1,
                prefix: "sprite", //Prefijo de los sprites
                end: 2
            }),
            frameRate: 1, //frames por segundo
            repeat: -1 //Num repeticiones. -1: Repite siempre. Da igual lo que pongamos porque llamamos a las animaciones constantemente
        });

        this.anims.create({
            key: Constantes.JUGADOR.ANIMACION.CORRER,
            frames: this.anims.generateFrameNames(Constantes.JUGADOR.ID, {
                start: 16,
                prefix: "sprite", //Prefijo de los sprites
                end: 31
            }),
            frameRate: 30, //frames por segundo
            repeat: -1 //Num repeticiones. -1: Repite siempre. Da igual lo que pongamos porque llamamos a las animaciones constantemente
        });

        //En su lugar, se añade el jugador desde el MAPA
        mapa.findObject(Constantes.JUGADOR.ID, (d: any) => {
            this.jugador = new Jugador({
                escena: this,
                x: d.x,
                y: d.y,
                textura: Constantes.JUGADOR.ID
            });
        });



        this.cameras.main.setBounds(0, 0, mapa.widthInPixels, mapa.heightInPixels);
        this.cameras.main.startFollow(this.jugador);

        this.physics.add.collider(this.jugador, colisionable);


    }

    override update() {//Se ejecuta cada x milisegundos
        this.jugador.update();//Se tiene que llamar al update de cada elemento
        console.log("Jugador en posición x:" + this.jugador.x + " y:" + this.jugador.y);

    }



}