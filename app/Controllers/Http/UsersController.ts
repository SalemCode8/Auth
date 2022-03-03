// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {
  public async index({ view }) {
    const users = await User.all()
    return await view.render('users', { users })
  }
}
