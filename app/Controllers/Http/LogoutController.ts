// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LogoutsController {
  public async logout({ auth, response }) {
    await auth.use('web').logout()

    response.redirect().toRoute('login')
  }
}
