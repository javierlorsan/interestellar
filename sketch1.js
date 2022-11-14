class Random {
    constructor(e) {
        this.seed = e
    }
    random_dec() {
        return this.seed ^= this.seed << 13, this.seed ^= this.seed >> 17, this.seed ^= this.seed << 5, (this.seed < 0 ? 1 + ~this.seed : this.seed) % 1e3 / 1e3
    }
    random_num(e, r) {
        return e + (r - e) * this.random_dec()
    }
    random_int(e, r) {
        return Math.floor(this.random_num(e, r + 1))
    }
    random_choice(e) {
        return e[Math.floor(this.random_num(0, .99 * e.length))]
    }
}
let paleta = [["#03045e", "#023e8a", "#0077b6", "#0096c7", "#00b4d8", "#48cae4", "#90e0ef", "#ade8f4", "#caf0f8", "#D9F1F6"],
["#03071e", "#370617", "#6a040f", "#9d0208", "#d00000", "#dc2f02", "#e85d04", "#f48c06", "#faa307", "#F5B034"],
["#ffba08", "#f8f9fa", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#6c757d", "#495057", "#343a40", "#212529"],
["#001219", "#005f73", "#0a9396", "#94d2bd", "#e9d8a6", "#ee9b00", "#ca6702", "#bb3e03", "#ae2012", "#9b2226"],
["#582f0e", "#7f4f24", "#936639", "#a68a64", "#b6ad90", "#c2c5aa", "#a4ac86", "#656d4a", "#414833", "#333d29"],
["#10002b", "#240046", "#3c096c", "#5a189a", "#7b2cbf", "#9d4edd", "#c77dff", "#e0aaff", "#E3B9FB", "#D9C5E5"],
["#590d22", "#800f2f", "#a4133c", "#c9184a", "#ff4d6d", "#ff758f", "#ff8fa3", "#ffb3c1", "#ffccd5", "#fff0f3"],
["#ffedd8", "#f3d5b5", "#e7bc91", "#d4a276", "#bc8a5f", "#a47148", "#8b5e34", "#6f4518", "#603808", "#583101"],
["#007f5f", "#2b9348", "#55a630", "#80b918", "#aacc00", "#bfd200", "#d4d700", "#dddf00", "#eeef20", "#ffff3f"],
["#e8a598", "#ffb5a7", "#fec5bb", "#fcd5ce", "#fae1dd", "#f8edeb", "#f9e5d8", "#f9dcc4", "#fcd2af", "#fec89a"],
["#ff0a54", "#ff477e", "#ff5c8a", "#ff7096", "#ff85a1", "#ff99ac", "#fbb1bd", "#f9bec7", "#f7cad0", "#fae0e4"],
["#ff7b00", "#ff8800", "#ff9500", "#ffa200", "#ffaa00", "#ffb700", "#ffc300", "#ffd000", "#ffdd00", "#ffea00"],
["#d8f3dc", "#b7e4c7", "#95d5b2", "#74c69d", "#52b788", "#40916c", "#2d6a4f", "#0C6A40", "#5A9077", "#5FD49D"],
["#ff6d00", "#ff7900", "#ff8500", "#ff9100", "#ff9e00", "#240046", "#3c096c", "#5a189a", "#7b2cbf", "#9d4edd"],
["#99e2b4", "#88d4ab", "#78c6a3", "#67b99a", "#56ab91", "#469d89", "#358f80", "#248277", "#14746f", "#036666"],
["#757bc8", "#8187dc", "#8e94f2", "#9fa0ff", "#ada7ff", "#bbadff", "#cbb2fe", "#dab6fc", "#ddbdfc", "#e0c3fc"],
["#7A5D41", "#C4B4A8", "#59ADCC", "#F9A50B", "#DDE3E1", "#A75506", "#2C5838", "#371A0A", "#739384", "#130C0B"],
["#105F85", "#2C5838", "#7F7168", "#371A0A", "#F9A50B", "#A75506", "#59ADCC", "#C6A076", "#739384", "#89520E"],
["#576A7C", "#16141A", "#553920", "#82624C", "#B8B2AE", "#774B24", "#ECEDEA", "#BFC4CC", "#DCD8D1", "#8AAFC7"],
["#8AAFC7", "#BFC4CC", "#A09083", "#774B24", "#585150", "#D1CAC4", "#DCD8D1", "#82624C", "#D8DBE1", "#8198A5"],
["#8AAFC7", "#553920", "#A09083", "#585150", "#16141A", "#82624C", "#BFC4CC", "#493D3B", "#576A7C", "#100908"],
["#AD666A", "#A28471", "#CC8F75", "#4B4F51", "#3F3236", "#48403D", "#CE9292", "#70625D", "#191312", "#A89491"],
["#2A272C", "#E6C2C0", "#CC8F75", "#E1A69F", "#48403D", "#A28471", "#191312", "#CCC3BD", "#A89491", "#432C24"],
["#CCC3BD", "#EFE6E2", "#C5B09F", "#3F3236", "#2A272C", "#A89491", "#E1A69F", "#432C24", "#AD666A", "#191312"],
["#64757E", "#A48151", "#E4EDF2", "#090707", "#968A7D", "#0A1929", "#D2A979", "#1D1A11", "#3E3120", "#000410"],
["#968A7D", "#1D1A11", "#00132A", "#A48151", "#9DB2BD", "#E4EDF2", "#3E3120", "#CACCCD", "#000410", "#5C5A52"],
["#A48151", "#103347", "#5C5A52", "#3E3120", "#D2A979", "#968A7D", "#00132A", "#266070", "#090707", "#D79D54"],
["#DF4E0A", "#B21704", "#EEA010", "#BD610A", "#303B52", "#B23E08", "#5E1F06", "#537C0B", "#A0663E", "#6FAD9E"],
["#F6BA11", "#E39D4B", "#9F630C", "#B21704", "#6FAD9E", "#F1C55D", "#BD610A", "#303B52", "#C37D0E", "#E5870E"],
["#EEA010", "#DF4E0A", "#B21704", "#537C0B", "#F4E5C7", "#F1C55D", "#B69145", "#E39D4B", "#EED198", "#6FAD9E"],
["#10AC4B", "#E2BCB1", "#53A408", "#B2C12B", "#EBDEA3", "#20C282", "#222124", "#C58C2D", "#274FAA", "#0B682D"],
["#222124", "#E7C02C", "#4F2A9A", "#EBDEA3", "#4C3033", "#B2C12B", "#E2B07F", "#0B682D", "#54A243", "#274FAA"],
["#A6B996", "#4C3033", "#E7C02C", "#0B682D", "#8562CA", "#97F209", "#F6F4F2", "#8F7791", "#B2C12B", "#EBDEA3"],
["#9b5de5", "#f15bb5", "#fee440", "#00bbf9", "#00f5d4", "#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"],
["#FA053F", "#FEB200", "#03FDBC", "#04BEFB", "#06617F", "#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"],
["#C2C8D4", "#2b9348", "#BF6550", "#80b918", "#8C32CA", "#C61D34", "#d4d700", "#580D14", "#eeef20", "#C70A27"],
["#54478c", "#2c699a", "#048ba8", "#0db39e", "#16db93", "#83e377", "#b9e769", "#efea5a", "#f1c453", "#f29e4c"]];
let shg = [0.1, 10.2625, 26.17994, 0.6, 10.244999999999921, 10.052999999999976, 10.261999999999912, 10.262999999999911, -10.45, 10.755555, 11.204999999999977, 11.979999999999995, 15, 16.419999999999973, 16.6, 16.8, -180, 2.3, 2.4, 25.247, 33.259000000000064, -7.35551, -7.35553, 8.7, -8.7];
let shm = [0.7, 1.1, 1.6, 17.75004, 1.8, 30.26399999999995, 10.420999999999824, 11.461999999999835, 16.7, 17.75000000000018, 18.7, 18.710000000000097, 2.1, 2.2, 27.228999999999854, 29.30399999999944, 29.31399999999944, 32.078999999999645, 33.56400000000022, -5.655, 6.9, 7.4, -7.4, 8.4, -8.4, -9.351, -9.352, -9.355];
let shmg = [10.082975, 26.179999999999435, 0.9, 11.20497, 8.3, 10, 10.00859999999998, 10.08299999999996, 10.087999999999957, 10.22899999999993, 11.519999999999802, 13.919999999999954, 14.9, 2.5, 2.6, 25.215, 25.219, 26.528999999999993, 28.818999999999537, -3.3, 30.36899999999993, 34.024000000000456];
let shp = [18.570000000000075,0.2, 11.3669, 1.2, 30.2639, 1.3, -1.3, 10.471999999999795, 11.366999999999887, 11.39699999999987, 11.9, 12.559999999999983, 14.2, 14.279999999999946, 14.28, 18.1, 30.15899999999997, 31.428999999999718, 5.1, -5.55, 6.1, -6.5555];
let shmp = [18.85000000000012, 18.879, 25.13, 25.131, 25.1312, 25.1313, 31.4282, 12.559999999999982, 31.428999999999717];
let steps = shg.concat(shm, shmg, shp, shmp);
let img;
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;
let sz = Math.min(WIDTH, HEIGHT);
let palette;
let tokenData = genTokenData(448);
let noiseScale = 9e-11;
let bgcolor = '#000000';
let tkid = tokenData.tokenId;
let seed = parseInt(tokenData.hash.slice(0, 16), 16)
let R = new Random(seed);
let sb = R.random_int(30, 50);
let strk = R.random_dec();
let cshapes = [];
let rotspd = 7;
let star;
let pt = [];
let speed = 1;
let angle = 0;
let w = sz * 1.2;
let k = Math.floor(w / 2);
let pts = [], ptsch = [];
let col1, col2, col3;
let preduc = Math.floor(((0.85 * sz) / 657) * 100) / 100;
let incirc = (70000 * Math.floor(sz * preduc)) / 1000;
let mot = false;
let pxs = [];
let t_rd = R.random_num(10000, 53600);
//let t_rd = R.random_num(-360, 360);
let strcol = ["#0A1B28", "#071F43", "#357D7E", "#35EEEE", "#919DF0"];
let bModes = [];
let bm1, bm2;
let yoff = 0.0;
let sdbl = R.random_choice([0.1, 0.2, 0.3, 0.4]);
let yinc = R.random_num(0.01, 0.1);
let xinc = R.random_dec();
let pntcur = R.random_dec();
let xelle = R.random_int(10, 20);
let nrot = R.random_int(2, 17);
let img2;
let H1 = R.random_int(0, 53);
let H2 = R.random_int(60, 150);
let H3 = R.random_int(180, 284);
let Hcols = [H1, H2, H3];
let cmbPal = true;
let t = 0;
let rdpt = R.random_dec();
let spmode = '';
let rdd1 = R.random_choice([4, 8, 16, 32, 64, 128]);
let rdd2 = R.random_choice([10, 20, 30, 40, 50, 60, 70, 80, 90]);
let rdinc = R.random_int(2, 3);
let cmin = R.random_int(1, 10);
let cmax = R.random_int(1, 10);
let sp1 = R.random_int(2, 13);
let sp2 = R.random_int(2, 13);
let angmlt = R.random_int(7, 21);
let knum = R.random_choice([5, 10]);
let rdiv = R.random_choice([1, 2]);
let sp5r = R.random_int(75, 105);
let lnth = (strk > 0.2) ? strk : 0.5;
let shp5for = R.random_choice([5, 10, 15, 20]);
let sh2ln = R.random_choice([1, 25, 50, 75, 100]);

function setup() {

    if (localStorage.tkid) {
        tkid = Number(localStorage.tkid) + 1
        localStorage.tkid = tkid
    } else {
        localStorage.tkid = tkid;
    }
    console.log(tkid);
    createCanvas(sz * 1.2, sz);
    img = createGraphics(sz * 1.2, sz);
    img2 = createGraphics(sz * 1.2, sz);
    img2.colorMode(HSB, 360, 100, 100, 10);
    pixelDensity(1);
    centerCanvas();
    ellipseMode(CORNER);
    bModes = [DIFFERENCE, REMOVE, SCREEN, HARD_LIGHT, BLEND, BURN, LIGHTEST];
    let colArr = [];
    let ncols = 10;
    let c;
    let rdc = R.random_int(0, 5000);
    let pxsw = R.random_num(0.5, 1)

    while (pxs.length < 5000) {
        let x = random(w);
        let y = random(sz);
        if (dist(x, y, w / 2, sz / 2) > w * 0.1) {
            let adj = map(y, 0, sz, 255, 0);
            if (pxs.length < rdc) {
                c = color(60, adj, 255);
            }
            else {
                c = color(255, adj, 0);
            }
            pxs.push(new Pxl(x, y, c, pxsw));
        }
    }

    if (strk <= 0.5) {
        for (t = 0; t < ncols; t++) {
            colArr.push(R.random_choice(paleta)[R.random_int(0, 9)]);
        }
    } else {
        colArr = R.random_choice(paleta);
    }

    palette = colArr;

    //console.log(nrot + ' - ' + xinc + ' - ' + palette.toString());

    star = new Star(100, 100);
    for (z = 0; z < 1200; z++) {
        pt.push(new parti(z, R.random_num(2, 5)));
    }

    Hcols = shfarr(Hcols);

    background(bgcolor);
    noLoop();
    makeTl();
}

function shfarr(a) { for (var j, i = a.length - 1; i > 0; i--) { j = Math.floor(R.random_dec() * (i + 1));[a[i], a[j]] = [a[j], a[i]] } return a; }

function centerCanvas() {
    var e = document.body.style;
    e.display = "flex", e.height = "100vh", e.alignItems = "center", e.justifyContent = "center"
}

function keyPressed() {
    if (key == ' ') {
        mot = false;
        noLoop();
    }
    if (key == 's') {
        mot = true;
        loop();
    }
}

function mouseClicked() {
    if (mot) {
        mot = false;
        noLoop();
    } else {
        mot = true;
        loop();
    }
}

function genTokenData(projectNum) {
    let data = {};
    let hash = "0x";
    for (var i = 0; i < 64; i++) {
        hash += Math.floor(Math.random() * 16).toString(16);
    }
    data.hash = hash;
    data.tokenId = (projectNum * 1000000 + Math.floor(Math.random() * 1000)).toString();
    return data;
}

function getTipo() {

    let tk = tkid.toString().slice(-1);
    if (tk == '0') tk = 10;
    tk = Number(tk);
    //if (tk == 6) tk = R.random_int(2, 5);
    if (tk > 5) tk = tk - 5;
    return tk;
}

function makeTl() {

    let tipo = getTipo();//R.random_choice([1,3,2,4,5]);
    //strk = 0.3;
    cmin = Math.min(cmin, cmax);
    cmax = Math.max(cmin, cmax);
    if (tipo == 1 && rdpt < 0.55) {
        npoints = 490;
        spmode = R.random_choice([TRIANGLES, TRIANGLE_STRIP, QUADS])
    } else {
        npoints = R.random_int(1000, 3200);
    }

    img.noiseSeed(floor(R.random_num(0, 10e6)));
    let n = R.random_int(5, 50);
    let alph = R.random_int(75, 255);
    let mapP = int(npoints * 0.6);
    let x, y;
    let mg = ['11.519999999999802-5','2.2-5', '-3.3-q','26.528999999999993-q','-9.352-5', '0.1-q','25.215-5', '0.9-5', '-5.655-4', '0.7-4', '-3.3-5', '2.6-5',  '-5.55-4', '-5.55-5', '32.078999999999645-5', '11.461999999999835-5', '-7.4-5', '17.75004-4', '6.9-4', '17.75000000000018-4', '11.979999999999995-5', '33.259000000000064-5','0.6-4', '0.6-5', '-180-5', '11.979999999999995-4', '-1.3-5','-7.35553-5', '-7.35551-5',  '11.461999999999835-4', '0.5-5', '-5.655-5', '17.75000000000018-5', '16.7-5', '7.4-5', '32.078999999999645-4', '30.26399999999995-4', '0.7-5',  '6.9-5', '1.1-4', '18.1-4', '18.1-5', '11.3669-5', '11.366999999999887-5', '11.366999999999887-44', '5.1-5', '5.1-4', '11.9-4', '11.9-5', '11.39699999999987-5', '-6.5555-q', '18.570000000000075-q']
    let gr = ['-180-4', '-8.4-5', '10.262999999999911-5', '-9.351-5', '1.6-q', '11.20497-q', '26.528999999999993-5', '10.471999999999795-5', '18.710000000000097-q', '31.4282-5', '11.204999999999977-q', '26.179999999999435-4', '18.85000000000012-5', '28.818999999999537-5', '2.3-5', '-5.655-q', '13.919999999999954-q', '10.261999999999912-5', '14.9-5', '25.215-q', '0.1-5', '25.219-q', '25.247-5', '10.22899999999993-5', '10.755555-5', '11.519999999999802-4', '10.087999999999957-5', '10.420999999999824-4', '29.30399999999944-5','15-5', '1.8-5', '25.247-q', '18.7-q', '10.2625-5', '8.4-5', '11.39699999999987-4', '10.471999999999795-4', '-9.355-5', '10.420999999999824-5', '28.818999999999537-4', '11.519999999999802-q', '16.419999999999973-5', '25.219-5', '26.179999999999435-5', '30.36899999999993-q', '0.9-q', '-10.45-5', '17.75004-5', '10.082975-5', '10.08299999999996-5', '33.56400000000022-5','30.2639-4', '1.2-4', '11.3669-4', '1.3-4', '1.3-5', '1.2-5', '-1.3-4', '11.366999999999887-4', '14.2-4', '30.2639-5', '-5.55-q', '-7.4-4', '0.7-q', '7.4-4', '32.078999999999645-q', '6.9-q', '30.26399999999995-5', '1.6-5', '1.1-5', '-7.35551-4', '-7.35553-4', '26.17994-5', '10.244999999999921-5', '14.2-5', '30.15899999999997-5', '30.15899999999997-4', '14.28-5', '14.28-4', '11.9-q', '18.1-q', '14.279999999999946-4', '14.279999999999946-5', '5.55-q']
    let pe = ['12.559999999999983-q','12.559999999999983-4', '25.215-4','18.710000000000097-4', '0.2-5',  '-9.355-q', '-9.352-q', '-9.351-q,10.22899999999993-4', '18.879-5'];
    let mp = ['18.7-4', '25.219-4', '-3.3-4', '0.1-4', '25.247-4', '30.36899999999993-q'];

    bm1 = R.random_choice(bModes);
    bm2 = R.random_choice(bModes);

    if (tipo == 3 && xinc > 0.7) { if (pntcur < 0.5) { nrot = R.random_int(2, 6); } else { nrot = R.random_int(2, 10); } }
    if (tipo == 2 && (xinc > 0.55 && xinc <= 0.85)) { if (pntcur < 0.5) { nrot = R.random_int(3, 10); } }
    if ((bm1 == 'screen' && bm2 == 'lighten') || (bm1 == 'lighten' && bm2 == 'screen') || (bm1 == 'color-burn' && bm2 == 'screen') || (bm1 == 'screen' && bm2 == 'color-burn') || (bm1 == 'hard-light' && bm2 == 'screen') || bm1 == bm2) bm2 = 'source-over';

    let fr = 0.32;
    let tp = R.random_choice(steps);
    if (shm.indexOf(tp) != -1) { fr = 0.4; }
    else if (shp.indexOf(tp) != -1) { fr = 0.54; }
    else if (shmp.indexOf(tp) != -1) {
        if (xinc < 0.5) { fr = 0.72 } else { fr = 0.85; }
    }
    else if (shmg.indexOf(tp) != -1) { fr = 0.23; } 

    let tpmd = tp.toString() + '-' + spmode.toString().substring(0, 1);

    if (npoints < 500) {
        mapP = int(npoints * 0.3);
        if (shg.indexOf(tp) != -1) {
            if (mg.indexOf(tpmd) != -1) { fr = 0.15; }
            if (pe.indexOf(tpmd) != -1) { fr = 0.5; }
            if (mp.indexOf(tpmd) != -1) { fr = 0.65; }
            if (gr.indexOf(tpmd) != -1) { fr = 0.25; }
        }
        if (shm.indexOf(tp) != -1) {
            if (mg.indexOf(tpmd) != -1) { fr = 0.17; }
            if (pe.indexOf(tpmd) != -1) { fr = 0.6; }
            if (mp.indexOf(tpmd) != -1) { fr = 0.7; }
            if (gr.indexOf(tpmd) != -1) { fr = 0.28; }
        }
        if (shp.indexOf(tp) != -1) {
            if (mg.indexOf(tpmd) != -1) { fr = 0.16; }
            if (pe.indexOf(tpmd) != -1) { fr = 0.65; }
            if (mp.indexOf(tpmd) != -1) { fr = 0.75; }
            if (gr.indexOf(tpmd) != -1) { fr = 0.28; }
        }
        if (shmp.indexOf(tp) != -1) {
            if (mg.indexOf(tpmd) != -1) { fr = 0.18; }
            if (pe.indexOf(tpmd) != -1) { fr = 0.65; }
            if (mp.indexOf(tpmd) != -1) { fr = 0.75; }
            if (gr.indexOf(tpmd) != -1) { fr = 0.38; }
        }
        if (shmg.indexOf(tp) != -1) {
            if (mg.indexOf(tpmd) != -1) { fr = 0.13; }
            if (pe.indexOf(tpmd) != -1) { fr = 0.45; }
            if (mp.indexOf(tpmd) != -1) { fr = 0.55; }
            if (gr.indexOf(tpmd) != -1) { fr = 0.18; }
        }
    }

    if (tipo == 2) {
        if (rdinc == 2) {
            switch (true) {
                case (fr <= 0.2):
                    fr = fr * 3;
                    break;
                case (fr == 0.23):
                    fr = fr * 1.6;
                    break;
                case (fr <= 0.32):
                    fr = fr * 1.2;
                    break;
                case (fr <= 0.4):
                    fr = fr * 0.9;
                    break;
                case (fr == 0.85):
                    fr = fr * 0.4;
                    break;
            }
        } else {
            switch (true) {
                case (fr <= 0.23):
                    fr = fr * 1.1;
                    break;
                case (fr == 0.4):
                    fr = fr * 0.7;
                    break;
                case (fr == 0.74):
                    fr = fr * 0.6;
                    break;
                case (fr == 0.54):
                    fr = fr * 0.4;
                    break;
                case (fr == 0.32):
                    fr = fr * 0.8;
                    break;
                case (fr == 0.3):
                    fr = fr * 0.4;
                    break;
                case (fr == 0.85):
                    fr = fr * 0.4;
                    break;
            }
        }
    }

    if (tipo == 3 || tipo == 5) fr = 0.1;
    if (tipo == 4) fr = 0.07;

    console.log(' tipo:' + tipo + ' pntcur: ' + pntcur + ' - rdiv:' + rdiv + ' - xinc:' + xinc + ' - nrot:' + nrot + ' - strk:' + strk);

    //console.log(t_rd + ' ' + tp);
    let radius = sz * 0.00;
    img.translate(sz * 1.2 / 2, sz / 2);
    img.fill(bgcolor);
    img.rect(0, 0, 5, 5)
    let t = 0;
    let rd1 = random(0, 75);
    let rd2 = random(0, 55);
    let color;

    //if (tipo >= 2) frameRate(20);

    for (let i = 0; i < npoints; i++) {
        let size = map((i / mapP) ** 0.8, 0, 1, sz * fr, 0);

        let d = R.random_num(radius / 2, radius / R.random_int(1, 8));
        x = rd1 * R.random_num(-d, d) / t;
        y = rd2 * R.random_num(-d, d) / t;

        if (floor(x / sz * n) % 2 == 0) {
            color = lerpColorScheme(curlNoise(x * noiseScale, (y + 0) * noiseScale, 0), palette.reverse(), alph);
        } else {
            color = lerpColorScheme(curlNoise(x * noiseScale, (y + 0) * noiseScale, 0), palette, alph);
        }
        cshapes.push(new cshape(x, y, tp, color, size, i, alph, npoints, tipo))

        t += R.random_num(20, 30);
        if (radius < sz) {
            radius += R.random_num(1, 3);
        }
    }

}

function getNewPal() {
    let pal = [];
    if (R.random_dec() < 0.5) { pal = R.random_choice(paleta); }
    else {
        for (t = 0; t < 10; t++) {
            pal.push(R.random_choice(paleta)[R.random_int(0, 9)]);
        }
    }
    return pal;
}

class cshape {
    constructor(x, y, seed, color, size, n, alph, np, tipo) {
        this.x = x;
        this.y = y;
        this.rseed = seed;
        this.col = color;
        this.sz = size;
        this.ang = 0;
        this.n = n;
        this.np = np;
        this.alph = alph;
        this.init();
        this.rnd1;
        this.rnd2;
        this.tipo = tipo;
        this.ndiv = (n < np / 2) ? 100 : 200;
        this.chcol = false;
        this.sdbl = sdbl;
        this.sdbl2 = 0;
        this.incdes = 'des'
        this.ph = 0;
    }

    show() {

        if (this.chcol) {
            if (this.n == 0) { palette = getNewPal(); }
            if (floor(this.x / this.sz * this.n) % 2 == 0) {
                this.col = lerpColorScheme(curlNoise(this.x * noiseScale, (this.y + 0) * noiseScale, 0), palette.reverse(), this.alph); //colores[this.rdlrpal]
            } else {
                this.col = lerpColorScheme(curlNoise(this.x * noiseScale, (this.y + 0) * noiseScale, 0), palette, this.alph);
            }
        }

        if (this.tipo == 1) {
            if (this.np <= 1800) {
                img.drawingContext.shadowColor = this.col;
                img.drawingContext.shadowBlur = this.sz * this.sdbl;
                if (this.incdes == 'des') { this.sdbl -= 0.02; } else { this.sdbl += 0.02 }

                if (this.sdbl >= 0.25) this.incdes = 'des'
                if (this.sdbl <= -0.3) this.incdes = 'inc'
            } else if (this.np < 2800) {
                img.drawingContext.shadowColor = this.col;
                img.drawingContext.shadowBlur = this.sz * this.sdbl2;

                if (this.incdes == 'des') { this.sdbl2 -= 0.02; } else { this.sdbl2 += 0.02 }

                if (this.sdbl2 >= 0.25) this.incdes = 'des'
                if (this.sdbl2 <= -0.25) this.incdes = 'inc'
            }
        }

        img.stroke(this.col);
        img.strokeWeight(this.sz);
        img.rotate(radians(this.ang));

        if (this.np > 200 && this.tipo == 1) {
            if (strk > 0.7) {
                if (floor(this.x / this.sz * this.n) % 2 == 0) { img.blendMode(bm1); }
                else { img.blendMode(bm2); }
            } else if (strk >= 0.5) {
                if (floor(this.x / this.sz * this.n) % 2 == 0) { img.blendMode(bm2); }
                else { img.blendMode(bm1); }
            }
        }

        if (this.np < 500) {
            shape1(this.x, this.y, this.rseed);
        } else {
            switch (this.tipo) {
                case 1:
                    shape1(this.x, this.y, this.rseed);
                    break;
                case 2:
                    shape2(this.sz, this.ph, this.rseed);
                    this.ph += 0.05;
                    break;
                case 3:
                    shape3(this.sz, this.rseed, this.ph);
                    this.ph += 0.05;
                    break;
                case 4:
                    shape4(this.sz, this.rseed, this.ph);
                    this.ph += 0.05;
                    break;
                case 5:
                    shape5(this.ph, this.rseed, this.sz);
                    this.ph += 0.1;
                    break;
            }
        }
    }

    move() {
        this.ang = frameCount / this.ndiv;
    }

    changeCol(val) {
        this.chcol = val; 
    }

    init() { }
}

function shape5(ph, seed, sz) {
    let x;
    let pitau = (pntcur < 0.5) ? PI : TAU;
    if (xinc <= 0.4) {
        if (pntcur > 0.4) { t = t_rd }
    } else {
        if (pntcur > 0.95) { t = t_rd }
    }
    img.rotate(pitau / nrot);
    img.beginShape();
    for (let i = 0; i < sp5r; i += shp5for) {
        let r1 = (w / rdd1) + sin(i * 10 + ph) * rdd2;
        t += seed;
        switch (true) {
            case (strk >= 0.69):
                x = cos(t - frameCount * 3) * r1;
                break;
            case (strk >= 0.36):
                x = sin(t) * (i / 100) * r1;
                //x = sin(t) * i / nrot
                break;
            default:
                x = sin(t) * r1;// / rdiv;
                break;
        }
        switch (true) {
            case (xinc <= 0.15):
                img.rect(x, i * 2.5, 1, nrot);
                break;
            case (xinc <= 0.5):
                if (cmin != cmax) img.vertex(x, i * 2);
                else img.curveVertex(x, i * 2);
                break;
            /*case (xinc <= 0.55):
                img.strokeWeight(lnth);
                img.noFill();
                if (i % 2 == 0) img.arc(x, i * 3, sz * 1.5, sz * 1.5, PI * 0.75, PI);
                else img.arc(-x, i * 1.5, sz * 1.5, sz * 1.5, 0, QUARTER_PI);
                break;*/
            default:
                img.strokeWeight(lnth);
                img.line(x, i * 2.5, x, i * 3);
                break;
        }
    }
    img.endShape(CLOSE);
}

function shape4(sz, seed, ph) {
    const circleStep = sp1;
    const circleDiv = sp2;
    const xyFreq = 0.0005;
    let r1;
    V = p5.Vector;
    if (strk > 0.4 && strk < 0.5) t = t_rd;
    for (let i = 0; i < circleDiv; i++) {
        for (let j = 0; j < TAU / circleDiv; j += circleStep) {
            if (xinc >= 0.5)  r1 = (sz * 3) + sin(angle * 10 + ph) * rdd2;
            else r1 = 80 + cos(j * 10 + ph) * rdd2;
            t += seed;
            const v = new V(r1 * cos(t), r1 * sin(t));
            img.beginShape();
            for (let k = 0; k < knum; k++) {
                const ang = noise(v.x * xyFreq, v.y * xyFreq, k * 0.001) * 100;
                v.add(V.fromAngle(ang).mult(angmlt));
                switch (true) {
                    case (strk <= 0.2):
                        img.curveVertex(v.x, v.y);
                        break;
                    case (strk <= 0.4):
                        img.point(v.x, v.y);
                        break;
                    case (strk <= 0.6):
                        img.strokeWeight(lnth);
                        img.line(v.x, v.y, 1, sz*5);
                        break;
                    case (strk <= 0.8):
                        img.strokeWeight(lnth);
                        img.noFill();
                        img.arc(v.x, v.y, sz * 1.5, sz * 1.5, 0, HALF_PI);
                        break;
                    default:
                        if (pntcur > 0.5) img.rect(v.x, v.y, 1, 1);
                        else img.rect(v.x, v.y, 0, 1);
                        break;
                }
            }
            img.endShape();
        }
        img.rotate(TAU / circleDiv); 
    }
}

function shape3(sz, seed, ph) {
    let x, y;
    if (xinc > 0.7) {
        if (strk >= 0.5) t = t_rd
    } else { t = t_rd; }
    let muldiv = (xinc > 0.4) ? 1.5 : 1; //rdinc;
    if (xinc > 0.4) { if (pntcur < 0.5) { img.rotate(PI / nrot); } else { img.rotate(TAU / nrot); } }
    else { if (pntcur < 0.5) { img.rotate(PI / nrot); } else { img.rotate(TAU / nrot); } }
    let increment = (PI * cmin) / nrot;
    img.beginShape();
    for (let ang = 0; ang < PI * cmax; ang += increment) {
        let r1 = (sz * 3) + sin(ang * 10 + ph) * rdd2;
        t += seed;
        if (xinc > 0.3 && rdiv == 1) {
            x = cos(t) * r1 * muldiv;
            y = sin(t) * r1 / muldiv;
        } else {
            x = cos(t) * r1 / muldiv;
            y = sin(t) * r1 * muldiv;
        }
        switch (true) {
            case (xinc <= 0.15):
                if (cmin != cmax) img.curveVertex(x, y);
                else img.vertex(x, y);
            case (xinc <= 0.4):
                img.rect(x, y, 0, rdiv);
                break;
            case (xinc <= 0.70):
                img.strokeWeight(lnth);
                img.line(x, y, 1, sz * 3);
                break;
            default:
                img.strokeWeight(lnth);
                img.noFill();
                if (cmin != cmax) {
                    let farc = (strk < 0.5) ? PI : HALF_PI;
                    img.arc(x, y, sz * 1.5, sz * 1.5, 0, farc);
                } else {
                    img.arc(x, i * 6, sz * 4, sz * 4, PI * 0.75, PI);
                    img.arc(-x, i * 9, sz * 4, sz * 4, 0, QUARTER_PI);
                }
                break;
        }
    }
    img.endShape(CLOSE);
}


function shape2(sz, ph, seed) {
    if (strk >= 0.1) { t = t_rd }
    let pitau = (pntcur < 0.5) ? PI : TAU;
    img.rotate(pitau / nrot);
    let increment = pitau / rdinc;
    img.beginShape();
    for (let a = 0; a < pitau; a += increment) {
        let r1 = (w/rdd1) + sin(a * 10 + ph) * rdd2;
        t += seed;
        let x = cos(t) * r1;
        let y = sin(t) * r1;
        switch (true) {
            case (xinc <= 0.2):
                if (cmin == cmax) curveVertex(x, y);
                else vertex(x, y);
                break;
            case (xinc <= 0.55):
                img.strokeWeight(lnth);
                img.line(x, y, sh2ln, sz * 1.5);
                break;
            case (xinc <= 0.8):
                img.strokeWeight(lnth);
                img.noFill();
                if (cmin != cmax) {
                    img.arc(x, y, sz*2, sz * 3, PI * 0.75, PI);
                    img.arc(-x, y, sz * 2, sz * 3, 0, QUARTER_PI);
                } else {
                    img.arc(x, i * 2, sz*2, sz * 3, PI * 0.75, PI);
                    img.arc(-x, i * 2, sz*2, sz * 3, 0, QUARTER_PI);
                }
                break;
            default:
                img.rect(x, y, 100 - (r1 * 0.5), sz * 0.1);
                break;
        }
    }
    img.endShape(CLOSE);
}


function shape1(ox, oy, seed) {
    if (strk > 0.9) { t = t_rd }
    if (xinc > 0.35) { img.rotate(PI / nrot); }
    img.beginShape(spmode);
    for (let i = 0; i < 15; i++) {
        t += seed;
        let x = Math.sin(t) + ox;
        let y = Math.cos(t) + oy;
        vertex(x, y);
    }
    img.endShape(CLOSE);
}

function draw() {

    background(bgcolor);

    if (frameCount % 8 == 0 && frameCount < 350) nbl();

    image(img2.get(), 0, 0);

    push();
    translate(sz * 1.2 / 2, sz / 2);
    angle -= 0.002;
    rotate(angle);

    for (let p of pt) {
        p.update();
        p.show();
    }
    pop();

    if (star.x > sz * 1.2 + 100 || star.x < -100 || star.y > sz + 100) {
        star = new Star(100, 100);
    } else {
        star.draw();
    }

    for (let x of pxs) {
        x.update();
        x.wrap();
        x.display();
    }

    if (frameCount < rotspd || frameCount % rotspd == 0) {
        img.clear();
        for (let cs of cshapes) {
            if (frameCount % 15 == 0) { cs.changeCol(true);} else { cs.changeCol(false) };
            cs.show();
            cs.move();
        }
    }

    imgClone = img.get();
    image(imgClone, 0, 0);
}

class Pxl {
    constructor(x, y, c, sw) {
        this.x = x;
        this.y = y;
        this.col = c;
        this.inc = 0;
        this.sw = sw;
    }

    update() {
        this.inc += 0.008;
        let theta = noise(this.x * 0.006, this.y * 0.008, this.inc) * TWO_PI;
        this.x += 2 * tan(theta);
        this.y += 2 * sin(theta);
    }

    display() {
        if (this.x > 0 && this.x < w && this.y > 0 && this.y < sz && dist(this.x, this.y, w / 2, sz / 2) > w * 0.30) {
            stroke(this.col);
            strokeWeight(this.sw);
            point(this.x, this.y);
        }
    }

    wrap() {
        if (this.x < 0) this.x = w;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = sz;
        if (this.y > height) this.y = 0;

    }
}

class parti {
    constructor(nb, inc) {
        this.nb = nb;
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = random(width);
        this.col = R.random_choice(strcol);
        this.pz = this.z;
        this.inc = inc;
        this.sdi = 0;
    }

    update() {
        this.z = this.z - speed;
        if (this.z < 1) {
            this.z = width;
            this.x = random(-width, width);
            this.y = random(-height, height);
            this.pz = this.z;
        }
    }

    show() {

        var sx = map(this.x / this.z, 0, 1, 0, width);
        var sy = map(this.y / this.z, 0, 1, 0, height);
        var r = map(this.z, 0, width, 12, 0);
        drawingContext.shadowColor = color(255);
        drawingContext.shadowBlur = r * 1.5;
        stroke(0);
        strokeWeight(r * 0.05);
        fill(255);
        ellipse(sx, sy, r, r);
    }
}


function Star(x, y) {
    this.x = round(R.random_num(0, sz * 1.2));
    this.y = round(R.random_num(0, sz / 2));
    this.xv = round(R.random_choice([-3, -2, 2, 3]));
    this.yv = R.random_num(0.5, 1.5);
    this.r = round(R.random_num(3, 5));
    this.tail = [];
    this.tailLength = 60;
    this.startColor = "#fce1b4";
    this.endColor = [255, 255, 255, 0];

    this.draw = function () {
        circle(this.x, this.y, this.r);
        fill(this.startColor);
        noStroke();
        this.move();
        this.history();
        this.drawTail();
    }

    this.history = function () {
        if (this.tail.length > this.tailLength) {
            this.tail.shift();
        }
        this.tail.push({ x: this.x, y: this.y, r: this.r });
    }

    this.drawTail = function () {
        const colorScale = chroma
            .scale([this.endColor, this.startColor])
            .mode("lch")
            .colors(this.tail.length);

        for (i = this.tail.length - 1; i > 0; i--) {
            circle(this.tail[i].x, this.tail[i].y, this.tail[i].r);
            fill(colorScale[i]);
            noStroke();

            const radiusReducer = this.tail[i].r / this.tailLength;
            this.tail[i].r -= radiusReducer;
        }
    }

    this.move = function () {
        this.x += this.xv;
        this.y += this.yv;
    }
}

function lerpColorScheme(n, colors, alph) {
    let i = n * (colors.length) % (colors.length);
    let color1 = color(colors[floor(i)]);
    let color2 = color(colors[(floor(i) + 1) % colors.length]);
    color1.setAlpha(alph);
    color2.setAlpha(alph);
    return lerpColor(color1, color2, i % 1);
}

function curlNoise(x, y, z) {
    const eps = 0.0000001;
    let n1, n2, a, b;
    x = x / eps;
    y = y / eps;
    n1 = noise(x, y + eps, z);
    n2 = noise(x, y - eps, z);
    a = (n1 - n2) / (2 * eps);

    n1 = noise(x + eps, y, z);
    n2 = noise(x - eps, y, z);

    b = (n1 - n2) / (2 * eps);

    let angle = createVector(a, -b).heading();
    if (angle < 0) angle += TAU;
    return angle / TAU;

}

function nbl() {

    let d = w / 20
    let xoff = 0.0;
    img2.push();
    img2.background(255, 0, 0, 0.1);
    img2.noStroke();

    if (strk < 0.33) {
        for (x = 0; x < w + d; x += d) {
            let ny = map(noise(xoff, yoff), 0, 1, -200, 550);
            nW(x, ny);
            xoff += xinc;
        }
    }

    if (strk >= 0.33 && strk < 0.66) {
        for (x = 0; x < w + d; x += d) {
            let ny = map(noise(xoff, yoff), 0, 1, 0, 650);
            nW1(x, ny);
            xoff += xinc;
        }
    }

    for (x = 0; x < w + d; x += d) {
        let ny = map(noise(xoff, yoff), 0, 1, 10, 800);
        nW2(x, ny);
        xoff += xinc;
    }
    yoff += yinc;
    img2.pop();
}

function nW(x, y) {
    for (let i = 0; i < 15; i++) {
        img2.push();
        img2.translate(x, y);
        img2.fill(Hcols[0], R.random_int(5, 100), R.random_int(5, 100), R.random_num(0.0001, 0.03));
        img2.ellipse(0, 0, i * xelle);
        img2.pop();
    }
}

function nW1(x, y) {
    for (let i = 0; i < 15; i++) {
        img2.push();
        img2.translate(x, y);
        img2.fill(Hcols[1], R.random_int(5, 100), R.random_int(5, 100), R.random_num(0.0001, 0.03));
        img2.ellipse(0, 0, i * xelle);
        img2.pop();
    }
}

function nW2(x, y) {
    for (let i = 0; i < 15; i++) {
        img2.push();
        img2.translate(x, y);
        img2.fill(Hcols[2], R.random_int(5, 100), R.random_int(5, 100), R.random_num(0.0001, 0.03));
        img2.ellipse(0, 0, i * xelle);
        img2.pop();
    }
}