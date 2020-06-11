import Knex from "knex";

export async function up(Knex: Knex) {
    // CRIAR A TABELA

    return Knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('image').notNullable();
    })
}

export async function down(Knex: Knex) {
    // VOLTAR ATRAS (DELETAR A TABELA)

    return Knex.schema.dropTable('items');
}