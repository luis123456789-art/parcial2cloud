export async function seed(knex) {
  // Elimina los datos existentes
  await knex('categorias').del();

  // Reinicia el contador auto-incremental (opcional pero recomendado)
  await knex.raw('ALTER TABLE categorias AUTO_INCREMENT = 1');

  // Inserta nuevos datos sin especificar el ID
  await knex('categorias').insert([
    { CategoriaNombre: 'Beverages', Descripcion: 'Soft drinks, coffees, teas, beers, and ales', Imagen: 'img/Beverages.jpg' },
    { CategoriaNombre: 'Condiments', Descripcion: 'Sweet and savory sauces, relishes, spreads, and seasonings', Imagen: 'img/Condiments.jpg' },
    { CategoriaNombre: 'Confections', Descripcion: 'Desserts, candies, and sweet breads', Imagen: 'img/Confections.jpg' },
    { CategoriaNombre: 'Dairy Productos', Descripcion: 'Cheeses', Imagen: 'img/DairyProductos.jpg' },
    { CategoriaNombre: 'Grains/Cereals', Descripcion: 'Breads, crackers, pasta, and cereal', Imagen: 'img/cereals.jpg' },
    { CategoriaNombre: 'Meat/Poultry', Descripcion: 'Prepared meats', Imagen: 'img/Meat.jpg' },
    { CategoriaNombre: 'Produce and som', Descripcion: 'Dried fruit and bean curd abd vegatables', Imagen: 'img/produce.jpg' },
    { CategoriaNombre: 'Seafood', Descripcion: 'Seaweed and fish', Imagen: 'img/Seafood.jpg' },
    { CategoriaNombre: 'Alcoholic Bever', Descripcion: 'Beer, wine, distilled spirits, fortified wines, cocktails', Imagen: 'img/alcoholic.jpg' },
    { CategoriaNombre: 'Animal Food', Descripcion: 'Food, pet food, snacks, training treats', Imagen: 'img/Animal.jpg' },
    { CategoriaNombre: 'Lorem Insuppppp', Descripcion: 'Ropa', Imagen: 'img/Animal.jpg' },
    { CategoriaNombre: 'Lorem Insuppppp', Descripcion: 'Prueba7', Imagen: 'Cloud-Computing.jpg' },
    { CategoriaNombre: 'Lorem Insuppppp', Descripcion: 'Kevin444', Imagen: 'img/Animal.jpg' },
    { CategoriaNombre: 'Electrodomestic', Descripcion: 'Electrodomesticos de todas las marcas', Imagen: 'img/electro.jpg' },
    { CategoriaNombre: 'Vegetales', Descripcion: 'vegetales y zanahorias', Imagen: 'img/vegetales.jpg' },
    { CategoriaNombre: 'Electrodomestic', Descripcion: 'Electrodomesticosxxxxx', Imagen: 'img/electrodomestico.jpg' },
  ]);
}
