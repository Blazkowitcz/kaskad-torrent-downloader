const {Database} = require('../modules/database.module')

/**
 * Get all torrents
 * @param {Request} req 
 * @param {Response} res 
 */
exports.getTorrents = (req, res) => {
    try{
        const torrents = Database.getTorrents();
        res.status(200).json(torrents);
    }catch(error){
        res.status(500).json({'message': "Error"});
    }
}