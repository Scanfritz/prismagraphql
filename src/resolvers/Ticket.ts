import { Context } from "../utils";

export const Ticket = {
  movie: ({id}, args, ctx: Context) => ctx.prisma.ticket({id}).movie(),
  cinema: ({id}, args, ctx: Context) => ctx.prisma.ticket({id}).cinema(),
};
