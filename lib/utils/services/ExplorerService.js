class ExplorerService {
    static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission === mission)
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInMission = ExplorerService.filterByMission(explorers, mission)
        return explorersInMission.length
    }

    static getExplorersUsernamesByMission(explorers, mission){

    }
}

module.exports = ExplorerService