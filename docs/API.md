# AuroraLite – API Design

## Overview

The AuroraLite API allows clients to submit jobs and check their processing status.

The API follows a simple REST-based design.


## Base URL

https://api.auroralite.com


## Endpoint 1 – Submit Job

### Request

POST /jobs

### Description

Submits a new job to the system for asynchronous processing.

### Request Body

{
  "task": "process_data",
  "payload": {
    "input": "sample data"
  }
}

### Response

{
  "job_id": "12345",
  "status": "queued"
}


## Endpoint 2 – Get Job Status

### Request

GET /jobs/{job_id}

### Description

Returns the current status of the job.

### Response

{
  "job_id": "12345",
  "status": "processing"
}

Possible status values:

- queued
- processing
- completed
- failed