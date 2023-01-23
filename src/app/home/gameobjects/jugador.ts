import Constantes from '../constantes';
import Nivel1 from '../escenas/nivel1N';


export default class Jugador extends Phaser.Physics.Arcade.Sprite {
    //Control de entrada
    public cursores: Phaser.Types.Input.Keyboard.CursorKeys;
    private teclaEspacio: Phaser.Input.Keyboard.Key;

    private escena: Nivel1;//para que coja las propiedades públicas
    private velocidad: number;

    constructor(config: any) { //se le pasa escena para utilizar los objetos que contiene
        super(config.escena, config.x, config.y, config.texture);

        this.escena = config.escena;//Importante: Necesito acceder a los objetos de la escena
        this.escena.physics.world.enable(this);//Activo físicas para este objeto
        this.setCollideWorldBounds(true);//Para que no se salga del mapa
        this.escena.add.existing(this);//Añade objeto a escena
        this.velocidad = 300;//pixels por segundo (aprox)

        //Correcciones de "sprite", offset y tamaño general
        this.body.setSize(20, 50);//Se corrige tamaño de sprite
        this.body.setOffset(0, 0);//Corrige offset de los sprites (en este caso no hay desplazamiento)
        this.scaleX = 2;
        this.scaleY = 2;

        //Control entrada
        this.cursores = this.escena.input.keyboard.createCursorKeys();
        this.teclaEspacio = this.escena.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    override update() {
        if (this.cursores.left.isDown) { 
            console.log("Izquierda...");
            this.setVelocityX(this.velocidad * -1);
            this.flipX = true;
            this.anims.play(Constantes.JUGADOR.ANIMACION.CORRER, true);
        }
        else if (this.cursores.right.isDown) {
            console.log("Derecha...");
            this.setVelocityX(this.velocidad);
            this.flipX = false;
            this.anims.play(Constantes.JUGADOR.ANIMACION.CORRER, true);
        }
        else { // Si no están activadas izquierda y derecha: reposo
            this.setVelocityX(0);
            this.flipX = true;
            this.anims.play(Constantes.JUGADOR.ANIMACION.ESPERAR, true);
        }

        if (this.teclaEspacio.isDown && this.body.blocked.down) {
            console.log("Salto...");
            this.setVelocityY(this.velocidad * -1);
        }
    }





}