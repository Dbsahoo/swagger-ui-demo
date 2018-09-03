# Aerobatic Swagger UI Demo

Sample project demonstrating how to bootstrap a swagger site and host it on Aerobatic. View the live demo at https://swagger-ui-demo.aerobaticapp.com/. The [companion blog post](https://www.aerobatic.com/blog/hosting-swagger-api-documentation) goes into more detail.

## Steps

1. Clone or download this repo
2. Run `aero create` or `aero create -n your-site-name` from the root of the repo
3. `npm install`
4. `aero deploy`

## Connect to swagger definition

The demo uses the sample Pet Store API. To install your own API definition, you can use one of the following 2 techniques:

- Point to the swagger JSON definition via a remote URL

  ```js
  import petStoreSwagger from "./petstore-swagger.json";

  SwaggerUI({
    dom_id: "#ui",
    spec: petStoreSwagger
  });
  ```

- Place the swagger JSON file within this project and import it directly

  ```js
  SwaggerUI({
    dom_id: "#ui",
    url: "http://petstore.swagger.io/v2/swagger.json"
  });
  ```
