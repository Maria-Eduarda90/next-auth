import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/login', 'AuthController.login')
  Route.post('/user', 'AuthController.register')
  Route.get('/user', 'AuthController.index').middleware('auth')
}).prefix('/api');