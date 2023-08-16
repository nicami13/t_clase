class dato {
    constructor() {
        this.con = " ";
        this.ver = " ";
    }

    static make_con_ver() {
        const p_dat = new dato();
        p_dat.con = parseInt(prompt("Ingrese la primera palabra"));
        p_dat.ver = parseInt(prompt("Ingrese la segunda palabra"));
        return p_dat;
    }

    static organize_con_ver(a) {
        for (let i = 0; i < 2500; i++) {
            console.log(a.con);
        }
        for (let i = 0; i < 2500; i++) {
            console.log(a.ver);
        }
    }
}

const data = dato.make_con_ver();
dato.organize_con_ver(data);

