const mongoose = require('mongoose');
const InitialMongoServer = async () => {
    try{
        await mongoose.connect("mongodb+srv://newadmin:newadmin@undabot-cluster.d4ouk.mongodb.net/undabot?retryWrites=true&w=majority", { useUnifiedTopology: true });
        console.log('Connected to DB successfull!')
    } catch (e) {
        console.log(e)
        throw e;
    }
}

module.exports = InitialMongoServer;