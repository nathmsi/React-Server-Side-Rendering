import db  from "../db/database";


export const getlistCandidates =  (req, res) => {
    try {
        db.all( `SELECT * FROM candidate` , [], (err, rows) => { // get from table candidate 
            if (err) {
                res.status(401).json({
                    success: false,
                    message: `error get list candidates`
                });
            }
            res.status(200).json({
                success: true,
                candidates: rows
            });
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            message: `error get list candidates`
        });
    }
};