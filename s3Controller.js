import AWS from "aws-sdk";
import fs from "fs";

class s3Controller {
    async listObjects(req, res) {
        const s3 = new AWS.S3();
        var bucketName = {
            Bucket: '00017a76-a7512568-d42e-4b3f-8d72-16c488b8a6bc',
        };

        s3.listObjects(bucketName, function(err, data) {
            if (err) {
              console.log("Error", err);
            } else {
              console.log("Success", data);
            }
          });
        res.status(200).json('works!');
    }
    async uploadObject(req, res) {
        // const s3 = new AWS.S3();

        // const bucketName = '00017a76-a7512568-d42e-4b3f-8d72-16c488b8a6bc';
        // const fileName = req.path;
        // const fileData = fs.readFileSync(fileName);

        // s3.upload({
        //     Bucket: bucketName,
        //     Key: fileName,
        //     Body: fileData
        // }, (err, data) => {
        //     if (err) {
        //         console.error(err);
        //     } else {
        //         console.log('File uploaded successfully. ' + data.Location);
        //     }
        // });
        res.send('Successfully uploaded ' + req.files.length + ' files!')

        // res.status(200).json('works!');
    }
}

export default new s3Controller();