# Performance Testing of API for LiteFarm using Gatling 

## Use cases for Gatling 
Use cases in which we currently utilize gatling at LiteFarm include:
- To test out the performance of add readings api webhook.
- More API request can be added to the SensorReadingsAPISimulations to the performance. 

## Set up

- Go to https://gatling.io/docs/gatling/tutorials/installation/ and check out https://www.youtube.com/watch?v=TeVB2tyeWyw to setup gatling in your local system.
- After installation, got to the src/scala/simulations/engine file. 
- Right click engine file and select "Run engine".  
- This will run the files under simulation folder and will generate a performance test report.
- Go to target/gatling/<test-report>/index.html and open the same file in the brower

You would find a report that will look like this: 



