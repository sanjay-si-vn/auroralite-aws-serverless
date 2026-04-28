import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    console.log("Incoming event:", JSON.stringify(event)); // logging

    try {
        const id = event.pathParameters?.id;

        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Task ID is required" })
            };
        }

        const body = JSON.parse(event.body || "{}");

        if (!body.task) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Task content is required" })
            };
        }

        const params = {
            TableName: "Tasks",
            Key: { Tasks_ID: id },
            UpdateExpression: "set task = :t",
            ExpressionAttributeValues: {
                ":t": body.task
            },
            ReturnValues: "ALL_NEW"
        };

        const result = await dynamo.send(new UpdateCommand(params));

        console.log("Update success:", result);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Task updated successfully",
                data: result.Attributes
            })
        };

    } catch (error) {
        console.log("ERROR:", error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                error: "Internal server error",
                details: error.message
            })
        };
    }
};