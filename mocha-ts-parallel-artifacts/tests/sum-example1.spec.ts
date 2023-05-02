import { assert } from "chai";
import { addition } from "../src/sum";

// const { TRArtifacts } = require('/home/vitalii/tomato-testreporter/reporter');

describe("Sum Tests", () => {
    beforeEach(function() {
        console.log("Before each msg");
    });    
    // Test Case 1
    it("should return 15 when 12 is added to 3", () => {
        const result = addition(12, 3);
        assert.equal(result, 15);
        // SEND artifacts
        // await TRArtifacts.artifact({ name: 'Screenshot-FAIL-1', path: `${process.cwd()}/tests/img/scrren-test-1.png` }, this);
        // await TRArtifacts.artifact({ name: 'Screenshot-FAIL-2', path: `${process.cwd()}/tests/img/scrren-test-2.png` }, this);
    });
});