const { handlerErrorHttp } = require("../services/handlerErrorHttp");

const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        const { role } = user;

        const checkValueRole = roles.some((rolSingle) => role.includes(rolSingle));

        if (!checkValueRole) {
            handlerErrorHttp(res, 'USER_NOT_PERMISSIONS', 403);
            return
        }

        next();
    } catch (err) {
        handlerErrorHttp(res, 'ERROR_PERMISSIONS_NOT_ADMIN', 403);
    }
}

module.exports = checkRol;