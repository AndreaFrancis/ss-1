module.exports = function(app) {

    var User = require('../models/users.js');

    //GET - Return all tvshows in the DB
    findAllUsers = function(req, res) {
        User.find(function(err, users) {
            if(!err) {
                console.log('GET /users')
                res.send(users);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //GET - Return a TVShow with specified ID
    findById = function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if(!err) {
                console.log('GET /users/' + req.params.id);
                res.send(user);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //POST - Insert a new TVShow in the DB
    addUser = function(req, res) {
        console.log('POST');
        console.log(req.body);

        var user = new User({
            name : req.body.name,
            username : req.body.username,
            password : req.body.password
        });

        user.save(function(err) {
            if(!err) {
                console.log('Created');
            } else {
                console.log('ERROR: ' + err);
            }
        });
        res.send(user);
    };

    //PUT - Update a register already exists
    updateUser = function(req, res) {
        User.findById(req.params.id, function(err, user) {
            user.name   = req.body.name;
            user.username    = req.body.username;
            user.password = req.body.password;

            user.save(function(err) {
                if(!err) {
                    console.log('Updated');
                } else {
                    console.log('ERROR: ' + err);
                }
                res.send(user);
            });
        });
    }

    //DELETE - Delete a TVShow with specified ID
    deleteUser = function(req, res) {
        User.findById(req.params.id, function(err, user) {
            user.remove(function(err) {
                if(!err) {
                    console.log('Removed');
                } else {
                    console.log('ERROR: ' + err);
                }
            })
        });
    }

    //Link routes and functions
    app.get('/users', findAllUsers);
    app.get('/user/:id', findById);
    app.post('/user', addUser);
    app.put('/user/:id', updateUser);
    app.delete('/user/:id', deleteUser);

    //---------------------------LABORATORIES-----------------------------

    var Laboratory = require('../models/laboratories.js');

    //GET - Return all tvshows in the DB
    findAllLaboratories = function(req, res) {
        Laboratory.find(function(err, laboratories) {
            if(!err) {
                console.log('GET /laboratories')
                res.send(laboratories);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //GET - Return a TVShow with specified ID
    findLaboratoryById = function(req, res) {
        Laboratory.findById(req.params.id, function(err, laboratory) {
            if(!err) {
                console.log('GET /laboratories/' + req.params.id);
                res.send(laboratory);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //POST - Insert a new TVShow in the DB
    addLaboratory = function(req, res) {
        console.log('POST');
        console.log(req.body);

        var laboratory = new Laboratory({
            name : req.body.name
        });

        laboratory.save(function(err) {
            if(!err) {
                console.log('Created');
            } else {
                console.log('ERROR: ' + err);
            }
        });
        res.send(laboratory);
    };

    //PUT - Update a register already exists
    updateLaboratory = function(req, res) {
        Laboratory.findById(req.params.id, function(err, laboratory) {
            laboratory.name   = req.body.name;
            laboratory.save(function(err) {
                if(!err) {
                    console.log('Updated');
                } else {
                    console.log('ERROR: ' + err);
                }
                res.send(laboratory);
            });
        });
    }

    //DELETE - Delete a TVShow with specified ID
    deleteLaboratory = function(req, res) {
        Laboratory.findById(req.params.id, function(err, laboratory) {
            laboratory.remove(function(err) {
                if(!err) {
                    console.log('Removed');
                } else {
                    console.log('ERROR: ' + err);
                }
            })
        });
    }

    //Link routes and functions
    app.get('/laboratories', findAllLaboratories);
    app.get('/laboratory/:id', findLaboratoryById);
    app.post('/laboratory', addLaboratory);
    app.put('/laboratory/:id', updateLaboratory);
    app.delete('/laboratory/:id', deleteLaboratory);
}