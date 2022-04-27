const ExplorerController = require("./../../../lib/controllers/ExplorerController")

describe("Test for ExplorerController", () => {
    test("1. Validate if returns list of explorers with mission node", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node")
        expect(explorersInNode).toEqual(
            expect.arrayContaining([
                expect.objectContaining({mission: "node"})
            ])
        );
    });
});