import {
  addNewContact,
  getContacts,
  getContactWithId,
  updateContact,
  deleteContact } from '../controllers/crmController.js';

const routes = (app) => {
  app.route('/contact')
  .get((req, res, next) => {
    //This is the middleware
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);
    next();
  }, getContacts)

  //Post endpoint
  .post(addNewContact)

  app.route('/contact/:contactId')
  .get(getContactWithId)
  .put(updateContact)
  .delete(deleteContact)
}

export default routes;
