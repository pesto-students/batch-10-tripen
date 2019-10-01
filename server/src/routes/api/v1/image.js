import express from 'express';
import upload from '../../../utils/fileUpload';

const router = express.Router();

const singleUpload = upload.single('image');

router.post('/upload', (req, res) => {
  singleUpload(req, res, () => res.json({ imageUrl: req.file.location }));
});

export default router;
