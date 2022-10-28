import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const token = await auth.use('api').attempt(email, password)

    return token.toJSON()
  }

  public async register({ request }: HttpContextContract) {
    try {
        const { 
            firstname, 
            secondname,
            email, 
            password 
        } = request.only(['firstname', 'secondname', 'email', 'password']);

        const createUser = await User.create({
            firstname,
            secondname,
            email,
            password
        })

        return createUser;
    } catch (err){
        console.log(err);
    }
  }
}
