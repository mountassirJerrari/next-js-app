import { createJWT } from '@/lib/auth'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { serialize } from "cookie";



export default async function handler(req: any, res: any) {
    if (req.method === "POST") {
        if (!req.body.username || !req.body.password || req.body.username =='' || req.body.password == '') {
            return res.status(200).json({success:false , message :"all fields are required"})
        }
        let user = await prisma.user.findFirst({
            where: {
                username: req.body.username
            }
        })
        

        if (user && user.password == req.body.password) {
            const jwt = await createJWT(user);
            res.setHeader(
                "Set-Cookie",
                serialize('user-token', jwt, {
                    httpOnly: true,
                    path: "/",
                    maxAge: 60 * 60 * 24 * 7,
                })
            );
            return res.status(200).json({ success: true })
        }
        return res.status(200).json({ success: false  , message:"incorrect credentials" })


    }
}
