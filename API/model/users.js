const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middelware/authenticate"); 

class Users {
    fetchUsers(req, res) {
        const query = `
            SELECT user_id, firstName, lastName, email, userPass, profile_image_url, cellNum, userRole 
            FROM Users;
        `;
        db.query(query, (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while fetching users.",
                });
            }
            res.json({
                status: res.statusCode,
                results,
            });
        });
    }

    fetchUser(req, res) {
        const query = `
            SELECT user_id, firstName, lastName, email, userPass, profile_image_url, cellNum, userRole
            FROM Users
            WHERE user_id = ${req.params.id};
        `;
        db.query(query, (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while fetching user.",
                });
            }
            res.json({
                status: res.statusCode,
                results,
            });
        });
    }


    updateUser(req, res) {
        const query = `
            UPDATE Users SET ? WHERE user_id = ${req.params.id};
        `;
        db.query(query, [req.body], (err) => {
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while updating the user.",
                });
            }
            res.json({
                status: res.statusCode,
                msg: "The user has been updated 👌",
            });
        });
    }

    deleteUser(req, res) {
        const query = `
            DELETE FROM Users WHERE user_id = ${req.params.id};
        `;
        db.query(query, (err) => {
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while deleting the user.",
                });
            }
            res.json({
                status: res.statusCode,
                msg: "The user has been deleted",
            });
        });
    }

    async register(req, res) {
        const data = req.body;
        
        try {
            data.userPass = await hash(data.userPass, 15);
            
            const user = {
                emailAdd: data.email,
                userPass: data.userPass
            };
            
            const query = `
                INSERT INTO Users SET ?;
            `;
            
            db.query(query, [data], (err) => {
                if (err) {
                    return res.status(500).json({
                        status: res.statusCode,
                        error: "An error occurred while registering the user.",
                    });
                }
                let token = createToken(user);
                res.cookie("LegitUser", token, {
                    maxAge: 3600000,
                    httpOnly: true,
                });
                res.json({
                    token,
                    status: res.statusCode,
                    msg: "You have been registered",
                });
            });
        } catch (error) {
            return res.status(500).json({
                status: res.statusCode,
                error: "An error occurred while registering the user.",
            });
        }
    }
    login(req, res) {
        const { email, userPass } = req.body;
        const query = `
            SELECT user_id, firstName, lastName, email, userPass, profile_image_url, cellNum, userRole
            FROM Users
            WHERE email = ?;
        `;
        db.query(query, [email], (err, result) => {
           console.log(err);
            if (err) {
                return res.status(500).json({
                    status: res.statusCode,
                    error: "An error occurred while logging in.",
                });
            }
            if (!result?.length) {
                return res.json({
                    status: res.statusCode,
                    msg: "That email does not exist.",
                });
            } else {
                compare(userPass, result[0].userPass, (cErr, cResult) => {
                    if (cErr) {
                        return res.status(500).json({
                            status: res.statusCode,
                            error: "An error occurred while comparing passwords.",
                        });
                    }
                    const token = createToken({
                        email,
                        userPass,
                    });
                    if (cResult) {
                        res.json({
                            msg: "You've successfully logged in.",
                            token,
                            result: result[0],
                        });
                    } else {
                        res.json({
                            status: res.statusCode,
                            msg: "Invalid password or you are not registered.",
                        });
                    }
                });
            }
        });
      }
}

module.exports = Users;
