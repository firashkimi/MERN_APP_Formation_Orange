const Depart = require('../models/departModel')


exports.home = (req, res) => { res.send('Hello server ...'); }

// @desc    Get Departs
// @route   GET /departements
// @access  Private
exports.getDeparts = (req, res) => {
    Depart.find({}, (err, results) => {
        err ? res.send(err) : res.send(results)
    });
}

// @desc    Get Departs
// @route   GET /departements/:id
// @access  Private
exports.getDepartById = (req, res) => {
    Depart.find({ _id: req.params.id }, (err, result) => {
        if (!err) {
            res.send(result);
        }
    });
}

// @desc    Add Departs
// @route   GET /departements
// @access  Private
exports.addDepart = async (req, res) => {
    let newDepart = new Depart(req.body);
    try {
        await newDepart.save();
        res.status(200).send({ message: `${newDepart.nom} is succussffully added` });
    }
    catch (err) {
        res.status(400).send({ error: `error adding newDepart ${err}` })
    }
}

exports.deleteDepart = async (req, res) => {
    try {
        const depart = await Depart.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: `${depart.nom} is succussffully deleted` });
    }
    catch (err) {
        res.status(400).send({ error: `error deleting department ${err}` })
    }
}

exports.updateDepart = async (req, res) => {
    try {
        const depart = await Depart.findByIdAndUpdate(req.params.id, req.body);
        await depart.save()
        res.status(200).send({ message: `${depart.nom} is succussffully updated` });
    }
    catch (err) {
        res.status(400).send({ error: `error updating department ${err}` })
    }
}