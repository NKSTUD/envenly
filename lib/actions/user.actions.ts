
// Ce sont les actions de la base de données


import {CreateUserParams} from "@/types";
import {handleError} from "@/lib/utils";
import {connectToDatabase} from "@/lib/mongodb/database";
import User from "@/lib/database/models/user.model";

export const createUser = async (user: CreateUserParams) => {

    try {
        await connectToDatabase();
        const newUser = await User.create(user);

        return JSON.parse(JSON.stringify(newUser));
    }
    catch (error) {
       handleError(error)
    }

}
