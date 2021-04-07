const CONFIG = {
    MONGO_URL   : 'mongodb+srv://dbuser:abcd@mastercluster.usel1.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-pz7ayc-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
    MONGO_DB    : 'chatbotDB',
    PORT        :  process.env.PORT || 3000
}

module.exports = CONFIG