interface CocheBase{
    getModelo():string;
    getVelocidad():number;
}

class Coche implements CocheBase{
    
    public color:string;
    public modelo:string;
    public velocidad:number;

    constructor(modelo:any = null){
        this.color = "BLANCO";
        this.velocidad=0;
        if(modelo == null){
            this.modelo="BMW Generico";
        }
        else{
            this.modelo=modelo;
        }
        
    }

    public getColor(){
        return this.color;
    }
    public setColor(color:string){
        this.color=color;
    }

    public getModelo(){
        return this.modelo;
    }
    public setModelo(modelo:string){
        this.modelo=modelo;
    }

    public getVelocidad():number{
        return this.velocidad;
    }

    public acelerar(){
        this.velocidad++;
    }

    public frenar(){
        this.velocidad--;
    }

}

var coche = new Coche();
coche.setColor("AZUL");
coche.acelerar();

console.log("Color del cochecin: "+coche.getColor())
console.log("Velocidad: "+coche.getVelocidad())