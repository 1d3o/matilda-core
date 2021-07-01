# frozen_string_literal: true

MatildaCore::Group.create(
  uuid: 'default',
  name: 'Dev group'
)
MatildaCore::User.create(
  uuid: 'admin',
  username: 'admin',
  name: 'Admin',
  surname: 'Admin',
  password: BCrypt::Password.create('Password1!')
)
MatildaCore::Membership.create(
  user_uuid: 'admin',
  group_uuid: 'default',
  permissions: ['matilda_core.memberships']
)
