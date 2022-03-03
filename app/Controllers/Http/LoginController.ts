// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import LoginValidator from 'App/Validators/LoginValidator'

export default class LoginController {
  public async index({ view }) {
    return await view.render('login')
  }

  public async login({ auth, request, response }) {
    const payload = await request.validate(LoginValidator)

    await auth.use('web').attempt(payload.email, payload.password)

    response.redirect().toRoute('users')

  }
}
