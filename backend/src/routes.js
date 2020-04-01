const express  = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes =  express.Router();
const { celebrate, Segments, Joi } = require('celebrate');

/**Lista a tabela ongs */
routes.get('/ongs', OngController.index); 

/**Grava na tabela ongs */ 
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(13), 
    city: Joi.string().required(),
    uf: Joi.string().required().length(2), 
  }),
}), OngController.create);

/**Login session */
routes.post('/sessions', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
  }),
}), SessionController.create); 

/**Lista a cadastros ongs */
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.index); 

/**Lista a tabela incidentes */
routes.get('/incidents',celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
}), IncidentController.index); 

/**Grava na tabela incidentes */
routes.post('/incidents', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),

  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(), 
  }),

}), IncidentController.create);

/**Deleta na tabela ongs */
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), IncidentController.delete);



module.exports = routes;