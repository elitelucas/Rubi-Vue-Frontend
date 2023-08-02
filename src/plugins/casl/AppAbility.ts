import type { AbilityClass } from '@casl/ability'
import { Ability } from '@casl/ability'

export type Actions = 'create-super-admin'
| 'update-super-admin'
| 'delete-super-admin'
| 'list-super-admin'
| 'create-client-admin'
| 'update-client-admin'
| 'delete-client-admin'
| 'list-client-admin'
| 'create-client-customer'
| 'update-client-customer'
| 'delete-client-customer'
| 'list-client-customer'
| 'create-collaborator'
| 'update-collaborator'
| 'delete-collaborator'
| 'list-collaborator'
| 'create-order'
| 'update-order'
| 'delete-order'
| 'list-order'
| 'create-workspace'
| 'update-workspace'
| 'delete-workspace'
| 'list-workspace'
| 'create-invitation'
| 'update-invitation'
| 'delete-invitation'
| 'list-invitation'
| 'create-product-category'
| 'update-product-category'
| 'delete-product-category'
| 'list-product-category'
| 'create-product'
| 'update-product'
| 'delete-product'
| 'list-product'
| 'create-price-type'
| 'update-price-type'
| 'delete-price-type'
| 'list-price-type'
| 'create-product-price'
| 'update-product-price'
| 'delete-product-price'
| 'list-product-price'
| 'menu-all'

export type Subjects = 'User'

export type AppAbility = Ability<[Actions, Subjects]>

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AppAbility = Ability as AbilityClass<AppAbility>

export interface UserAbility {
  action: Actions
  subject: Subjects
}
