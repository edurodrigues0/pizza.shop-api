import { Elysia } from 'elysia'
import { auth } from '../auth'
import { db } from '../../database/connection'

export const getManagedRestaurant = new Elysia()
  .use(auth)
  .get('/managed-restaurant', async ({ auth }) => {
    const { restaurantId } = await auth.getCurrentUser()

    if (!restaurantId) {
      throw new Error('User is not a manager.')
    }

    const managedRestaurant = await db.query.restaurants.findFirst({
      where(fields, { eq }) {
        return eq(fields.id, restaurantId)
      },
    })

    if (!managedRestaurant) {
      throw new Error('Restaurant not found.')
    }

    return managedRestaurant
  })
