import { Router } from 'express';
import multer from 'multer';
import multerConig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduelController from './app/controllers/ScheduleController';
import FileController from './app/controllers/FileController';
import NotificationController from './app/controllers/NotificationController';
import AvaliableController from './app/controllers/AvaliableController';

import authMiddeware from './app/middewares/auth';

const routes = new Router();
const upload = multer(multerConig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddeware);

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/avaliable', AvaliableController.index);

routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);
routes.delete('/appointments/:id', AppointmentController.delete);

routes.get('/schedule', ScheduelController.index);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
