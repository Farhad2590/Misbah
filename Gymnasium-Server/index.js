const express = require('express')
const cors = require('cors')

//cashWave
//tmguutjI1anztT4O
require('dotenv').config()
const port = process.env.PORT || 9000
const app = express()


app.use(cors())
app.use(express.json())


const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://gymnasium:FVYwq5Fl40HDiK4Y@cluster0.6wkcb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        const userCollection = client.db('gymnasium').collection('users')
        const trainerCollection = client.db('gymnasium').collection('carts')
        const servicesCollection = client.db('gymnasium').collection('services')

        app.get('/services', async (req, res) => {
            const result = await servicesCollection.find().toArray();
            res.send(result);
        })
        app.get('/users', async (req, res) => {
            const result = await userCollection.find().toArray();
            res.send(result);
        })

        app.get('/users/:email', async (req, res) => {
            console.log(req.params.email);
            const result = await userCollection.find({ email: req.params.email }).toArray();
            res.send(result)
        })

        app.get('/carts/:email', async (req, res) => {
            // console.log(req.params.email);
            const result = await trainerCollection.find({ email: req.params.email }).toArray();
            res.send(result)
        })

        app.delete('/cart/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await trainerCollection.deleteOne(query);
            res.send(result);
        })

        app.delete('/myCart/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email: { $regex: email } };
            const result = await trainerCollection.deleteMany(query);

            res.send(result);

        });
        
        

        // Save a user data in db
        app.post('/user', async (req, res) => {
            const userData = req.body
            const result = await userCollection.insertOne(userData)
            res.send(result)
        })
        app.post('/cart', async (req, res) => {
            const userData = req.body
            const result = await trainerCollection.insertOne(userData)
            res.send(result)
        })
        app.get('/carts', async (req, res) => {
            const result = await trainerCollection.find().toArray();
            res.send(result);
        })


        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello from Gymnasium Server..')
})

app.listen(port, () => {
    console.log(`Gymnasium is running on port ${port}`)
})