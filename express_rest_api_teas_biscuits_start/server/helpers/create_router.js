const express = require('express')

const createRouter = function(data) {
  
    const router = express.Router();

  //INDEX - GET /api/data
  router.get('/', (req, res) => {
  res.json(data)
  });
  
  //SHOW - GET /api/data/
  router.get('/:id', (req, res) => {
    res.json(data[req.params.id]);
  });
  
  //CREATE - POST /api/data
  router.post('/', (req, res) => {
    data.push(req.body);
    res.json(data)
  });
  
  //DELETE - 
  
  router.delete('/:id', (req, res) => {
    data.splice(req.params.id, 1);
    res.json(data)
  });
  
  //UPDATE - put /api/data/:id
  router.put('/:id', (req, res) => {
    data[req.params.id] = req.body;
    res.json(data)
  });

  return router;
}

module.exports = createRouter;