import uuid from "uuid";
import aws from "aws-sdk";
import { success, failure } from "./libs/response-lib";
const cred = require('./libs/cred.json') // credentials files
const documentClient = new aws.DynamoDB.DocumentClient();

//main function
export async function main(event, context, callback) {
    // get the data from the body
    const data = JSON.parse(event.body)
    console.log(event);
    console.log(data);
    // Get the params for the update
    const params = {
        TableName: secret.TableName,
        Key: {
            bizid: parseInt(event.pathParameters.id)
        }, userid: uuid(),
    //  define update expression
        UpdateExpression: `SET #name = :user_name,
                               #email = :user_email,
                               #phone = :user_phone,
                               #location = :user_location,
                               #reviews = list_append(#reviews, :user_reviews),
                               #social = :user_social`,
        ExpressionAttributeNames: {
            '#name': 'name',
            '#email': 'email',
            '#phone': 'phone',
            '#location': 'location',
            '#reviews': 'reviews',
            '#social': 'social'
        },
    //  Expression attribute values
        ExpressionAttributeValues: {
            ":user_name" : data.name ? data.name: null,
            ":user_email" : data.email ? data.email : null,
            ":user_phone" : data.phone ? data.phone : null,
            ":user_location" : data.location ? data.location : null,
            ":user_reviews" : data.reviews ? data.reviews : null,
            ":user_social": data.social ? data.social : null,
        },
        ReturnValues: "ALL_NEW"
    }
    console.log(params);
    
      documentClient.update(params, function(err, data) {
        if (err) console.log(err);
        else{
            console.log(data);
            callback(null, success({ status: data }))
        }
     });
   
}

