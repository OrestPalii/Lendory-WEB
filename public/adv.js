class Advertisement{
    constructor(area, currency, description, floor, location, name, numberOfRooms, price, volunteering, crname, phoneNumber, imgarray=[]) {
       this.area = area;
       this.currency = currency;
       this.description = description;
       this.floor = floor;
       this.location = location;
       this.name = name;
       this.numberOfRooms = numberOfRooms;
       this.price = price;
       this.volunteering = volunteering; 
       this.crname = crname; 
       this.phoneNumber = phoneNumber; 
       this.imgarray = imgarray;
   }
   setarea(newArea){
    this.area=newArea;
    }

    getarea(){
        return this.area;
    }

    setcurrency(newcurrency){
        this.currency=newcurrency;
    }

    getcurrency(){
        return this.currency;
    }

    setdescription(newdescription){
        this.description=newdescription;
    }

    getdescription(){
        return this.description;
    }

    setfloor(newfloor){
        this.floor=newfloor;
    }

    getfloor(){
        return this.floor;
    }

    setlocation(newlocation){
        this.location=newlocation;
    }

    getlocation(){
        return this.location;
    }

    setname(newname){
        this.name=newname;
    }

    getname(){
        return this.name;
    }

    setnumberOfRooms(newnumberOfRooms){
        this.numberOfRooms=newnumberOfRooms;
    }

    getnumberOfRooms(){
        return this.numberOfRooms;
    }

    setprice(newprice){
        this.price=newprice;
    }

    getprice(){
        return this.price;
    }

    setvolunteering(newvolunteering){
        this.volunteering=newvolunteering;
    }

    getvolunteering(){
        return this.volunteering;
    }

    setcrname(newcrname){
        this.crname=newcrname;
    }

    getcrname(){
        return this.crname;
    }

    setphoneNumber(newphoneNumber){
        this.phoneNumber=newphoneNumber;
    }

    getphoneNumber(){
        return this.phoneNumber;
    }

    Alertfun(){
        alert("Я даун");
    }

}