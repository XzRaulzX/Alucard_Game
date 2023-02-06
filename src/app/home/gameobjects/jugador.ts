import Constantes from '../constantes';
import Nivel1 from '../escenas/nivel1';


export default class Jugador extends Phaser.Physics.Arcade.Sprite {
    //Control de entrada
    public cursores: Phaser.Types.Input.Keyboard.CursorKeys;
    private teclaEspacio: Phaser.Input.Keyboard.Key;

    private _escena: Nivel1;
    private velocidad: number;
    private _vida: number;
    private _atacado: boolean;
    



    constructor(config: any) { //se le pasa escena para utilizar los objetos que contiene
        super(config.escena, config.x, config.y, config.texture);

        this._escena = config.escena;//Importante: Necesito acceder a los objetos de la escena
        this._escena.physics.world.enable(this);//Activo físicas para este objeto
        this.setCollideWorldBounds(true);//Para que no se salga del mapa
        this._escena.add.existing(this);//Añade objeto a escena
        this.velocidad = 250;//pixels por segundo (aprox)

        //Correcciones de "sprite", offset y tamaño general
        this.body.setSize(20, 50);//Se corrige tamaño de sprite
        this.body.setOffset(0, 0);//Corrige offset de los sprites (en este caso no hay desplazamiento)
        this.scaleX = 0.8;
        this.scaleY = 0.8;

        //Control entrada
        this.cursores = this._escena.input.keyboard.createCursorKeys();
        this.teclaEspacio = this._escena.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this._vida = 100;
        this._atacado = false;

        this.crearAnimacion();
    }

    override update() {
        this.setMovimiento();
        if (this.vida <= 0)
            this.escena.scene.stop();
    }

    public get escena(): Nivel1 {
        return this._escena;
    }
    public set escena(value: Nivel1) {
        this._escena = value;
    }

    public get vida(): number {
        return this._vida;
    }
    public set vida(value: number) {
        this._vida = value;
    }

    public get atacado(): boolean {
        return this._atacado;
    }
    public set atacado(value: boolean) {
        this._atacado = value;
    }

    private setMovimiento(): void {
        if (this.cursores.left.isDown) {
            this.setVelocityX(this.velocidad * -1);
            this.flipX = true;
            this.anims.play(Constantes.JUGADOR.ANIMACION.CORRER, true);
        }
        else if (this.cursores.right.isDown) {
            this.setVelocityX(this.velocidad);
            this.flipX = false;
            this.anims.play(Constantes.JUGADOR.ANIMACION.CORRER, true);
        }
        else { // Si no están activadas izquierda y derecha: reposo
            this.setVelocityX(0);
            this.anims.play(Constantes.JUGADOR.ANIMACION.ESPERAR, true);
        }

        if (this.teclaEspacio.isDown && this.body.blocked.down) {
            this.setVelocityY(this.velocidad * -1.2);
        }
    }

    private crearAnimacion(): void {
        this.anims.create({
            key: Constantes.JUGADOR.ANIMACION.ESPERAR,
            frames: this.anims.generateFrameNames(Constantes.JUGADOR.ID, {
                start: 1,
                prefix: "sprite", //Prefijo de los sprites
                end: 2
            }),
            frameRate: 1, //frames por segundo
        });

        this.anims.create({
            key: Constantes.JUGADOR.ANIMACION.CORRER,
            frames: this.anims.generateFrameNames(Constantes.JUGADOR.ID, {
                start: 16,
                prefix: "sprite", //Prefijo de los sprites
                end: 31
            }),
            frameRate: 30, //frames por segundo
        });
    }






}