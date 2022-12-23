var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5000",
        "ok": "136",
        "ko": "4864"
    },
    "minResponseTime": {
        "total": "4173",
        "ok": "8841",
        "ko": "4173"
    },
    "maxResponseTime": {
        "total": "23274",
        "ok": "17885",
        "ko": "23274"
    },
    "meanResponseTime": {
        "total": "11952",
        "ok": "15667",
        "ko": "11848"
    },
    "standardDeviation": {
        "total": "5392",
        "ok": "2997",
        "ko": "5407"
    },
    "percentiles1": {
        "total": "10695",
        "ok": "17760",
        "ko": "10619"
    },
    "percentiles2": {
        "total": "12248",
        "ok": "17843",
        "ko": "12122"
    },
    "percentiles3": {
        "total": "22290",
        "ok": "17863",
        "ko": "22309"
    },
    "percentiles4": {
        "total": "22919",
        "ok": "17867",
        "ko": "22942"
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
    "count": 136,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 4864,
    "percentage": 97
},
    "meanNumberOfRequestsPerSecond": {
        "total": "200",
        "ok": "5.44",
        "ko": "194.56"
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
        "total": "5000",
        "ok": "136",
        "ko": "4864"
    },
    "minResponseTime": {
        "total": "4173",
        "ok": "8841",
        "ko": "4173"
    },
    "maxResponseTime": {
        "total": "23274",
        "ok": "17885",
        "ko": "23274"
    },
    "meanResponseTime": {
        "total": "11952",
        "ok": "15667",
        "ko": "11848"
    },
    "standardDeviation": {
        "total": "5392",
        "ok": "2997",
        "ko": "5407"
    },
    "percentiles1": {
        "total": "10695",
        "ok": "17760",
        "ko": "10616"
    },
    "percentiles2": {
        "total": "12248",
        "ok": "17843",
        "ko": "12122"
    },
    "percentiles3": {
        "total": "22290",
        "ok": "17863",
        "ko": "22309"
    },
    "percentiles4": {
        "total": "22919",
        "ok": "17867",
        "ko": "22942"
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
    "count": 136,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 4864,
    "percentage": 97
},
    "meanNumberOfRequestsPerSecond": {
        "total": "200",
        "ok": "5.44",
        "ko": "194.56"
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
