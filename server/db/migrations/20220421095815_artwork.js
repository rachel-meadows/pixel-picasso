exports.up = function (knex) {
  return knex.schema.createTable('artwork', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.text('pixels')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('artwork')
}
