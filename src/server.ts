import express from 'express';

import { router } from './routes';

import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

const port = 3000;
const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/terms', (request, response) => {
    return response.json({
        message: 'Termos de uso' 
    });
})

app.use('/v1', router)

app.listen(port, () => console.log(`Servidor inicializado em http://localhost:${port}`));