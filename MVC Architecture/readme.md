### MVC

- Model View Controller
- From the `View` we make a request that is routed to the `Controller`. From the contoller, it pushes the request to the `model` layer.
- In the `Model` layer, business logic is present. That means if we have to interact with the data which is present with us, All the database interaction is going to happen in this layer. And then they will prepare the business logic and prepare the output and forward this output to the controller and the controller will forward this back to the view.
