# Performance Testing of APIs for LiteFarm project using Gatling 

## Use cases for Gatling 
Use cases in which we currently utilize gatling at LiteFarm include:
- To test out the performance of add readings api webhook.
- More API request can be added to the SensorReadingsAPISimulations to the performance. 

## Set up

- Go to [gatling docs to read about the scala implementation](https://gatling.io/docs/gatling/tutorials/installation/) and check out [this video](https://www.youtube.com/watch?v=TeVB2tyeWyw) to setup gatling in your local system.
- After installation, got to the src/scala/simulations/engine file. 
- Right click engine file and select "Run engine".  
- This will run the files under simulation folder and will generate a performance test report.
- Go to target/gatling/<test-report>/index.html and open the same file in the brower

You would find a report that will look like this: 

<img width="1083" alt="Screen Shot 2022-12-23 at 4 08 30 PM" src="https://user-images.githubusercontent.com/20675885/209414613-c355ff92-bd30-471d-b5ae-21616869c28e.png">


