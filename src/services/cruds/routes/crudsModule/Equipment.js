const errorResponseTreatment = require('../../../../shared/utils/utils');

const Router = require('express');
const router = Router();

const GetEquipments = require('../../session/equipments/GetEquipments');
const RegisterUpdateEquipments = require('../../session/equipments/RegisterUpdateEquipments');
const DeleteEquipments = require('../../session/equipments/DeleteEquipments');

/**
 *  ROTA PARA BUSCAR OS EQUIPAMENTOS
*/
router.get('/', async (req, res) => {
  try {
    const response = await new GetEquipments().run(req);

    res.status(200).send(response);
  } catch (err) {
    const responseError = errorResponseTreatment(err);
    
    res.status(responseError.status).send(responseError);
  }
});

/**
 *  ROTA PARA REGISTRAR UM EQUIPAMENTO
*/
router.post('/', async (req, res) => {
  try {
    const response = await new RegisterUpdateEquipments().run(req);

    res.status(200).send(response);
  } catch (err) {
    const responseError = errorResponseTreatment(err);
    
    res.status(responseError.status).send(responseError);
  }
});

/**
 *  ROTA PARA ALTERAR UM EQUIPAMENTO
*/
router.put('/:id', async (req, res) => {
  try {
    const response = await new RegisterUpdateEquipments().run(req, 'update');

    res.status(200).send(response);
  } catch (err) {
    const responseError = errorResponseTreatment(err);
    
    res.status(responseError.status).send(responseError);
  }
});

/**
 *  ROTA PARA DELETAR UM EQUIPAMENTO
*/
router.delete('/:id', async (req, res) => {
  try {
    const response = await new DeleteEquipments().run(req);

    res.status(200).send(response);
  } catch (err) {
    const responseError = errorResponseTreatment(err);
    
    res.status(responseError.status).send(responseError);
  }
});

export default router;