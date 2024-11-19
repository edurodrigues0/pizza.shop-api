import { Elysia } from 'elysia'
import { auth } from '../auth'
import { db } from '../../database/connection'
import { UnauthorizedError } from '../errors/unauthorized-error'

export const getProfile = new Elysia()
  .use(auth)
  .get('/me', async ({ auth }) => {
    const { userId } = await auth.getCurrentUser()

    const user = await db.query.users.findFirst({
      where(fields, { eq }) {
        return eq(fields.id, userId)
      },
    })

    if (!user) {
      throw new UnauthorizedError()
    }

    return user
  })
