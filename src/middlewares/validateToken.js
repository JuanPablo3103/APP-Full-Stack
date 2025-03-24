
export const authRequired = (req, res, next) => {
    const cookies = req.cookie;
    console.log(cookies);
    
    next();
}