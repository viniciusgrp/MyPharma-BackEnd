const {MongoClient} = require('mongodb');

describe('products', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(globalThis.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should be able to insert a product into collection', async () => {
    const products = db.collection('products');

    const mockProduct = {name: 'maca', price: 10, category: 'frutas', img: "http://linkparaimagemdeumamaca.com.br"};
    await products.insertOne(mockProduct);

    const insertedProduct = await products.findOne({name: 'maca'});
    expect(insertedProduct.name).toEqual(mockProduct.name);
    expect(insertedProduct.img).toEqual(mockProduct.img);
  });
    
});