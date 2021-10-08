"use strict";
function sendData(message, cb) {
    console.log(message);
    cb(message);
}
function generateErrorMessage(message, code) {
    throw ({
        message: {
            text: message[0],
            status: message[1]
        },
        code
    });
}
// sendData("HTTP Code", (message: string) => {
//     console.log("It succeded in sending this - " + message);
// });
generateErrorMessage(["User login failed", false], 400);
