# Client - Server Architecture

## Client

- Client is the frontend interface of a web or an application.

## Server

- `Server` can be a hardware or the software.
- It is hardware or software computer program that provides a server to another computer program or a difference machine

### Some Convention which exist out there for setting up API

1. REST - Most Relevant - uses JSON
2. GRPC - uses Protocol Buffer
3. SOAP - uses XML

4. **REST**

   - REST stands for Representation State Transfer
   - Every real life entity is expected to be represented as a `Resource`. ---> Eg - Movie in BookMyShow is the resource.
     Rest heavily rely on the term `resource` that is real life entity. Everything that we do in `REST` is going to be wrt Real life entity.
   - Everytime with a RESTFUL API request has to send `type/methods` of the Request.

   - In REST convention, apart from URL, data/messages are sent in JSON.

     **HTTP Request METHODS** (https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
     `Difference are in terms of REST Convention`

     - GET ----> Retrive information about the resources
     - POST ----> To Create side effects on a resource
     - PUT ----> To make complete update to a resource
     - PATCH ----> To make partial update to a resource
     - DELETE ----> To Delete a Resource

       `Main Difference`

       **_1. GET_**

       - In GET request, data is send in URL , that means it gets saved in our browser history. We can log it, cached it, etc

### 3 Ways in which we can Send the Data:

    1. Request Params  --> eg :-    /movies/blackPanther
    2. Query Params    --> eg :-    /categories/electronics?company=samsung&order=desc&filter=price
    3. Request Body    --> It is separate payload/body that is send apart from the request.

- POSTMAN -> Postman will help us to, without writing any frontend we can hit Request to a URL.

CRUD API - CREATE READ UPDATE DELETE
API Based Developement is the the future.

- Monolithics ---> Monolith is an architecture to build a project in which Every service that we have to give to the end user is written inside the same project.
  ---> Problem with Monolithic application is that : the more complex the app become, the more complex is to maintain the application.
  That's why there is a concept of `microservices` came into the pictures.

### Microservices :

    - Microservices isolate every different service all together. So there will be different process running for an authetication, there will be different server/process running for email/messages.
