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
});
