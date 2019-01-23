var querystring = require("querystring");
var fs = require("fs");

var pelis = [
    {
        titol: "The Promise",
        director: "",
        video: "pelis/The Promise.mp4",
        foto: null,
        descripcioFoto: "Foto",
        Preferit: false,
        Genere: "npi"
    },
    {
        titol: "Transfomers 4",
        director: "",
        video: "pelis/Transfomers4.mp4",
        foto: null,
        descripcioFoto: "Foto",
        Preferit: true,
        Genere: "npi"
    },
    {
        titol: "Tron Legacy",
        director: "",
        video: "pelis/Tron Legacy.mp4",
        foto: null,
        descripcioFoto: "Foto",
        Preferit: true,
        Genere: "npi"
    }


];


var directors = [
    {
        nom: "director",
        foto: "directors/StevenSpilberg.jpg",
        bio: "gran director",
        pelis: [
            {
                nom: "The Promise",
            }
        ]
    },
    {
        nom: "director",
        foto: "directors/QuentinTarantino.jpg",
        bio: "gran director",
        pelis: [
            {
                nom: "Transfomers4",
            }
        ]
    }
];





/* var ruta = "mongodb://localhost:27017/vstreaming"; */

/**
 * Funció crida inicial que retornarà
 * 
 * Pel·lícula:
 *  . Titol
 *  . Director
 *  . Video
 *  . Foto
 *  . Descripció foto
 *  . Preferit
 *  . Genere
 * @param {Paràmetre per emetre la resposta} response 
 * @param {*} data 
 */
function tornaPelis(response, data) {

    var inici = "[tornaPelis ]";
    console.log(inici);

   

    response.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8"
    });

    response.write(JSON.stringify(pelis));

    response.end();

}








function mostraPeli(response, data) {
    var funcio = "[mostraPeli ] ";
    console.log(funcio);
   
    var nom = null;
    for (var clau in data) {
       
        nom = data[clau];

        console.log(funcio+ "data "+ nom);
}

    fs.readFile('./data/pelis/'+nom+'.mp4', function (err, sortida) {
        response.writeHead(200, {
            "Content-Type": "video/mp4;"
        });
    
        response.write(sortida);
    
        response.end();
    });
  

   
    /* const path = 'data/pelis/The Promise.mp4'
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize - 1
        const chunksize = (end - start) + 1
        const file = fs.createReadStream(path, { start, end })
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        }
        response.writeHead(206, head);
        file.pipe(response);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }
        response.writeHead(200, head)
        fs.createReadStream(path).pipe(response)
    } */
}


/**
 * Directors
 * 
 * Nom
 * Foto
 * Bio
 * Pelis
 */
function tornadirectors(response, data) {

    var funcio = "[tornadirectors ] ";
    console.log(funcio);


    /* MongoClient.connect(ruta, function(err, db){
       assert.equal(null, err);
       console.log(funcio+ ": conexió correcta");
       

       response.writeHead(200, {
           "Content-Type": "text/html; charset=utf-8"}); */

    /* Obtenim totes les dades */
    /* var dades = db.collection('directors').find({});
    dades.each(function (err, doc){
        assert.equal(null, err);
        console.log(funcio+ ": dades bucle");
        
        if(doc != null){
            response.write("<img src='data:image/png;base64,"+"doc.Foto'/>");
        }

        else{
            response.end();
        }
    });
}); */

    response.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8"
    });

    response.write(JSON.stringify(directors));

    response.end();

}


function preferits(response, data) {
    var funcio = "[preferits] ";
    console.log(funcio);


}


function cercaPelis(response, data) {
    var funcio = "[cercaPelis] ";
    console.log(funcio);


    console.log(funcio + ": valor " + querystring.parse(data)["Director"]);
}



function cercaDirectors(response, data) {
    var funcio = "[cercaDirectors] ";
    console.log(funcio);


    console.log(funcio + ": valor " + querystring.parse(data)["Director"]);
}



exports.tornaPelis = tornaPelis;
exports.mostraPeli = mostraPeli;
exports.tornadirectors = tornadirectors;
exports.preferits = preferits;
exports.cercaPelis = cercaPelis;
exports.cercaDirectors = cercaDirectors;