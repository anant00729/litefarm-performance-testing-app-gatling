var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "300",
        "ok": "243",
        "ko": "57"
    },
    "minResponseTime": {
        "total": "1437",
        "ok": "5615",
        "ko": "1437"
    },
    "maxResponseTime": {
        "total": "26049",
        "ok": "26049",
        "ko": "2729"
    },
    "meanResponseTime": {
        "total": "20606",
        "ok": "25026",
        "ko": "1760"
    },
    "standardDeviation": {
        "total": "9261",
        "ok": "1734",
        "ko": "229"
    },
    "percentiles1": {
        "total": "25015",
        "ok": "25217",
        "ko": "1719"
    },
    "percentiles2": {
        "total": "25531",
        "ok": "25641",
        "ko": "1776"
    },
    "percentiles3": {
        "total": "25927",
        "ok": "25957",
        "ko": "2005"
    },
    "percentiles4": {
        "total": "26015",
        "ok": "26016",
        "ko": "2721"
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
    "count": 243,
    "percentage": 81
},
    "group4": {
    "name": "failed",
    "count": 57,
    "percentage": 19
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.111",
        "ok": "9",
        "ko": "2.111"
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
        "total": "300",
        "ok": "243",
        "ko": "57"
    },
    "minResponseTime": {
        "total": "1437",
        "ok": "5615",
        "ko": "1437"
    },
    "maxResponseTime": {
        "total": "26049",
        "ok": "26049",
        "ko": "2729"
    },
    "meanResponseTime": {
        "total": "20606",
        "ok": "25026",
        "ko": "1760"
    },
    "standardDeviation": {
        "total": "9261",
        "ok": "1734",
        "ko": "229"
    },
    "percentiles1": {
        "total": "25015",
        "ok": "25217",
        "ko": "1719"
    },
    "percentiles2": {
        "total": "25531",
        "ok": "25641",
        "ko": "1776"
    },
    "percentiles3": {
        "total": "25927",
        "ok": "25957",
        "ko": "2005"
    },
    "percentiles4": {
        "total": "26015",
        "ok": "26016",
        "ko": "2721"
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
    "count": 243,
    "percentage": 81
},
    "group4": {
    "name": "failed",
    "count": 57,
    "percentage": 19
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.111",
        "ok": "9",
        "ko": "2.111"
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
