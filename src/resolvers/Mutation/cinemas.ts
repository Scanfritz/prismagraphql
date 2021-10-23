import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcryptjs'
import { Context } from '../../utils'

export default {
    updateCinema: (parent, args, ctx: Context) => ctx.prisma.updateCinema(args.data),
    createCinema: (parent, args, ctx: Context) => ctx.prisma.createCinema(args.data),
    deleteCinema: (parent, args, ctx: Context) => ctx.prisma.deleteCinema(args.data),
};