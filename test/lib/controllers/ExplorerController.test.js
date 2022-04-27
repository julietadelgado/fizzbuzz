const ExplorerController = require("./../../../lib/controllers/ExplorerController");

describe("Test for ExplorerController", () => {
    test("1. Validate if returns list of explorers with mission node", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode).toEqual(
            expect.arrayContaining([
                expect.objectContaining({mission: "node"})
            ])
        );
    });
    test("2. Get Explorers UsernamesByMission", () => {
        const explorerUserNamesInNode = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorerUserNamesInNode).toContain("ajolonauta13");
    });
    test("3. Get Explorers Amount by mission", () => {
        const quantityExplorersInNode = ExplorerController.getExplorersAmonutByMission("node");
        expect(quantityExplorersInNode).toContain(10);
    });
});