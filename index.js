import express from "express";
import AWS from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";

import s3Router from "./s3Routes.js"

var config = {
    accessKeyId: "ash",
    secretAccessKey: "fd13bb117b46c4bf54a43814e33fd504",
    endpoint: "https://s3.timeweb.com",
    sslEnabled: false,
    s3ForcePathStyle: true,
    region: 'ru-1'
  };
AWS.config.update(config);

const s3 = new AWS.S3();

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: '00017a76-a7512568-d42e-4b3f-8d72-16c488b8a6bc',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            cb(null, Date.now().toString());
        }
    })
});

const app = express();


app.post('/', upload.array("file", 1), (req, res) => {
    console.log(req.files);
    res.send('Successfully uploaded ' + req.files.length + ' files!');
});

const PORT = 5000;
app.use(express.json());

app.use('/', s3Router);

app.listen(PORT, () => console.log("SERVER WORKS ON " + PORT));