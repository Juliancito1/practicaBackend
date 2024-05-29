const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://juliansergiomartin:h82S04bBBgWfCO4X@cluster0.xlbrizj.mongodb.net/'
        );
        console.log('db conectado')
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnection