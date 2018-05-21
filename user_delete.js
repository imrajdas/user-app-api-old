import aws from "aws-sdk";
import { success, failure } from "./libs/response-lib";
const cred = require('./libs/cred.json') // credentials files
const documentClient = new aws.DynamoDB.DocumentClient();

// main function
export async function main(event, context, callback) {
  const params = {
    TableName : secret.TableName,
    Key : { 
        userid: event.pathParameters.id
    },
    "ReturnValues" : "ALL_OLD"
}
console.log(params)
// calling delete function
documentClient.delete(params, async function(err, data) {
    if (err) callback(null, failure({ status: false, message: err }))
    else{
        await callback(null, success({ status: true, message: "Successfully Deleted :)" }))
    }
}); 
}
