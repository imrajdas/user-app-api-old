# user-app
A user app using aws lambda function i.e, a serverless framework
# API URL
```
  POST - https://4mzs1zkyeg.execute-api.eu-west-1.amazonaws.com/test/create
  
  GET - https://4mzs1zkyeg.execute-api.eu-west-1.amazonaws.com/test/view/{id}
  
  POST - https://4mzs1zkyeg.execute-api.eu-west-1.amazonaws.com/test/update/{id}
  
  DELETE - https://4mzs1zkyeg.execute-api.eu-west-1.amazonaws.com/test/delete/{id}
```
## Installation
```
1. npm install
2. serverless deploy -s test // for test environment
3. serverless deploy -s prod // for prod environmen
```
## Brief
**Create**
```
**api-url** - https://your_api_url/test/create
This api will create an user with these list of parameters:
1. user_name 
2. user_email
3. user_phone
Location
4. user_lat
5. user_lng
6. user_description
Social
7. user_instagram
8. user_facebook
9. user_linkedin
```
**View**
```
  **api-link** - https://your_api_url/test/view/{id}
  @params are userid
```
**Delete**
```
  **api-link** - https://your_api_url/test/delete/{id}
  @params are userid
```
**Update**
```
**api-url** - https://your_api_url/test/update
This api will update existing useruser with these list of parameters:
1. userid - as key must sent
2. user_name 
3. user_email
4. user_phone
Location
5. user_lat
6. user_lng
7. user_description
Social
8. user_instagram
9. user_facebook
9. user_linkedin
```
### CREATER AND MAINTAINER 
**RAJ BABU DAS** http://www.rajdas.in
