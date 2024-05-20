import express from 'express';

import { router } from './routes';

import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

import cors  from 'cors';

const port = process.env.PORT || 8000;
const app = express();  

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/terms', (request, response) => {
    return response.json({
        message: 'Termos de uso' 
    });
})

app.use('/v1', router)
  
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://pomodoro-6epv8ql6j-joaos-projects-a243f803.vercel.app:8000")
    app.use(cors())
    next();
});

app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

app.listen(port, () => console.log(`Server initialized on port ${port}`));