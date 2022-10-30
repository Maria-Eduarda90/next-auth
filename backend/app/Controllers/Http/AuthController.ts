import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';

export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    try {

      const email = request.input('email')
      const password = request.input('password')

      const token = await auth.use('api').attempt(email, password)

      return token.toJSON()

    } catch {
      return response.badRequest('Invalid credentials');
    }
  }

  public async register({ request, response }: HttpContextContract) {

    try {
      const { firstname, secondname, email, password } = request.only([
        'firstname',
        'secondname',
        'email',
        'password',
      ])

      const user = await User.create({
        firstname,
        secondname,
        email,
        password,
      })

      return {
        message: 'usuario criado com sucesso',
        data: user,
      }
    } catch {
      return response.status(400).json({ message: 'Bad request' })
    }
  }

  public async index() {
    const user = await User.query().preload('avatars')

    return user
  }
}
