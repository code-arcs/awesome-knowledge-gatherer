var amazon = require('amazon-product-api');
var awsConfig = require('../config/aws.config.json');

module.exports = function IsbnService(isbn) {
    var awsClient = amazon.createClient({
        awsId: awsConfig.accessKeyId,
        awsSecret: awsConfig.secretAccessKey,
        awsTag: awsConfig.tag
    });

    var options = {
        itemId: isbn,
        idType: 'ISBN',
        domain: 'webservices.amazon.de'
    };

    return awsClient.itemLookup(options)
        .then(function (results) {
            return new Book(results[0].ItemAttributes[0]);
        });

    function Book(json) {
        this.title = getProperty(json, 'Title', 0);
        this.isbn = getProperty(json, 'ISBN', 0);
        this.author = getProperty(json, 'Author');
        this.edition = getProperty(json, 'Edition', 0);
        this.publisher = getProperty(json, 'Publisher');
        this.numberOfPages = getProperty(json, 'NumberOfPages', 0);

        function getProperty(json, key, idx) {
            var value = json[key];
            if (value && idx >= 0) {
                return value[idx];
            }
            return value;
        }
    }
};
