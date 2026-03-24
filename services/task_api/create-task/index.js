import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    const body = JSON.parse(event.body || "{}");

    const params = {
        TableName: "Tasks",
        Item: {
            Tasks_ID: Date.now().toString(),
            task: body.task || "default task"
        }
    };

    await dynamo.send(new PutCommand(params));

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Task created successfully" }),
    };
};