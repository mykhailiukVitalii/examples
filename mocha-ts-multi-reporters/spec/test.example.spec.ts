import { expect } from 'chai';

// const { TRArtifacts } = require('/home/xxx/reporter'); //TODO: path To local reporter

describe("Array", function() {
  let arr;

  beforeEach(function() {
    arr = [1, 2, 3];
  });
  // Custom artifacts line
  afterEach(async function() {
    //TODO: old version
    // global.testomatioArtifacts.push(process.cwd() + '/spec/scrren-test-1.png');
    // global.testomatioArtifacts.push({ name: 'Screenshot-FAIL-1', path: `${process.cwd()}/spec/scrren-test-1.png` });

    //new version
    // await TRArtifacts.artifact({ name: 'Screenshot-FAIL-1', path: `${process.cwd()}/spec/scrren-test-1.png` });
  });

  // Test Case 1
  it("should return -1 when the value is not present", function() {
    expect(arr.indexOf(4)).to.equal(-1);
  });

  // Test Case 2
  it("should return the index of the element when it is present", function() {
    expect(arr.indexOf(2)).to.equal(1);
  });

  // // Test Case 3
  it("should return the length of the array after adding an element", function() {
    arr.push(4);
    expect(arr.length).to.equal(3);
  });
});

