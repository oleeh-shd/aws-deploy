import { myDataSource } from "../../app-data-source";
import { User } from "../../entity/user.entity";

const findById = async (id: string) => {
    return myDataSource.getRepository(User).findOne({
        where: {
            id: Number(id),
        },
    });
};

export const createUser = async (name: string) => {
    const user = myDataSource.getRepository(User).create({ name });
    const results = await myDataSource.getRepository(User).save(user);
    return results;
};

export const getUsers = async () => {
    return myDataSource.getRepository(User).find();
};

export const getUserById = async (id: string) => {
    return findById(id);
};

export const updateUser = async (id: string, newName: string) => {
    const user = await findById(id);

    if (!user) return;

    myDataSource.getRepository(User).update(user, { name: newName });
};

export const deleteUser = async (id: string) => {
    const user = await findById(id);

    if (!user) return;

    myDataSource.getRepository(User).remove(user);
};
