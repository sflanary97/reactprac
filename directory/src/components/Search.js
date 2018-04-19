import React from 'react';
//import AWS from 'aws-sdk';
import CloudSearchDomain from 'aws-sdk';

import{
  Form,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';

var AWS = require('aws-sdk');
//var csd = new AWS.CloudSearchDomain('params', err, data)
var s3 = new AWS.S3();
s3.listBuckets(function(err, data) { console.log(err, data); });

//csd.search('params', function (err, data) {
  //if (err) console.log(err, err.stack); // an error occurred
  //else     console.log(data);           // successful response
//});
/*handle = (event, context, callback) => {

    var csd = new AWS.CloudSearchDomain({
        endpoint: 'search-doclistv1-erg3n4rqpc76y24zscxrohyj34.us-east-1.cloudsearch.amazonaws.com',
        apiVersion: '2013-01-01'
    });

    var params = {
        query: event.query,
        sort: '_score desc',
        size: event.size, // number of documents to return
        start: event.start, // start index of document list to return (cf multi tab)
        queryOptions: JSON.stringify({fields: ['content']}),
    };
    // see documentation at :
    // docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudSearchDomain.html#search-property
    csd.search(params, function(err, data) {
        if (err) {
            callback('CloudSearch ERROR');
            context.done();
        }
        else {
            callback(null, data); // SUCCESS
            context.done();
        }
    });
};
*/
const Search = () =>(
  <Form inline>
  <FormGroup controlId="formInlineEmail">
    <FormControl type="search" placeholder="enter something..." />
  </FormGroup>
  {' '}
  <Button type="submit">
    search
  </Button>
</Form>




);


export default Search;
