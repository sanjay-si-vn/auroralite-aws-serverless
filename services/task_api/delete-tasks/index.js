import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    console.log("Incoming event:", JSON.stringify(event));

    try {
        const id = event.pathParameters?.id;

        if (!id) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Task ID is required" })
            };
        }

        await dynamo.send(new DeleteCommand({
            TableName: "Tasks",
            Key: { Tasks_ID: id }
        }));

        console.log("Task deleted:", id);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Task deleted successfully"
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