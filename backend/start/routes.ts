import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/login', 'AuthController.login')
  Route.post('/user', 'AuthController.register')
  Route.get('/user', 'AuthController.index').middleware('auth')

  Route.post('/image', 'AvatarsController.avatar').middleware('auth')
  Route.get('/image', 'AvatarsController.index').middleware('auth')

  Route.post('/blog', 'BlogsController.create').middleware('auth')
  Route.get('/blog', 'BlogsController.index').middleware('auth')
  Route.get('/blog/:id', 'BlogsController.show').middleware('auth')
}).prefix('/api');