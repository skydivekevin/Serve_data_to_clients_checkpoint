# Serve_data_to_clients_checkpoint

Instructions
Use the data in the .csv dataset  and complete the following tasks.

Build a light web server in a seperate folder outside of this repo
Return the entire collection as JSON when you GET the index (/) of the server
Return an individual item as JSON when you GET the id of that item (eg., /4)
Return an error message as JSON when you GET the id of an item that doesn't exist (eg., /100, /forty-five, etc.)
Deploy your server to the internet
Test your API with a headless browser like Postman
Notes
Your server should include appropriate CORS headers
Examples
Your returned data list should look like this:

{
    data: [{
        "id": 1,
        "firstAttribute": "firstValue",
        "secondAttribute": "secondValue"
    },{
        "id": 2,
        "firstAttribute": "firstValue",
        "secondAttribute": "secondValue"
    }]
}
Your returned data item should look like this:

{
    data: {
        "id": 1,
        "firstAttribute": "firstValue",
        "secondAttribute": "secondValue"
    }
}
Your returned error should look like this:

{
    error: {
        "message": "No record found!"
    }
}
Deployed API
Your API should

[ ] Deployed
[ ] Returns all of the data
[ ] Returns data by id
[ ] Uses a top-level data attribute
[ ] Attributes are camelCased
[ ] Data values are correct
[ ] Returns CORS headers
[ ] Returns 200 status codes for data
[ ] Returns 404 status codes for invalid IDs

Your code should have

[ ] Correct indentation
[ ] Consistent semi-colon usage
[ ] Descriptive names
[ ] No console.log statements
