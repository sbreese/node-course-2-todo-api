const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost27107/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        console.log(result);
        /*
    { result: { ok: 1, n: 3 }
        */
    });

    // deleteOne
    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
        console.log(result);
        /*
    { result: { ok: 1, n: 1 }
        */
    });

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });
    /*
    {
        lastErrorObject: { n:1 },  // <-- number of documents deleted
        value: {text: '', completed: false},
        ok: 1
    }
    */

    db.collection('Todos').findOneAndDelete({_id: new ObjectID('123')}).then((result) => {
        console.log(result);
    });

});
