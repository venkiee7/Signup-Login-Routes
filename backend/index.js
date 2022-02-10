const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
const multer = require('multer');  // File upload


connectToMongo();   

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use(express.static('data'));

// Available Routes
app.use('/api/auth', require('./routes/auth'))


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'data')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({storage}).array('file');

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json(err)
        }

        return res.status(200).send(req.files)
    })
});

app.listen(port, () => {
  console.log(`iRay backend listening at http://localhost:${port}`)
})

app.listen(8000, () => {
    console.log(`iRay backend listening at http://localhost:8000`)
  })