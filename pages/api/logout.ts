
import { serialize } from "cookie";



export default async function handler(req: any, res: any) {
    if (req.method === "POST") {


    
          
            res.setHeader(
                "Set-Cookie",
                serialize('user-token','', {
                    httpOnly: true,
                    path: "/",
                    maxAge:1,
                })
            );
            return res.status(200).json({ success: true })
     


    }
}
