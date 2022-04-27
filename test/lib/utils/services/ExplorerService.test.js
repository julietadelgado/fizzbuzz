const Reader = require("./../../../../lib/utils/Reader")
const ExplorerService = require("./../../../../lib/utils/services/ExplorerService")

describe("Test for ExplorerService", () => {
    test("1. Validate if filter array has node mission", () => {
        const explorers = Reader.readJsonFile("./explorers.json")
        const explorersInNode = ExplorerService.filterByMission(explorers, "node")
        expect(explorersInNode).toEqual(
            expect.arrayContaining([
              expect.objectContaining({mission: "node"})
            ])
        );
    })
})