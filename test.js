function school(){
console.log("ji");
}
function address(){
    console.log("ji");}
function ph(){
if(true){
    console.log("hi");
    console.log("temp");
}
}
new entrys
async function nmae(){
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