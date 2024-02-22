import express from "express";
import {createExpressMiddleware} from '@trpc/server/adapters/express'
import { createContext } from "./trpc";
import { appRouter } from "./routers";
import cors from 'cors'

const app = express();
const port = 8080;

app.use(cors())
app.use('/trpc', createExpressMiddleware({
    router: appRouter,
    createContext
}))

app.listen(port, () => {
  console.log(`api-server listening at http://localhost:${port}`);
});
