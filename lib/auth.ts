import { User } from "@prisma/client";
import { jwtVerify, SignJWT } from "jose";
interface JwtPayload {
username : string ;
userId : string
}
export  async function verifyAuth(token:string) {
    try {
    
    const verified = jwtVerify(token , new TextEncoder().encode('secret'))
    return (await verified).payload
    
    } catch (error) {
        throw new Error("your token is not verified");
        
    }
}
export const createJWT = (user: User) => {
    // return jwt.sign({ id: user.id }, 'cookies')
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + 60 * 60 * 24 * 7;
  
    return new SignJWT({ payload: { id: user.id, username: user.username } })
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setExpirationTime(exp)
      .setIssuedAt(iat)
      .setNotBefore(iat)
      .sign(new TextEncoder().encode('secret'));
  };