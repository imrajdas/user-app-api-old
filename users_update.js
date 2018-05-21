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
        name: data.user_name,
        email: data.user_email,
        phone: data.user_phone,
        location: {
          lat: data.user_lat,
          lat: data.user_lng,
        },
        reviews: data.user_description,
        social: {
          instagram: data.user_instagram,
          facebook: data.user_facebook,
          linkedin: data.user_linkedin
        },
        createdAt: new Date().getTime()
      }
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
            ":business_name" : data.business_name ? data.business_name: null,
            ":business_page" : data.business_page ? data.business_page : null,
            ":business_type" : data.business_type ? data.business_type : null,
            ":business_state" : data.business_state ? data.business_state : null,
            ":business_admin" : data.business_admin ? data.business_admin : null,
            ":business_promote" : data.business_promote ? data.business_promote : null,
            ":business_info": data.business_info ? data.business_info : null,
            ":business_logo": data.business_logo ? data.business_logo : null,
            ":business_location": data.business_location ? data.business_location : null,
            ":business_urls": data.business_urls ? data.business_urls : null,
            ":business_day" : data.business_day ? data.business_day: null,
            ":business_shutday": data.business_shutday ? data.business_shutday: null,
            ":business_photos": data.business_photo ? data.business_photos: null,
            ":business_awards": data.business_awards ? data.business_awards : null,
            ":business_accessibility": data.business_accessibility ? data.business_accessibility : null,
            ":business_buildings": data.business_buildings ? data.business_buildings : null,
            ":business_announcements": data.business_announcements ? data.business_announcements: null,
            ":business_rules": data.rules_text ? data.rules_text :  null,
            ":business_terms": data.terms ? data.terms : null,
            ":business_faq": data.faq ?  data.faq : null,
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

