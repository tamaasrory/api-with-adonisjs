import {DateTime} from 'luxon'
import {BaseModel, column} from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {

  public static table = 'users'

  @column({isPrimary: true})
  public id: number

  @column()
  public name: String

  @column()
  public no_hp: String

  @column()
  public role: String

  @column()
  public email: String

  @column()
  public email_verified_at: String

  @column()
  public password: String

  @column()
  public detail: Object

  @column()
  public remember_token: String

  @column.dateTime({autoCreate: true})
  public createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  public updatedAt: DateTime
}
