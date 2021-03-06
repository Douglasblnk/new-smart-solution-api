const errorResponseTreatment = require('../../../shared/utils/utils');

const Router = require('express');
const router = Router();

const GetInstallationLocation = require('../../session/cruds/installationLocation/GetInstallationLocation');
const DeleteInstallationLocation = require('../../session/cruds/installationLocation/DeleteInstallationLocation');
const RegisterUpdateInstallationLocation = require(
  '../../session/cruds/installationLocation/RegisterUpdateInstallationLocation',
);

/**
 *  ROTA PARA BUSCAR OS LOCAIS DE INSTALAÇÃO
*/
router.get('/', async (req, res, next) => {
  try {
    const response = await new GetInstallationLocation().run(req);

    next();
    res.status(200).send(response);
  } catch (err) {
    const responseError = errorResponseTreatment(err);
    
    res.status(responseError.status).send(responseError);
  }
});

/**
 *  ROTA PARA REGISTRAR UM LOCAL DE INSTALAÇÃO
*/
router.post('/', async (req, res, next) => {
  try {
    const response = await new RegisterUpdateInstallationLocation().run(req);

    next();
    res.status(200).send(response);
  } catch (err) {
    const responseError = errorResponseTreatment(err);
    
    res.status(responseError.status).send(responseError);
  }
});

/**
 *  ROTA PARA ALTERAR UM LOCAL DE INSTALAÇÃO
*/
router.put('/:id', async (req, res, next) => {
  try {
    const response = await new RegisterUpdateInstallationLocation().run(req, 'update');

    next();
    res.status(200).send(response);
  } catch (err) {
    const responseError = errorResponseTreatment(err);
    
    res.status(responseError.status).send(responseError);
  }
});

/**
 *  ROTA PARA DELETAR UM LOCAL DE INSTALAÇÃO
*/
router.delete('/:id', async (req, res, next) => {
  try {
    const response = await new DeleteInstallationLocation().run(req);

    next();
    res.status(200).send(response);
  } catch (err) {
    const responseError = errorResponseTreatment(err);
    
    res.status(responseError.status).send(responseError);
  }
});

module.exports = router;
