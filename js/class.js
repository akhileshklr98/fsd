class Vehicle{
    constructor(name,maker,engine){
        this.name=name;
        this.maker=maker;
        this.engine=engine;
    }
}

var myCar = new Vehicle('Maruthi 800','Suzuki','800cc');
console.log(myCar.name);