import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

aws.config.update({
  secretAccessKey: process.env.AWS_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_ID,
  region: 'ap-south-1',
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'tripen-images',
    acl: 'public-read',
    metadata(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key(req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

export default upload;
