const fs = require('fs');

if(!fs.existsSync('../database.json')){
    console.log('tata')
    fs.writeFileSync('../database.json', '[]')
}

const Database = {}
Database.data = JSON.parse(fs.readFileSync('../database.json'));

/**
 * Add a new torrent to the database
 * @param {Torrent} torrent 
 */
Database.addTorrent = (torrent) => {
    Database.data.push(torrent);
    fs.writeFileSync('../database.json', JSON.stringify(Database.data));
}

Database.getTorrents = () => {
    console.log(Database.data)
}

module.exports = { Database }