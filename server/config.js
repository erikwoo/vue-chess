
var config = {
    db: {
        options: {
            db: {native_parser: true},
            server: {poolSize: 5},
//  replset: { rs_name: 'myReplicaSetName' },
//  user: 'admin',
//  pass: '123456'
        },
        uri: process.env.MONGO_URL || 'mongodb://127.0.0.1/vuegustchess'
    },
    porthttp: process.env.PORT || 80,
    multicore: false,
    https: false,
    debug: false
}
module.exports = config;