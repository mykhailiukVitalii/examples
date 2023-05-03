import { assert } from "chai";
import { addition } from "../src/sum";
import { TRArtifacts } from "@testomatio/reporter";

describe("Sum Tests", () => {
    beforeEach(function() {
        console.log("Before each msg");
    });    
    // Test Case 1
    it("should return 5 when 2 is added to 3", async () => {
        const result = addition(2, 3);
        assert.equal(result, 5);
        // SEND artifacts
        await TRArtifacts.artifact({ name: 'Screenshot-FAIL-1', path: `${process.cwd()}/tests/img/scrren-test-1.png` }, this);
        await TRArtifacts.artifact({ name: 'Screenshot-FAIL-2', path: `${process.cwd()}/tests/img/scrren-test-2.png` }, this);
    });
});