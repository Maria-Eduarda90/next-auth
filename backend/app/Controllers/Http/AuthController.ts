import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';

export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    try {
      const email = request.input('email');
      const password = request.input('password');

      const token = await auth.use('api').attempt(email, password)

      return {
        message: 'usuario logado com sucesso',
        user: auth.user,
        token: token.toJSON(),
      }

    } catch {
      return response
        .status(400)
        .json({ message: 'email ou senha incorretos' })
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

      if(firstname === '' || secondname === '' || email === '' || password === ''){
        return response
          .status(400)
          .json({ message: 'Preencha todos os campos' });
      }

      const user = await User.create({
        firstname,
        secondname,
        email,
        password,
      })

      return {
        message: 'usuario criado com sucesso!',
        data: user,
      }
    } catch {
      return response
        .status(500)
        .json({ message: 'Já existe um usuario cadastrado com esse email :' })
    }
  }

  public async index() {
    const user = await User.query().preload('avatars')

    return user
  }
}
