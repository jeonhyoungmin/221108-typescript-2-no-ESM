import testComponent from "./testComponent";

function a(plusParameter: number){
  return plusParameter + testComponent(4, 5);
}

console.log(a(50));