import prismaClient from "../../prisma";

class UpdateUserService {
    async execute(
        user_id: string,
        name: string,
        email: string,
        password: string,
        authorized: boolean, // Corrected parameter name
        deleted: boolean,
        active: boolean,
        admin: boolean,
        avatar: string,
        updated_at: Date,
        deleted_at: Date
    ) {
        const user = await prismaClient.user.update({
            where: {
                id: user_id,
            },
            data: {
                name: name,
                email: email,
                password: password,
                authorized: authorized, // Corrected property name
                deleted: deleted,
                active: active,
                admin: admin,
                avatar: avatar,
                updated_at: updated_at,
                deleted_at: deleted_at,
            },
        });

        return user;
    }
}

class UserGetStatsService {
    async execute(user_id: string) {
        const user = await prismaClient.user.findUnique({
            where: {
                id: user_id,
            }, select: {
                authorized: true,
                avatar: true,
                
                created_at: true,
                updated_at: true,

            }
        });
    }
}

export { UpdateUserService, UserGetStatsService };
