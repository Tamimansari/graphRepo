new entrys
async function nmae(){
    if(this.getData("hasPath")){
        let newRepo  = await window.repoPath.getDir();
        if(newRepo){
            this.setData('hasPath' , false)
            this.setData('currentRepo', newRepo);
        }
    }else{
        let oldRepo = await window.cacheData.lastUsedRepo();
        if(oldRepo){
            this.setData('hasPath' , false)
            this.setData('currentRepo', oldRepo);
        }
    }
        let path = this.getData('currentRepo');
        const status =  await window.gitCommit.status(path);
        this.setData('gitStatus' , status);
        const initCall = await window.gitCommit.init(path);
        var currentBranch = await window.gitCommit.currentBranch(path);;
        this.setData('currentBranch' , currentBranch)

        var allBranches = await window.gitCommit.branches(path)
        this.setData('gitBranches' , allBranches)

        var defaultSelected = {
            name : currentBranch,
            value : currentBranch
        }

        var graphList = await window.gitCommit.graph(path)
        this.setData('graphList' , [await this.generateGraph(graphList)]);
        console.log(this.getData('graphList'));


        Lyte.arrayUtils(this.getData('selectedBranches') , 'push' , defaultSelected)
    
}