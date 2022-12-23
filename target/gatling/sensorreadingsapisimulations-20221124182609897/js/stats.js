var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "250",
        "ok": "1",
        "ko": "249"
    },
    "minResponseTime": {
        "total": "1578",
        "ok": "1578",
        "ko": "60004"
    },
    "maxResponseTime": {
        "total": "60340",
        "ok": "1578",
        "ko": "60340"
    },
    "meanResponseTime": {
        "total": "59933",
        "ok": "1578",
        "ko": "60168"
    },
    "standardDeviation": {
        "total": "3700",
        "ok": "0",
        "ko": "108"
    },
    "percentiles1": {
        "total": "60142",
        "ok": "1578",
        "ko": "60142"
    },
    "percentiles2": {
        "total": "60286",
        "ok": "1578",
        "ko": "60286"
    },
    "percentiles3": {
        "total": "60328",
        "ok": "1578",
        "ko": "60328"
    },
    "percentiles4": {
        "total": "60338",
        "ok": "1578",
        "ko": "60338"
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
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 249,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.098",
        "ok": "0.016",
        "ko": "4.082"
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
        "total": "250",
        "ok": "1",
        "ko": "249"
    },
    "minResponseTime": {
        "total": "1578",
        "ok": "1578",
        "ko": "60004"
    },
    "maxResponseTime": {
        "total": "60340",
        "ok": "1578",
        "ko": "60340"
    },
    "meanResponseTime": {
        "total": "59933",
        "ok": "1578",
        "ko": "60168"
    },
    "standardDeviation": {
        "total": "3700",
        "ok": "0",
        "ko": "108"
    },
    "percentiles1": {
        "total": "60142",
        "ok": "1578",
        "ko": "60142"
    },
    "percentiles2": {
        "total": "60286",
        "ok": "1578",
        "ko": "60286"
    },
    "percentiles3": {
        "total": "60328",
        "ok": "1578",
        "ko": "60328"
    },
    "percentiles4": {
        "total": "60338",
        "ok": "1578",
        "ko": "60338"
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
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 249,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.098",
        "ok": "0.016",
        "ko": "4.082"
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
