const FizzbuzzService = require("./../../../lib/services/FizzbuzzService")

describe("Test for FizzbuzzService", () => {
    test("1. Validate if trick was change in explorer", () => {
        const explorer1 = {name: "Explorer1", score: 1}
        FizzbuzzService.applyValidationInExplorer(explorer1) 
        expect(explorer1.trick).toBe(1) 

        const explorer3 = {name: "Explorer3", score: 3}
        FizzbuzzService.applyValidationInExplorer(explorer3)
        expect(explorer3.trick).toBe("FIZZ")

        const explorer5 = {name: "Explorer5", score: 5}
        FizzbuzzService.applyValidationInExplorer(explorer5)
        expect(explorer5.trick).toBe(5)

        const explorer15 = {name: "Explorer15", score: 15}
        FizzbuzzService.applyValidationInExplorer(explorer15)
        expect(explorer15.trick).toBe("FIZZBUZZ")
    })
})