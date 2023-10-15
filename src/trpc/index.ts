import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
  test: publicProcedure.query(() => {
    authCallback: publicProcedure.query(() => {
      const { getUser } = getKindeServerSession();
      const user = getUser();
      if (!user.id || !user.email) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Unauthorized" });
      }
      return { suceess: true };
    });
  }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
