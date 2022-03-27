"use strict";

const output = {
    login: (req, res) => {
        res.render("home/login");
    },
    home: (reg, res) => {
        res.render("home/main");
    },
};

const users = {
    id: ["yj1234"],
    psword: ["1234"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;
        
        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "login failed.",
        });
    },
};

module.exports = {
    output,
    process,
};