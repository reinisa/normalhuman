import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress:"test@gmail.com",
        firstName:"Janis",
        lastName:"Berzins"
    }
})
console.log('done')