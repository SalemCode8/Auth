// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import RegisterValidator from 'App/Validators/RegisterValidator'
import Hash from '@ioc:Adonis/Core/Hash'

export default class RegistersController {
  public async index({ view }) {
    return await view.render('register')
  }

  public async register({ auth, request, response }) {
    const payload = await request.validate(RegisterValidator)
    payload.password = await Hash.make(payload.password)

    const user = new User()
    user.fill(payload)
    await user.save()
    await auth.use('web').login(user)

    response.redirect().toRoute('users')
  }
}
