var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "999",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "2467",
        "ok": "2467",
        "ko": "10597"
    },
    "maxResponseTime": {
        "total": "31710",
        "ok": "31710",
        "ko": "10597"
    },
    "meanResponseTime": {
        "total": "18873",
        "ok": "18882",
        "ko": "10597"
    },
    "standardDeviation": {
        "total": "7005",
        "ok": "7003",
        "ko": "0"
    },
    "percentiles1": {
        "total": "19078",
        "ok": "19127",
        "ko": "10597"
    },
    "percentiles2": {
        "total": "24714",
        "ok": "24726",
        "ko": "10597"
    },
    "percentiles3": {
        "total": "29315",
        "ok": "29318",
        "ko": "10597"
    },
    "percentiles4": {
        "total": "30322",
        "ok": "30322",
        "ko": "10597"
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
    "count": 999,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "31.25",
        "ok": "31.219",
        "ko": "0.031"
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
        "total": "1000",
        "ok": "999",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "2467",
        "ok": "2467",
        "ko": "10597"
    },
    "maxResponseTime": {
        "total": "31710",
        "ok": "31710",
        "ko": "10597"
    },
    "meanResponseTime": {
        "total": "18873",
        "ok": "18882",
        "ko": "10597"
    },
    "standardDeviation": {
        "total": "7005",
        "ok": "7003",
        "ko": "0"
    },
    "percentiles1": {
        "total": "19078",
        "ok": "19127",
        "ko": "10597"
    },
    "percentiles2": {
        "total": "24714",
        "ok": "24726",
        "ko": "10597"
    },
    "percentiles3": {
        "total": "29315",
        "ok": "29318",
        "ko": "10597"
    },
    "percentiles4": {
        "total": "30322",
        "ok": "30322",
        "ko": "10597"
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
    "count": 999,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "31.25",
        "ok": "31.219",
        "ko": "0.031"
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
