def handler(event, context):
    print("AuroraLite worker started")

    for record in event.get("Records", []):
        body = record.get("body")
        print("Processing job:", body)

    return {
        "statusCode": 200,
        "message": "Job processed"
    }