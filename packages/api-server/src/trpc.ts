import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { CreateExpressContextOptions} from '@trpc/server/adapters/express';


export const createContext = ({req, res}: CreateExpressContextOptions) => {
    return {
        req, res
    }
}

type Context = Awaited<ReturnType<typeof createContext>>;

export const t = initTRPC.context<Context>().create()

export const router = t.router;
export const publicProcedure = t.procedure;