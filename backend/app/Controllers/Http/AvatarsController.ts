import { v4 as uuidv4 } from 'uuid';

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Application from '@ioc:Adonis/Core/Application';
import Avatar from 'App/Models/Avatar';

export default class AvatarsController {
  private validationOption = {
    types: ['image'],
    size: '2mb',
  }

  public async avatar({ request, auth }: HttpContextContract) {
    const image = request.file('image', this.validationOption);
    const user_id = auth.user?.id;

    if(image){
      const imageName = `${uuidv4()}.${image.extname}`

      await image.move(Application.tmpPath('uploads'), {
        name: imageName
      })
    }

    const createImg = await Avatar.create({
      image: image?.fileName,
      user_id,
    })

    return createImg;
  }

  public async index (){
    const image = await Avatar.query().preload('user')

    return image;
  }
}