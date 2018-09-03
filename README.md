# Aerobatic Swagger UI Demo

Sample project demonstrating how to bootstrap a swagger site and host it on Aerobatic. View the live demo at https://swagger-ui-demo.aerobaticapp.com/. The [companion blog post](https://www.aerobatic.com/blog/hosting-swagger-api-documentation) goes into more detail. A simple React shell is bootstrapped using [create-react-app](https://github.com/facebook/create-react-app).

## Steps

1. [Download](https://github.com/aerobatic/swagger-ui-demo/archive/master.zip) this repo and unzip
2. Run `aero create` or `aero create -n your-site-name` from the root of the repo
3. `npm install`
4. `npm run build`
5. `aero deploy`

## Connect to swagger definition

The demo uses the sample [Pet Store API](http://petstore.swagger.io/v2/swagger.json). To install your own API definition, you can use one of the following 2 techniques:

- Package the swagger JSON file in the website app bundle:

  ```js
  import petStoreSwagger from "./petstore-swagger.json";

  SwaggerUI({
    dom_id: "#ui",
    spec: petStoreSwagger
  });
  ```

- Download the JSON file from a remote URL:

  ```js
  SwaggerUI({
    dom_id: "#ui",
    url: "http://petstore.swagger.io/v2/swagger.json"
  });
  ```
