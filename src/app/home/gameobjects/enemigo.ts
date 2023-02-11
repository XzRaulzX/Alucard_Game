import { constants } from 'buffer';
import { repeat } from 'rxjs';
import Constantes from '../constantes';
import Nivel1 from '../escenas/nivel1';
import Jugador from './jugador';

export class Enemigo extends Phaser.Physics.Arcade.Sprite {

    fisica !: Phaser.Physics.Arcade.ArcadePhysics;

    /*readonly IZQUIERDA = 'izquierda';
    readonly DERECHA = 'derecha';*/

    private escena: Nivel1;//para que coja las propiedades públicas
    private velocidad: number;
    private _danyo: number;
    private _distanciaAjugador: number;
    private _atacando: boolean;




    constructor(config: any) {
        super(config.escena, config.x, config.y, config.texture);

        this.escena = config.escena;
        this.escena.physics.world.enable(this);//Activo físicas para este objeto
        this.setCollideWorldBounds(true);//Para que no se salga del mapa
        this.escena.add.existing(this);//Añade objeto a escena
        this.velocidad = (100);

        this.body.setSize(25, 40);//Se corrige tamaño de sprite
        this.body.setOffset(0, 0);//Corrige offset de los sprites (en este caso no hay desplazamiento)
        this.scaleX = 0.9;
        this.scaleY = 0.9;
        this._atacando = false;
        this._danyo = 20;

        this.crearAnimacion();
        this._distanciaAjugador = 50;
    }

    override update(distanciaAJugador: number) {
        this._distanciaAjugador = distanciaAJugador;
        if (this.body.velocity.x === 0)
            this.setMovimiento(Constantes.DIRECCION.IZQUIERDA);
        else if (this.body.blocked.left)
            this.setMovimiento(Constantes.DIRECCION.DERECHA);
        else if (this.body.blocked.right) {
            this.setMovimiento(Constantes.DIRECCION.IZQUIERDA);
        }

        if (distanciaAJugador < 80 && distanciaAJugador > -80) {
            this.anims.play(Constantes.SKELETON.ANIMACION.ATACAR, true);
            if (distanciaAJugador < 80 && distanciaAJugador > 50)
                this.setMovimiento(Constantes.DIRECCION.IZQUIERDA);
            else if (distanciaAJugador > -80 && distanciaAJugador < -50)
                this.setMovimiento(Constantes.DIRECCION.DERECHA);
        } else {
            this.anims.play(Constantes.SKELETON.ANIMACION.CORRER, true);
        }

    }


    public get distanciaAjugador(): number {
        return this._distanciaAjugador;
    }
    public set distanciaAjugador(value: number) {
        this._distanciaAjugador = value;
    }

    public get atacando(): boolean {
        return this._atacando;
    }
    public set atacando(value: boolean) {
        this._atacando = value;
    }

    public get danyo(): number {
        return this._danyo;
    }
    public set danyo(value: number) {
        this._danyo = value;
    }

    public atacarJugador(jugador: any): void {
        console.log(this.anims.getFrameName());
        
        /*
        if (this.anims.getFrameName() === "sp14" || this.anims.getFrameName() === "sp15")
            console.log("Atacando");*/
            
    }


    setMovimiento(direccion: string) {

        if (direccion === Constantes.DIRECCION.IZQUIERDA) {
            this.setVelocityX(this.velocidad * -1);
            this.flipX = true;
        } else if (direccion === Constantes.DIRECCION.DERECHA) {
            this.setVelocityX(this.velocidad);
            this.flipX = false;
        }
    }

    private crearAnimacion(): void {
        this.anims.create({
            key: Constantes.SKELETON.ANIMACION.CORRER,
            frames: this.anims.generateFrameNames(Constantes.SKELETON.ID, {
                start: 4,
                prefix: "sp",
                end: 9
            }),
            frameRate: 10
        });
        this.anims.create({
            key: Constantes.SKELETON.ANIMACION.ESPERAR,
            frames: this.anims.generateFrameNames(Constantes.SKELETON.ID, {
                start: 4,
                prefix: "sp",
                end: 5
            }),
            frameRate: 2
        });

        this.anims.create({
            key: Constantes.SKELETON.ANIMACION.ATACAR,
            frames: this.anims.generateFrameNames(Constantes.SKELETON.ID, {
                start: 10,
                prefix: "sp",
                end: 15
            }),
            frameRate: 10
        });
    }

}