/* Function to determine time elapsed since comment or video was posted */
function timeAgo(currentTime, postTime) {
    const msPerMin = 60 * 1000;
    const msPerHour = msPerMin * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const elapsedTime = currentTime - postTime;

    if (elapsedTime < msPerMin) {
        const secsAgo = Math.round(elapsedTime / 1000);
        return secsAgo === 1 ? `${secsAgo} sec ago` : `${secsAgo} secs ago`;
    } else if (elapsedTime < msPerHour) {
        const minsAgo = Math.round(elapsedTime / msPerMin);
        return minsAgo === 1 ? `${minsAgo} min ago` : `${minsAgo} mins ago`;
    } else if (elapsedTime < msPerDay) {
        const hoursAgo = Math.round(elapsedTime / msPerHour);
        return hoursAgo === 1 ? `${hoursAgo} hour ago` : `${hoursAgo} hours ago`;
    } else if (elapsedTime < msPerMonth) {
        const daysAgo = Math.round(elapsedTime / msPerDay);
        return daysAgo === 1 ? `${daysAgo} day ago` : `${daysAgo} days ago`;
    } else if (elapsedTime < msPerYear) {
        const monthsAgo = Math.round(elapsedTime / msPerMonth);
        return monthsAgo === 1 ? `${monthsAgo} month ago` : `${monthsAgo} months ago`;
    } else {
        const yearsAgo = Math.round(elapsedTime / msPerYear);
        return yearsAgo === 1 ? `${yearsAgo} year ago` : `${yearsAgo} years ago`;
    }
}

export default timeAgo;
