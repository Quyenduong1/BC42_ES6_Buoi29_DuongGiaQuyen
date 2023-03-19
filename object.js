class Person {
    constructor(id,name,email,address){
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
    }
    
}


class Student extends Person {
    constructor(id,name,email,address,type,toan,ly,hoa){
        super(id,name,email,address);
        this.type = type;
        this.toan = toan;
        this.ly = ly;
        this.hoa = hoa;
    }

    CalcSubject() {
        return (this.toan + this.ly + this.hoa)/3;
    }
}

class Employee extends Person {
    constructor(id,name,email,address,Timework,LuongtoDate,Luong){
        super(id,name,email,address);
        this.Timework = Timework;
        this.LuongtoDate = LuongtoDate;
        this.Luong = Luong;
    }

    
}

class Customer extends Person {
    constructor(id,name,email,address,company,price,danhgia){
        super(id,name,email,address);
        this.company = company;
        this.price = price;
        this.danhgia = danhgia;
    }
}