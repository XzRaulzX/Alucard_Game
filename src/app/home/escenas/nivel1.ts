import Constantes from "../constantes";
import Jugador from '../gameobjects/jugador';
import Miestilo from "../textos";


export default class Nivel1 extends Phaser.Scene {

    public jugador!: Jugador;
    public power_1!: Jugador;
    public power_2!: Jugador;
    public power_3!: Jugador;
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

        //Cargar Tilemap
  
        //FONDO: IMPORTANTE - SE AÑADEN LAS CAPAS EN ORDEN: fondo, mapa, jugador

        //Se añade el mapa

        //Se añaden las capas
  
        //Se añade el jugador
        this.jugador = new Jugador({
            escena: this,
            x: this.ancho/2,
            y: this.alto/2,
            textura: Constantes.JUGADOR.ID
        });

        this.power_1 = new Jugador({
            escena: this,
            x: this.ancho/2,
            y: this.alto/2,
            textura: Constantes.FRANKY.ID
        });

        this.power_2 = new Jugador({
            escena: this,
            x: this.ancho/2,
            y: this.alto/2,
            textura: Constantes.CANCERBERO.ID
        });

        this.power_3 = new Jugador({
            escena: this,
            x: this.ancho/2,
            y: this.alto/2,
            textura: Constantes.DEMONIO.ID
        });

        //Se establecen las animaciones (siempre se usa la misma plantilla)
         this.anims.create({
            key: Constantes.JUGADOR.ANIMACION.ESPERAR,
            frames: this.anims.generateFrameNames(Constantes.JUGADOR.ID, {
                start: 4,
                prefix: "sprite", //Prefijo de los sprites
                end: 6
            }),
            frameRate: 1, //frames por segundo
            repeat: 2 //Num repeticiones. -1: Repite siempre. Da igual lo que pongamos porque llamamos a las animaciones constantemente
        });





        



        //-------------------------------------
        // FRANKY EL CORREDOR
        // this.anims.create({
        //     key: Constantes.FRANKY.ANIMACION.CORRER,
        //     frames: this.anims.generateFrameNames(Constantes.FRANKY.ID, {
        //         start: 14,
        //         prefix: "sprite", //Prefijo de los sprites
        //         end: 16
        //     }),
        //     frameRate: 5, //frames por segundo
        //     repeat: -1 //Num repeticiones. -1: Repite siempre. Da igual lo que pongamos porque llamamos a las animaciones constantemente
        // });

        // Franky SALTADOR
        // this.anims.create({
        //     key: Constantes.FRANKY.ANIMACION.SALTAR,
        //     frames: this.anims.generateFrameNames(Constantes.FRANKY.ID, {
        //         start: 4,
        //         prefix: "sprite", //Prefijo de los sprites
        //         end: 4
        //     }),
        //     frameRate: 1, //frames por segundo
        //     repeat: 1 //Num repeticiones. -1: Repite siempre. Da igual lo que pongamos porque llamamos a las animaciones constantemente
        // });


        // FRANKY EL PANA ESPERADOR
        // this.anims.create({
        //     key: Constantes.FRANKY.ANIMACION.ESPERAR,
        //     frames: this.anims.generateFrameNames(Constantes.FRANKY.ID, {
        //         start: 4,
        //         prefix: "sprite", //Prefijo de los sprites
        //         end: 5
        //     }),
        //     frameRate: 1, //frames por segundo
        //     repeat: 1 //Num repeticiones. -1: Repite siempre. Da igual lo que pongamos porque llamamos a las animaciones constantemente
        // });

        // Franky maden
        // this.anims.create({
        //     key: Constantes.FRANKY.ANIMACION.GOLPEAR,
        //     frames: this.anims.generateFrameNames(Constantes.FRANKY.ID, {
        //         start: 24,
        //         prefix: "sprite", //Prefijo de los sprites
        //         end: 18
        //     }),
        //     frameRate: 7, //frames por segundo
        //     repeat: -1 //Num repeticiones. -1: Repite siempre. Da igual lo que pongamos porque llamamos a las animaciones constantemente
        // });
        // //-------------------------------------
        //  //CANCERBERO EL CORREDOR
        //  this.anims.create({
        //     key: Constantes.CANCERBERO.ANIMACION.CORRER,
        //     frames: this.anims.generateFrameNames(Constantes.CANCERBERO.ID, {
        //         start: 14,
        //         prefix: "sprite", //Prefijo de los sprites
        //         end: 18
        //     }),
        //     frameRate: 5, //frames por segundo
        //     repeat: -1 //Num repeticiones. -1: Repite siempre. Da igual lo que pongamos porque llamamos a las animaciones constantemente
        // });

        // //CANCERBERO SALTADOR
        // this.anims.create({
        //     key: Constantes.CANCERBERO.ANIMACION.SALTAR,
        //     frames: this.anims.generateFrameNames(Constantes.CANCERBERO.ID, {
        //         start: 37,
        //         prefix: "sprite", //Prefijo de los sprites
        //         end: 41
        //     }),
        //     frameRate: 4, //frames por segundo
        //     repeat: -1 //Num repeticiones. -1: Repite siempre. Da igual lo que pongamos porque llamamos a las animaciones constantemente
        // });


        // //CANCERBERO EL PANA ESPERADOR
        // this.anims.create({
        //     key: Constantes.CANCERBERO.ANIMACION.ESPERAR,
        //     frames: this.anims.generateFrameNames(Constantes.CANCERBERO.ID, {
        //         start: 7,
        //         prefix: "sprite", //Prefijo de los sprites
        //         end: 9
        //     }),
        //     frameRate: 3, //frames por segundo
        //     repeat: 0 //Num repeticiones. -1: Repite siempre. Da igual lo que pongamos porque llamamos a las animaciones constantemente
        // });

