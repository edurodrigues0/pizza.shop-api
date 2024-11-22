import Elysia, { t } from 'elysia'
import { auth } from '../auth'
import { db } from '../../database/connection'
import { restaurants } from '../../database/schema'
import { UnauthorizedError } from '../errors/unauthorized-error'
import { eq } from 'drizzle-orm'

export const updateProfile = new Elysia().use(auth).put(
  '/profile',
  async ({ auth: { getCurrentUser }, set, body }) => {
    const { restaurantId } = await getCurrentUser()
    const { name, description } = body

    if (!restaurantId) {
      throw new UnauthorizedError()
    }

    await db
      .update(restaurants)
      .set({
        name,
        description,
      })
      .where(eq(restaurants.id, restaurantId))

    set.status = 204
  },
  {
    body: t.Object({
      name: t.String(),
      description: t.Optional(t.String()),
    }),
  },
)
