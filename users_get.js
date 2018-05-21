import aws from "aws-sdk";
import { success, failure } from "./libs/response-lib";
const cred = require('./libs/cred.json') // credentials files
const documentClient = new AWS.DynamoDB.DocumentClient();

// main function
export async function main(event, context, callback) {
  const params = {
    TableName: "notes",
    // 'Key' defines the partition key and sort key of the item to be retrieved
    // - 'userid': path parameter
    Key: {
      userid: event.pathParameters.id
    }
  };
  console.log(params);
  // get list of items 
  documentClient.delete(params, async function(err, result) {
    if (err) callback(null, failure({ status: false, message: err }))
    else{
      if(result.Items != []) {
        console.log(result.Items);
        callback(null, success({status: false, message:result.Items}))
      } else {
        console.log("error userdefined");
        callback(null, failure({ status: false, error: "No records found for this user."}))
      }    
    }
    });
}
