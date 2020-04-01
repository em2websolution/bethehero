
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments(); /**gerar id numerico auto incrementada */

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable(); /**campo com casas decimais */

        table.string('ong_id').notNullable(); /**chave de relacionamento */

        table.foreign('ong_id').references('id').inTable('ongs'); /* integridade de chave estrangeira */
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
