package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._


class SensorReadingsAPISimulations extends Simulation {



  val host = "http://localhost:5010/sensor/reading/partner/1/"

  //  base_path_of_request_body
  val bp_rb = "./src/test/resources/bodies"

  // http conf
  val httpConf = http.baseUrl(s"$host")
    .header("Accept", value="application/json")
    .header("content-type", value="application/json")
    .header("authorization", value="<farm_id><sensor_secrets_key>")

  // scenario
  val scn = scenario("Add Sensor Readings")
    .exec(
      http("add readings")
        .post("farm/<farm_id>")
        .body(RawFileBody(s"$bp_rb/SensorReadings.json")).asJson
        .check(status is 200)
    )
  setUp(scn.inject(atOnceUsers(5000))).protocols(httpConf)

}