export function timeSinceCalc(date){
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
        return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
}

export function viewsSigFig(views){
    function moveDecimal(rawNum) {
        return Math.abs(Number(rawNum)) >= 1.0e+9
        ? Math.abs(Number(rawNum)) / 1.0e+9 + "B"
        : Math.abs(Number(rawNum)) >= 1.0e+6
        ? Math.abs(Number(rawNum)) / 1.0e+6 + "M"
        : Math.abs(Number(rawNum)) >= 1.0e+3
        ? Math.abs(Number(rawNum)) / 1.0e+3 + "K"
        : Math.abs(Number(rawNum));
    }
    let viewsInt = parseInt(views,10);
    let viewsDec = moveDecimal(viewsInt);
    return parseFloat(viewsDec).toPrecision(2) + viewsDec.replace(/[^B|M|K]/g,"");
}

export function addCommas(inputNum){
    return inputNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",") ;

}