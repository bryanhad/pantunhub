import { publicProcedure, router} from "../trpc";

export const appRouter = router({
    hello: publicProcedure.query(() => {
        return {msg: "Hello from /hello route!"}
    })
})

export type AppRouter = typeof appRouter