const bikes = require('../database/bikes.js');
const fs = require('fs');

const index = (req, res) => {
    res.status(200).json({
        status: 200,
        data: bikes,
        counter: bikes.length
    });
}

const show = (req, res) => {
    const bike = bikes.find(bike => bike.id === Number(req.params.id));
    
    if(!bike){
        return res.status(404).json({
            error: `Not found`
        });
    }

    return res.status(200).json({
        status: 200,
        data: bike,
    });
}

const create = (req, res) => {
    const bike = {
        id: bikes[bikes.length - 1].id + 1,
        name: req.body.name,
        color: req.body.color,
        modelo: req.body.modelo
    }

    bikes.push(bike);
    fs.writeFileSync('./database/bikes.js', `module.exports = ${JSON.stringify(bikes, null, 4)}`);
    
    return res.status(201).json({
        status: 201,
        data: bikes,
        counter: bikes.length
    });
}

const update = (req, res) => {
    const bike = bikes.find(bike => bike.id === Number(req.params.id));

    if(!bike){
        return res.status(404).json({
            error: 'not found'
        });
    }

    bike.id = req.body.bikes[bikes.length - 1].id + 1
    bike.name = req.body.name
    bike.color = req.body.color
    bike.modelo = req.body.modelo

    fs.writeFileSync('./database/bikes.js', `module.exports = ${JSON.stringify(bikes, null, 4)}`);

    return res.status(200).json({
        status: 200,
        data: bikes,
        counter: bikes.length
    });
}

module.exports = {
    index,
    show, 
    create,
    update
}