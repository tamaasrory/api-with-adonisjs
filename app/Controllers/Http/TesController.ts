import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext';
import User from "App/Models/User";
// import Database from '@ioc:Adonis/Lucid/Database';

export default class TesController {
  // @ts-ignore
  public async index(ctx: HttpContextContract) {
    // const users = await Database.query().select('*').from('users')
    const users = await User.all()
    return {data : users.map((user) => user.toJSON())}
  }

  // @ts-ignore
  public async create(ctx: HttpContextContract) {
  }

  // @ts-ignore
  public async store(ctx: HttpContextContract) {
  }

  // @ts-ignore
  public async show(ctx: HttpContextContract) {
  }

  // @ts-ignore
  public async edit(ctx: HttpContextContract) {
  }

  // @ts-ignore
  public async update(ctx: HttpContextContract) {
  }

  // @ts-ignore
  public async destroy(ctx: HttpContextContract) {
  }
}
