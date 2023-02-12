import db from "../../config/database/databaseConnection.js";
import { customerSchema } from "../../model/schemas/customerSchema.js";

export async function customerExistsMiddleware(req, res, next){
const {cpf } = req.body

try{

    const exists = await db.query("SELECT * FROM customers WHERE cpf = $1;", [cpf])
    if(exists.rows){
        res.status(409).send(error.message)
    }
    console.log(cpf, exists.rows)
    next();
}catch(error){
    return res.status(500).send(error)
}

}