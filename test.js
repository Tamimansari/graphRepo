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
return {
    currentRepo : Lyte.attr("string",{default: ""}),
    commitStatus : Lyte.attr("object",{default: ""}),
    hasPath : Lyte.attr('boolean' , {default : true}),
    checkAllTrackedFiles : Lyte.attr('boolean' , {
        default : false,
    }),
    gitStatus : Lyte.attr('object' , {
        default :  {
            trackedFiles: [
                'component/comp1/66.txt',
                'component/comp2/mm.txt',
                'component/comp3/n5.txt',
                'component/comp4/n55.txt',
                'package.json'
            ],
            untrackedFiles: [
                'component/comp7/utils.js',
                'component/comp7df/utils.js',
                'component/comp7asfd/utils.js',
                'component/comp74t/utils.js',
                'component/comp7etrv/utils.js',
                'component/compew7/utils.js',
                'component/comp1/vfx.js'
            ]
       }
    }),
    filesList : Lyte.attr('array',{
        default : []
    }),

    graphList : Lyte.attr('array' , {
        default : []
           
    }),
    gitBranches : Lyte.attr('array' ,{
        default : []
    }),
    currentBranch : Lyte.attr('string' , {
        default : ''
    }),
    selectedBranches : Lyte.attr('array' , {
        default : []
    })


}