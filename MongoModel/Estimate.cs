using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Estimate
{
    [BsonId]
    public ObjectId Id { get; set; }

    [BsonElement("EstimateId")]
    public int EstimateId { get; set; }

    [BsonElementAttribute("EstimatedPersonRef")]
    public ObjectId EstimatedPersonRef { get; set; }

    [BsonElementAttribute("TargetPersonRef")]
    public ObjectId TargetPersonRef { get; set; }

    public List<Mark> Marks { get; set; }
}

public class Mark
{
    public ObjectId Criteria { get; set; }
    public int Value { get; set; }
    public string Comment { get; set; }
}