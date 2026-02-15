import jwt from 'jsonwebtoken';
export function verifyToken(req,res,next){
    //token verification logic
    //1.get token from req(using cooli-parser)
    let signedToken=req.cookies.token//{token:""}
    if(!signesToken)
    {
        return res.status(401).json({message:"please login "})
    }
    //2.verify token(decode)
    let decodedToken=jwt.verify(signedToken,'secret_key');
    console.log("decode token:",decodedToken);
    next();
}
