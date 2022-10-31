import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Blog from 'App/Models/Blog';

export default class BlogsController {
  public async create({ request, auth }: HttpContextContract) {
    const data = request.all()
    const user_id = auth.user?.id

    const blog = await Blog.create({
      ...data,
      user_id,
    })

    return blog
  }

  public async index() {
    const blog = await Blog.query().preload('user')

    return blog
  }

  public async show({ params }: HttpContextContract) {
    const blog = await Blog.findOrFail(params.id);

    return blog;
  }
}
