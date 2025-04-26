export async function up(knex) {
    return knex.schema.createTable('categorias', (table) => {
      table.increments('CategoriaID');
      table.string('CategoriaNombre', 15).notNullable();
      table.text('Descripcion').nullable();
      table.text('Imagen').nullable();
    });
  }
  
  export async function down(knex) {
    return knex.schema.dropTableIfExists('categorias');
  }