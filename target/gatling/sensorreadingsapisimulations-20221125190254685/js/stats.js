var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "500",
        "ok": "162",
        "ko": "338"
    },
    "minResponseTime": {
        "total": "2414",
        "ok": "7816",
        "ko": "2414"
    },
    "maxResponseTime": {
        "total": "11207",
        "ok": "11207",
        "ko": "3434"
    },
    "meanResponseTime": {
        "total": "5570",
        "ok": "10809",
        "ko": "3059"
    },
    "standardDeviation": {
        "total": "3648",
        "ok": "610",
        "ko": "218"
    },
    "percentiles1": {
        "total": "3209",
        "ok": "11116",
        "ko": "3112"
    },
    "percentiles2": {
        "total": "10649",
        "ok": "11149",
        "ko": "3211"
    },
    "percentiles3": {
        "total": "11156",
        "ok": "11174",
        "ko": "3386"
    },
    "percentiles4": {
        "total": "11177",
        "ok": "11195",
        "ko": "3418"
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
    "count": 162,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "count": 338,
    "percentage": 68
},
    "meanNumberOfRequestsPerSecond": {
        "total": "41.667",
        "ok": "13.5",
        "ko": "28.167"
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
        "ok": "162",
        "ko": "338"
    },
    "minResponseTime": {
        "total": "2414",
        "ok": "7816",
        "ko": "2414"
    },
    "maxResponseTime": {
        "total": "11207",
        "ok": "11207",
        "ko": "3434"
    },
    "meanResponseTime": {
        "total": "5570",
        "ok": "10809",
        "ko": "3059"
    },
    "standardDeviation": {
        "total": "3648",
        "ok": "610",
        "ko": "218"
    },
    "percentiles1": {
        "total": "3209",
        "ok": "11116",
        "ko": "3112"
    },
    "percentiles2": {
        "total": "10649",
        "ok": "11149",
        "ko": "3211"
    },
    "percentiles3": {
        "total": "11156",
        "ok": "11174",
        "ko": "3386"
    },
    "percentiles4": {
        "total": "11177",
        "ok": "11195",
        "ko": "3418"
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
    "count": 162,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "count": 338,
    "percentage": 68
},
    "meanNumberOfRequestsPerSecond": {
        "total": "41.667",
        "ok": "13.5",
        "ko": "28.167"
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