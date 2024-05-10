var exec = require('cordova/exec');

modeule.exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'OfflineStore', 'coolMethod', [arg0]);
};

modeule.exports.add = function (arg0,success,error)
{

    exec(success.error,'OfflineStore','add',[arg0]);
}
