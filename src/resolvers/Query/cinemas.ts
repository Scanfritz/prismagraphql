import { Context } from "../../utils";

export default {
  cinemas: (parent, args, ctx: Context) => ctx.prisma.cinemas(args),
  cinema: (parent, args, ctx: Context) => ctx.prisma.cinema(args.where),
  
};
