import { Response, Request } from "express";

// SWAGGER API
import SwaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

import {PORT} from '../../constants'

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API documentation for the project expresslanets.",
    },
    servers: [
      {
        url:`http://localhost:${PORT ? Number(PORT) : 3000}`,
      },
    ],
  },
  apis: ["src/Documentation/Docs.ts"], // Path to the API docs
}

//Docs in JSON format
export const Docs = SwaggerUI.setup(swaggerJSDoc(options));

export const DocsJSON =  (req:Request, res:Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerJSDoc(options));
  }
 