import Express from 'express';

const app: Express.Application = Express();

app.get('/', (req: Express.Request, res: Express.Response) => {
    return res.send('Hello, World');
})

app.listen(3000, () => { console.log('Listen on port 3000'); });

export default app;