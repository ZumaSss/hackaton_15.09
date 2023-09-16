import Router from "express";
import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";
import s3Controller from "./s3Controller.js";


const s3Router = new Router();

s3Router.get('/', s3Controller.listObjects);

// s3Router.post('/', upload.array('file', 1), s3Controller.uploadObject);

export default s3Router;