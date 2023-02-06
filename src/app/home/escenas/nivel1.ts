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
    private skeleton2!: Enemigo;
    aEnemigos !: Array<Enemigo>;

    private enemigos!: Phaser.Physics.Arcade.Group;

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
        
        this.skeleton2 = new Enemigo({
            escena: this,
            x: 900,
            y: 2070,
            textura: Constantes.JUGADOR.ID
        });

        this.enemigos = this.physics.add.group({
            runChildUpdate: true
        });

        //this.anyadirEnemigos();


        // Configura la cámara
        this.setCamara();


        this.colisionable.setVisible(false);
        this.physics.add.collider(this.jugador, this.colisionable);
        //this.physics.add.collider(this.enemigos, this.colisionable);
        this.physics.add.collider(this.skeleton2, this.colisionable);
       // this.physics.add.overlap();



    }

    override update() {//Se ejecuta cada x milisegundos
        this.jugador.update();//Se tiene que llamar al update de cada elemento
        this.skeleton2.update(this.skeleton2.x - this.jugador.x);


    }

    private anyadirJugador(): void {
        this.mapa.findObject(Constantes.JUGADOR.ID, (d: any) => {
            this.jugador = new Jugador({
                escena: this,
                x: d.x,
                y: d.y,
                textura: Constantes.JUGADOR.ID
            });

        });

    }

    private anyadirEnemigos(): void {
        let i: number = 1;
        const enemigos = this.mapa.getObjectLayer('enemigos').objects as any[];


        enemigos.forEach((enemigo) => {
            if (enemigo.name === 'skeleton') {
                this.enemigos.add(
                    this.skeleton = new Enemigo({
                        escena: this,
                        x: enemigo.x,
                        y: enemigo.y,
                        textura: Constantes.SKELETON.ID
                    })
                );
                console.log("skeleton " + 1 + ": " + enemigo.name);
            }

        });
    }

    private setCamara(): void {
        this.cameras.main.setZoom(1.5)
        this.cameras.main.setBounds(0, 0, this.mapa.widthInPixels, this.mapa.heightInPixels);
        this.cameras.main.startFollow(this.jugador);
    }

}