var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5000",
        "ok": "1365",
        "ko": "3635"
    },
    "minResponseTime": {
        "total": "1476",
        "ok": "4645",
        "ko": "1476"
    },
    "maxResponseTime": {
        "total": "86226",
        "ok": "85930",
        "ko": "86226"
    },
    "meanResponseTime": {
        "total": "19601",
        "ok": "30033",
        "ko": "15684"
    },
    "standardDeviation": {
        "total": "16691",
        "ok": "13593",
        "ko": "16050"
    },
    "percentiles1": {
        "total": "15907",
        "ok": "29667",
        "ko": "11268"
    },
    "percentiles2": {
        "total": "23480",
        "ok": "37154",
        "ko": "17831"
    },
    "percentiles3": {
        "total": "43379",
        "ok": "44463",
        "ko": "34788"
    },
    "percentiles4": {
        "total": "86058",
        "ok": "85786",
        "ko": "86107"
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
    "count": 1365,
    "percentage": 27
},
    "group4": {
    "name": "failed",
    "count": 3635,
    "percentage": 73
},
    "meanNumberOfRequestsPerSecond": {
        "total": "57.471",
        "ok": "15.69",
        "ko": "41.782"
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
        "ok": "1365",
        "ko": "3635"
    },
    "minResponseTime": {
        "total": "1476",
        "ok": "4645",
        "ko": "1476"
    },
    "maxResponseTime": {
        "total": "86226",
        "ok": "85930",
        "ko": "86226"
    },
    "meanResponseTime": {
        "total": "19601",
        "ok": "30033",
        "ko": "15684"
    },
    "standardDeviation": {
        "total": "16691",
        "ok": "13593",
        "ko": "16050"
    },
    "percentiles1": {
        "total": "15903",
        "ok": "29667",
        "ko": "11267"
    },
    "percentiles2": {
        "total": "23482",
        "ok": "37154",
        "ko": "17831"
    },
    "percentiles3": {
        "total": "43379",
        "ok": "44463",
        "ko": "34788"
    },
    "percentiles4": {
        "total": "86058",
        "ok": "85786",
        "ko": "86107"
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
    "count": 1365,
    "percentage": 27
},
    "group4": {
    "name": "failed",
    "count": 3635,
    "percentage": 73
},
    "meanNumberOfRequestsPerSecond": {
        "total": "57.471",
        "ok": "15.69",
        "ko": "41.782"
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
