/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.on('/').redirect('users')

Route.get('/login', 'LoginController.index')
Route.post('/login', 'LoginController.login').as('login')

Route.get('/logout', 'LogoutController.logout').as('logout')

Route.get('/register', 'RegisterController.index')
Route.post('/register', 'RegisterController.register').as('register')
Route.get('/users', 'UsersController.index').middleware('auth').as('users')
