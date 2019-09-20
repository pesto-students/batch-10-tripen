import express from 'express';
const router = express.Router();

router.get('/:id', function(req, res) {
    res.status(200).send({data: "get timeline success"});
});
router.post('/', function(req, res) {
    res.status(200).send({data: "post timeline success"});
});

export default router;
