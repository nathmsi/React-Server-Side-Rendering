import jwt from 'jsonwebtoken';
import db from "../db/database";

const SECRET_KEY = 'some key'; // process.env.SECRET_KEY

function requireAuth (req, res, next) {  
    try {
        if (req.headers) {
            const { authorization } = req.headers;
            if (!authorization) { // exist authorization in header
                res.status(401).json({
                    success: false,
                    message: `token not found`
                });
            }

            const token = authorization.replace('Bearer ', '');
            jwt.verify(token, SECRET_KEY, async function (err, payload) {  // jwt verify token
                if (err) {
                    res.status(401).json({
                        success: false,
                        message: `token not valid`
                    });
                } else {
                    const { email } = payload;
                    //console.log(`email ${email} authorization access`);
                    db.get(`SELECT * FROM user WHERE email  = ?`, [email], (err, row) => {  // user email exist in the database table user
                        if (err) {
                            res.status(401).json({
                                success: false,
                                message: `token failed user not found`
                            });
                        } else if (row) {
                            req.email = email;
                            next();
                        } else {
                            res.status(401).json({
                                success: false,
                                message: `token failed user not found`
                            });
                        }
                    });
                }
            })
        } else {
            res.status(401).json({
                success: false,
                message: `token failed`
            });
        }
    }
    catch (err) {
        res.status(401).json({
            success: false,
            message: `token failed`
        });
    }
}


export default requireAuth;