class Car{
    name:string
    year:number
    owner:string
    isOnRoad:boolean
    constructor(name:string,owner:string,year:number,isOnRoad:boolean){
        this.name = name
        this.owner = owner
        this.year = year
        this.isOnRoad = isOnRoad
    }

    makeNoise():string{
        return `${this.name} makes vrooom vroooooom`
    }

    getYear():number{
        return this.year
    }
} 

export default Car