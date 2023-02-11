import { LoadChildrenCallback } from "@angular/router";
import { Console } from "console";
import { map } from "rxjs";
import Constantes from "../constantes";
import { Enemigo } from "../gameobjects/enemigo";
import Jugador from '../gameobjects/jugador';
import Miestilo from "../textos";


export default class Nivel1 extends Phaser.Scene {

    private ancho!: integer;
    private alto!: integer;

    private mapa!: Phaser.Tilemaps.Tilemap;
    private tileset !: Phaser.Tilemaps.Tileset;
    private fondo !: Phaser.Tilemaps.TilemapLayer;
    private colisionable !: Phaser.Tilemaps.TilemapLayer;
    private nubes !: any;

    private jugador!: Jugador;
    private skeleton!: Enemigo;
    //private skeleton2!: Enemigo;
    private aEnemigos !: Array<Enemigo>;

    constructor() {
        super(Constantes.ESCENAS.NIVEL1);
    }

    preload() {
    }

    create() //Crea escena 
    {
        this.ancho = this.sys.game.canvas.width;
        this.alto = this.sys.game.canvas.height;

        this.mapa = this.make.tilemap({ key: 'mitilemapjson', tileWidth: 16, tileHeight: 16 });
        this.physics.world.bounds.setTo(0, 0, this.mapa.widthInPixels, this.mapa.heightInPixels);
        this.tileset = this.mapa.addTilesetImage('mapa', 'tilesetnivel1');

        this.colisionable = this.mapa.createLayer('colisionable', this.tileset);

        this.nubes = this.add.image(0, this.ancho, 'nubes')
            .setScrollFactor(0.25)
            .setOrigin(0, 1);

        this.mapa.setCollisionByExclusion([-1]);
        this.fondo = this.mapa.createLayer('fondo', this.tileset);

        // Añade al objetos

        this.anyadirJugador();

        /*this.skeleton2 = new Enemigo({
            escena: this,
            x: 900,
            y: 2070,
        });*/

        this.aEnemigos = Array<Enemigo>();

        // this.aEnemigos = [new Enemigo({ escena: this, x: 700, y: 2070, texture: Constantes.SKELETON.ID })];
        this.aEnemigos = [new Enemigo({ escena: this, x: 700, y: 2070, texture: Constantes.SKELETON.ID }),
        new Enemigo({ escena: this, x: 750, y: 2070, texture: Constantes.SKELETON.ID }),
        new Enemigo({ escena: this, x: 850, y: 2070, texture: Constantes.SKELETON.ID }),
        new Enemigo({ escena: this, x: 800, y: 2070, texture: Constantes.SKELETON.ID }),
        new Enemigo({ escena: this, x: 900, y: 2070, texture: Constantes.SKELETON.ID }),
        new Enemigo({ escena: this, x: 950, y: 2070, texture: Constantes.SKELETON.ID }),
        new Enemigo({ escena: this, x: 1000, y: 2070, texture: Constantes.SKELETON.ID }),
        new Enemigo({ escena: this, x: 1050, y: 2070, texture: Constantes.SKELETON.ID }),
        new Enemigo({ escena: this, x: 2000, y: 2070, texture: Constantes.SKELETON.ID })]


        this.anyadirEnemigos();




        // Configura la cámara
        this.setCamara();


        this.colisionable.setVisible(false);
        this.physics.add.collider(this.jugador, this.colisionable);
        //this.physics.add.collider(this.skeleton2, this.colisionable);

        this.aEnemigos.forEach((enemigo) => {
            this.physics.add.collider(enemigo, this.colisionable);
            this.physics.add.overlap(this.jugador, enemigo, this.ataqueEnemigo as ArcadePhysicsCallback, undefined, this);
        });



        this.aEnemigos.forEach((enemigo) => {

        });


        //this.physics.add.overlap(this.jugador, this.aEnemigos, this.ataqueEnemigo as ArcadePhysicsCallback, undefined, this,);

        console.log(this.jugador.texture.getFrameNames());

    }

    override update() {//Se ejecuta cada x milisegundos
        this.jugador.update();//Se tiene que llamar al update de cada elemento




        //this.skeleton2.update(this.skeleton2.x - this.jugador.x);

        this.aEnemigos.forEach((enemigo) => {
            enemigo.update(enemigo.x - this.jugador.x);
        });





    }

    private anyadirJugador(): void {
        this.mapa.findObject(Constantes.JUGADOR.ID, (d: any) => {
            this.jugador = new Jugador({
                escena: this,
                x: d.x,
                y: d.y,
                textura: 'df'
            });

        });
        this.jugador.texture;
    }

    private anyadirEnemigos(): void {

    }

    private setCamara(): void {
        this.cameras.main.setZoom(1.5)
        this.cameras.main.setBounds(0, 0, this.mapa.widthInPixels, this.mapa.heightInPixels);
        this.cameras.main.startFollow(this.jugador);
    }

    private ataqueEnemigo(enemigo: any): void {
        if (!enemigo._atacado && (enemigo.anims.getFrameName() == 'sprite1' || enemigo.anims.getFrameName() == 'sprite2')) {
            this.jugador.vida -= 20;
            console.log(this.jugador.vida);
            enemigo._atacado = true;
            this.jugador.tint = 0xff0000;


            enemigo.escena.time.addEvent({
                delay: 500,
                callback: () => {
                    enemigo._atacado = false;
                    this.jugador.tint = 0xffffff;
                }
            });
        }



    }

}