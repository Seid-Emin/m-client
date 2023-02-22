type userType = {
    roleId: number
}

export const userUtils = {
    // emailValidateFunction(rule, value, callback) {
    //     const [email, agency] = value.split('?');
    //
    //     if (agency) {
    //         return callback();
    //     }
    //
    //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) { // eslint-disable-line
    //         return callback();
    //     }
    //
    //     return callback({});
    // },
    // nameValidateFunction(rule, value, callback) {
    //     const names = value.split(' ');
    //
    //     var letters = /^[A-Za-z]+$/;
    //     if (names.find(name => {
    //         return !(letters.test(name));
    //     })) {
    //         return callback({});
    //     }
    //
    //     return callback();
    // },
    isAdmin(user: userType) {
        return user.roleId === 1
    },
    isSupport(user: userType) {
        return user.roleId === 2
    }
};
