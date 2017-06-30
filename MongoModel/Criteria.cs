using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Criteria
{
    [BsonId]
    public ObjectId Id {get;set;}

    public string Title {get;set;}

    public Level Trainee {get;set;}
    public Level Junior {get;set;}
    public Level Middle {get;set;}
    public Level Senior {get;set;}
    public Level Expert {get;set;}
}

public class Level
{
    [BsonId]
    public ObjectId Id {get;set;}
    public int Value {get;set;}
    public string Description {get;set;}
}