class dato {
    constructor() {
        this.con = "";
        this.ver = "";
    }

    static make_con_ver() {
        while (true) {
            const p_dat = new dato();
            p_dat.con = prompt("Ingrese la primera palabra").toLowerCase();
            p_dat.ver = prompt("Ingrese la segunda palabra").toLowerCase();
            if (p_dat.con.length > 25000 || p_dat.ver.length > 25000) {
                alert("Palabra o palabras demasiado grandes");
            } else if (p_dat.con.length < 1 || p_dat.ver.length < 1) {
                alert("Palabra o palabras demasiado cortas");
            } else {
                return p_dat;
            }
        }
    }

    static contieneSoloLetras(str) {
        return /^[a-z]+$/.test(str);
    }

    static organize_con_ver(a) {
        const intercalacion = [];

        for (let i = 0; i < Math.max(a.con.length, a.ver.length); i++) {
            if (i < a.con.length) {
                intercalacion.push(a.con[i]);
            }
            if (i < a.ver.length) {
                intercalacion.push(a.ver[i]);
            }
        }
        const resultado = intercalacion.join('');
        console.log(resultado);
    }
}

let data = dato.make_con_ver();

while (true) {
    const peri = dato.contieneSoloLetras(data.con);
    const zhar = dato.contieneSoloLetras(data.ver);

    if (peri === false || zhar === false) {
        alert("Sus palabras o una de sus palabras no cumple con las características ya que contiene símbolos o espacios");
        data = dato.make_con_ver();
    } else {
        break;
    }
}

dato.organize_con_ver(data);
