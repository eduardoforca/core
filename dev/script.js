var utility = require('../utility');
var queueReq = utility.queueReq;
var queue = require('../queue');
queueReq(queue, "fullhistory", {
    account_id: 64997477
}, function(err, job) {
    process.exit(Number(err));
});