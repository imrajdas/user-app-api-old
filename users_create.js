import uuid from "uuid";
import aws from "aws-sdk";
import { success, failure } from "./libs/response-lib";
const cred = require('./libs/cred.json') // credentials files
const documentClient = new aws.DynamoDB.DocumentClient();

// main function
export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  console.log(data);  //user data
  // creating the parameters
  const params = {
    TableName: cred.TableName,
    Item: {
      userid: uuid(),
      name: data.user_name,
      email: data.user_email,
      phone: data.user_phone,
      location: {
        lat: data.user_lat,
        lat: data.user_lng,
      },
      reviews: [data.user_description],
      social: {
        instagram: data.user_instagram,
        facebook: data.user_facebook,
        linkedin: data.user_linkedin
      },
      createdAt: new Date().getTime()
    }
  };

  documentClient.put(params, function(err, data) {    // calling update function
    if (err) callback(null, failure({ status: false, message: err }))
    else{
      callback(null, success({ status: true, message: params }))
    }
 }); 
}
