import * as Jocelyn from "joi";


export const JoiValidationSchema = Jocelyn.object({
MONGODB: Jocelyn.required(),
PORT:Jocelyn.number().default(3000),
DEFAULT_LIMIT:Jocelyn.number().default(6)
})