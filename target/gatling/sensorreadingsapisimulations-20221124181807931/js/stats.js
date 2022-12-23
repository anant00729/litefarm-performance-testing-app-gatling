var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "500",
        "ok": "214",
        "ko": "286"
    },
    "minResponseTime": {
        "total": "1917",
        "ok": "6582",
        "ko": "1917"
    },
    "maxResponseTime": {
        "total": "20204",
        "ok": "20204",
        "ko": "2614"
    },
    "meanResponseTime": {
        "total": "9411",
        "ok": "18871",
        "ko": "2333"
    },
    "standardDeviation": {
        "total": "8292",
        "ok": "2038",
        "ko": "170"
    },
    "percentiles1": {
        "total": "2522",
        "ok": "19434",
        "ko": "2379"
    },
    "percentiles2": {
        "total": "19302",
        "ok": "19808",
        "ko": "2460"
    },
    "percentiles3": {
        "total": "20007",
        "ok": "20096",
        "ko": "2558"
    },
    "percentiles4": {
        "total": "20145",
        "ok": "20193",
        "ko": "2592"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 214,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 286,
    "percentage": 57
},
    "meanNumberOfRequestsPerSecond": {
        "total": "23.81",
        "ok": "10.19",
        "ko": "13.619"
    }
},
contents: {
"req_add-readings-eebcf": {
        type: "REQUEST",
        name: "add readings",
path: "add readings",
pathFormatted: "req_add-readings-eebcf",
stats: {
    "name": "add readings",
    "numberOfRequests": {
        "total": "500",
        "ok": "214",
        "ko": "286"
    },
    "minResponseTime": {
        "total": "1917",
        "ok": "6582",
        "ko": "1917"
    },
    "maxResponseTime": {
        "total": "20204",
        "ok": "20204",
        "ko": "2614"
    },
    "meanResponseTime": {
        "total": "9411",
        "ok": "18871",
        "ko": "2333"
    },
    "standardDeviation": {
        "total": "8292",
        "ok": "2038",
        "ko": "170"
    },
    "percentiles1": {
        "total": "2522",
        "ok": "19434",
        "ko": "2379"
    },
    "percentiles2": {
        "total": "19302",
        "ok": "19808",
        "ko": "2460"
    },
    "percentiles3": {
        "total": "20007",
        "ok": "20096",
        "ko": "2558"
    },
    "percentiles4": {
        "total": "20145",
        "ok": "20193",
        "ko": "2592"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 214,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 286,
    "percentage": 57
},
    "meanNumberOfRequestsPerSecond": {
        "total": "23.81",
        "ok": "10.19",
        "ko": "13.619"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