        // //CANCERBERO maden
        // this.anims.create({
        //     key: Constantes.CANCERBERO.ANIMACION.GOLPEAR,
        //     frames: this.anims.generateFrameNames(Constantes.CANCERBERO.ID, {
        //         start: 57,
        //         prefix: "sprite", //Prefijo de los sprites
        //         end: 60
        //     }),
        //     frameRate: 5, //frames por segundo
        //     repeat: -1 //Num repeticiones. -1: Repite siempre. Da igual lo que pongamos porque llamamos a las animaciones constantemente
        // });

        //-------------------------------------
        //DEMONIO EL CORREDOR
         this.anims.create({
            key: Constantes.DEMONIO.ANIMACION.CORRER,
            frames: this.anims.generateFrameNames(Constantes.DEMONIO.ID, {
                start: 1,
                prefix: "sprite", //Prefijo de los sprites
                end: 4
            }),
            frameRate: 5, //frames por segundo
            repeat: -1 //Num repeticiones. -1: Repite siempre. Da igual lo que pongamos porque llamamos a las animaciones constantemente
        });

        //DEMONIO SALTADOR
        this.anims.create({
            key: Constantes.DEMONIO.ANIMACION.SALTAR,
            frames: this.anims.generateFrameNames(Constantes.DEMONIO.ID, {
                start: 12,
                prefix: "sprite", //Prefijo de los sprites
                end: 19
            }),
            frameRate: 4, //frames por segundo
            repeat: 0 //Num repeticiones. -1: Repite siempre. Da igual lo que pongamos porque llamamos a las animaciones constantemente
        });


        // //DEMONIO EL PANA ESPERADOR
        // this.anims.create({
        //     key: Constantes.DEMONIO.ANIMACION.ESPERAR,
        //     frames: this.anims.generateFrameNames(Constantes.DEMONIO.ID, {
        //         start: 21,
        //         prefix: "sprite", //Prefijo de los sprites
        //         end: 22
        //     }),
        //     frameRate: 2, //frames por segundo
        //     repeat: 0 //Num repeticiones. -1: Repite siempre. Da igual lo que pongamos porque llamamos a las animaciones constantemente
        // });

        //DEMONIO maden
        this.anims.create({
            key: Constantes.DEMONIO.ANIMACION.GOLPEAR,
            frames: this.anims.generateFrameNames(Constantes.DEMONIO.ID, {
                start: 27,
                prefix: "sprite", //Prefijo de los sprites
                end: 32
            }),
            frameRate: 5, //frames por segundo
            repeat: -1 //Num repeticiones. -1: Repite siempre. Da igual lo que pongamos porque llamamos a las animaciones constantemente
        });







        //-------------------------------------
        this.power_1.setGravity(0,0); //Gravedad(X,Y). Se puede configurar la gravedad por objeto,
        //pero la gravedad general establecida en la configuración prevalece  

        //Se pueden extraer sprites del ATLAS
        const sprite3 = this.add.sprite(200, 200, Constantes.DEMONIO.ID, 'sprite4');
        const sprite2 = this.add.sprite(200, 200, Constantes.CANCERBERO.ID, 'sprite4');
        const sprite1 = this.add.sprite(200, 200, Constantes.FRANKY.ID, 'sprite4');
        const sprite = this.add.sprite(200, 200, Constantes.JUGADOR.ID, 'sprite4');//Muestra sprite 4 del ATLAS
        //sprite jugador
        sprite.setInteractive();
        sprite.anims.play(Constantes.JUGADOR.ANIMACION.ESPERAR, true);//Animará una única vez ya que repeat=0 en la configuración
        sprite.scaleX = 2;
        sprite.scaleY = 2;
        //sprite franky
        sprite1.setInteractive();
        sprite1.anims.play(Constantes.FRANKY.ANIMACION.ESPERAR, true);//Animará una única vez ya que repeat=0 en la configuración
        sprite1.scaleX = 2;
        sprite1.scaleY = 2;
        //sprite cancerbero
        sprite2.setInteractive();
        sprite2.anims.play(Constantes.CANCERBERO.ANIMACION.ESPERAR, true);//Animará una única vez ya que repeat=0 en la configuración
        sprite2.scaleX = 2;
        sprite2.scaleY = 2;
        
        //sprite demonio
        sprite3.setInteractive();
        sprite3.anims.play(Constantes.DEMONIO.ANIMACION.ESPERAR, true);//Animará una única vez ya que repeat=0 en la configuración
        sprite3.scaleX = 2;
        sprite3.scaleY = 2;

        //las cámaras siguen al jugador
     
        //FÍSICAS OBJETOS
        //Se añade la física del jugador con el nivel

        console.log("Escena Nivel1 Creada");
        this.add.text(0, 0, 'Escena Nivel1 Creada', Miestilo);

        //Vuelta al menú principal
        this.finJuego(sprite);
    }

    override update() {//Se ejecuta cada x milisegundos
        this.jugador.update();//Se tiene que llamar al update de cada elemento
        //this.power_3.update();
        //this.power_2.update();
        //this.power_1.update();
        console.log("Jugador en posición x:" + this.jugador.x + " y:" + this.jugador.y);

    }

    finJuego(letrerofin: Phaser.GameObjects.Sprite) {
        letrerofin.on('pointerdown', () => {
            this.vuelveMenu();
        });
    }

    vuelveMenu() {
        this.scene.stop(Constantes.ESCENAS.NIVEL1);
        this.scene.start(Constantes.ESCENAS.MENU);
    }


}