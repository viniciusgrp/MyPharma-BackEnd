const { MongoClient } = require("mongodb");

describe("categories", () => {
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
  
  it("should be able to insert a category into collection", async () => {
    const categories = db.collection("categories");
    const mockCategory = {
      name: "frutas",
      img: "http://linkparaimagem.com/.png",
    };
    await categories.insertOne(mockCategory);

    const insertCategory = await categories.findOne({ name: "frutas" });
    expect(insertCategory.name).toEqual(mockCategory.name);
    expect(insertCategory.img).toEqual(mockCategory.img);
  });

  it("should be able to read a category", async () => {
    const categories = db.collection("categories");
    const insertCategory = await categories.findOne({ name: "frutas" });
    expect(insertCategory.name).toEqual('frutas');
    expect(insertCategory.img).toEqual("http://linkparaimagem.com/.png");
  });

  it("should be able to update a category", async () => {
    const categories = db.collection("categories");

    await categories.updateOne({ name: 'frutas' }, { $set: { name: 'limpeza' } })
    const updateCategory = await categories.findOne({ name: "limpeza" });
    expect(updateCategory.name).toEqual('limpeza');
  });

  it("should be able to delete a category", async () => {
    const categories = db.collection("categories");
    const mockCategory = {
      name: "toDelete",
      img: "http://linkparaimagem.com/.png",
    };
    await categories.insertOne(mockCategory);

    await categories.deleteOne({name: 'toDelete'})
    const updateCategory = await categories.findOne({ name: "toDelete" });
    expect(updateCategory).toEqual(null);
  });
});
