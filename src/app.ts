import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// application routes
import userRoutes from './app/modules/user/user.route'

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.get("/api/v1/user", userRoutes);
app.use('/api/v1/user',userRoutes)

export default app;








// inserting a text data into mongodb
/*
    step-1 : Interface -dode
    step-2 : schema -done
    step-3 : model - done
    step-4 : Database query on Model -done
    
    */

// creating an interface
// creating schema using interface

// pattern MVC=> model,view,controller ,
//modular => route,utils,interface,

/*

 1.interface = interface.ts
 2. schema, Model = model.ts

 route 
 3.route function = controler.ts
 4. database query function = service.ts

*/
