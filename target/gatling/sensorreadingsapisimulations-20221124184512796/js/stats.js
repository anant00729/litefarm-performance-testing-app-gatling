var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "237",
        "ko": "9763"
    },
    "minResponseTime": {
        "total": "2370",
        "ok": "7137",
        "ko": "2370"
    },
    "maxResponseTime": {
        "total": "40624",
        "ok": "40624",
        "ko": "38896"
    },
    "meanResponseTime": {
        "total": "17319",
        "ok": "16715",
        "ko": "17333"
    },
    "standardDeviation": {
        "total": "6462",
        "ok": "7909",
        "ko": "6422"
    },
    "percentiles1": {
        "total": "16914",
        "ok": "16944",
        "ko": "16915"
    },
    "percentiles2": {
        "total": "20256",
        "ok": "21099",
        "ko": "20254"
    },
    "percentiles3": {
        "total": "29370",
        "ok": "32223",
        "ko": "29348"
    },
    "percentiles4": {
        "total": "35965",
        "ok": "32798",
        "ko": "35967"
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
    "count": 237,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 9763,
    "percentage": 98
},
    "meanNumberOfRequestsPerSecond": {
        "total": "232.558",
        "ok": "5.512",
        "ko": "227.047"
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
        "total": "10000",
        "ok": "237",
        "ko": "9763"
    },
    "minResponseTime": {
        "total": "2370",
        "ok": "7137",
        "ko": "2370"
    },
    "maxResponseTime": {
        "total": "40624",
        "ok": "40624",
        "ko": "38896"
    },
    "meanResponseTime": {
        "total": "17319",
        "ok": "16715",
        "ko": "17333"
    },
    "standardDeviation": {
        "total": "6462",
        "ok": "7909",
        "ko": "6422"
    },
    "percentiles1": {
        "total": "16915",
        "ok": "16944",
        "ko": "16912"
    },
    "percentiles2": {
        "total": "20256",
        "ok": "21099",
        "ko": "20254"
    },
    "percentiles3": {
        "total": "29370",
        "ok": "32223",
        "ko": "29348"
    },
    "percentiles4": {
        "total": "35965",
        "ok": "32798",
        "ko": "35967"
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
    "count": 237,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 9763,
    "percentage": 98
},
    "meanNumberOfRequestsPerSecond": {
        "total": "232.558",
        "ok": "5.512",
        "ko": "227.047"
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
