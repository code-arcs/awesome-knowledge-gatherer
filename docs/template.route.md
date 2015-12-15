## Name of the route

#### URL
/api/isbn
 
#### Method
`POST` | `GET`| `PUT` | `DELETE`
 
#### URL Params
 
#### Data Params
 
#### Success Response
* **Code:** 200  
 **Content:** ```{field: value, field1: value1, ...}```
 
#### Error Response
* **Code:** 401 UNAUTHORIZED  
 **Content:** `{error: 'Invalid credentials!'}`
 
#### Sample Call
```javascript
     $http.post("/url", {data: value})
         .then(function (response) {
             return response;
         });
```
 
#### Notes
