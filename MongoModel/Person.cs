using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Person
{
    [BsonId]
    public ObjectId Id { get; set; }

    [BsonElement("PersonId")]
    public int PersonId { get; set; }

    [BsonElement("SQLId")]
    public int SQLId { get; set; }

    [BsonElement("FirstName")]
    public string FirstName { get; set; }

    [BsonElement("LastName")]
    public string LastName { get; set; }

    
    

}