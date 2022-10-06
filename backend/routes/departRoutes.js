const express = require('express');
const { getDepartById, getDeparts, addDepart, deleteDepart, updateDepart, home } = require('../controllers/departControllers');
const auth = require('../middleware/auth');

const router = express.Router();


router.get('/', home);

// Route pour l'Affichage des déaprtements
router.get("/departements",auth ,getDeparts);

// route pour l'affichage des infos d'un département dont connait l'identifiant
router.get("/departements/:id",auth ,getDepartById);

// Ajout d'un nouveau département 

router.post("/add",auth ,addDepart);

// Suppression d'un département bien déterminé !
router.delete("/delete/:id",auth ,deleteDepart);

// Mise à jour d'un département dont on caonnait l'identifiant
router.put("/update/:id", auth ,updateDepart)

module.exports = router;