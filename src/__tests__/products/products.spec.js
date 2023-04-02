const {MongoClient} = require('mongodb');

describe('products', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db('my_pharma');
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

  it('should be able to read a product', async () => {
    const products = db.collection('products');

    const mockProduct = {name: 'maca', price: 10, category: 'frutas', img: "http://linkparaimagemdeumamaca.com.br"};

    const insertedProduct = await products.findOne({name: 'maca'});
    expect(insertedProduct.name).toEqual(mockProduct.name);
    expect(insertedProduct.img).toEqual(mockProduct.img);
  });
    

  it("should be able to update a product", async () => {
    const products = db.collection('products');

    await products.updateOne({ name: 'maca' }, { $set: { name: 'pera' } })
    const updateProducts = await products.findOne({ name: "pera" });
    expect(updateProducts.name).toEqual('pera');
  });

  it("should be able to delete a product", async () => {
    const products = db.collection('products');

    await products.deleteOne({ name: 'pera' })
    const updateProducts = await products.findOne({ name: "pera" });
    expect(updateProducts).toEqual(null);
  });
});