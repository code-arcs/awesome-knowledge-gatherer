# Add Book Route
Adds a book to the gathered information. Makes use of Amazon Web Service by performing an ISBN lookup.

#### URL  
/api/isbn
 
#### Method
`POST`
  
#### Success Response
* **Code:** 200  
 **Content:** ```{
                   title: 'JavaScript: The Good Parts: Working with the Shallow Grain of JavaScript',  
                   isbn: '0596517742',  
                   author: ['Douglas Crockford'],  
                   edition: '1',  
                   publisher: ['O\'Reilly and Associates'],  
                   numberOfPages: '170'  
               }```
 
#### Error Response
* **Code:** 400 BAD REQUEST  
 **Content:** `{error: 'You provided an invalid ISBN!'}`

OR

* **Code:** 400 BAD REQUEST  
 **Content:** `{ error : "<AWS error message>" }`
 
#### Sample Call
```javascript
     $http.post("/api/isbn", {isbn: <isbn number>})
         .then(function (response) {
             return response;
         });
```