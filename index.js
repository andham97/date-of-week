'use strict';
module.exports = function (dayOfWeek) {
    dayOfWeek = Math.floor(dayOfWeek);
    if(dayOfWeek < 0 || dayOfWeek > 6)
        return null;
    var date = new Date();
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    date.setMilliseconds(999);
    var resultDate = new Date(date.getTime());

    resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);

    return resultDate;
};