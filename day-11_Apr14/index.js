
const students = [
    {name:'ashish 0',score:45},
    {name:'ashish 1',score:33},
    {name:'ashish 2',score:55},
    {name:'ashish 3',score:65},
    {name:'ashish 4',score:85}
]
const arr = []
function grace(){
    // for(let i=0;i<students.length;i++){
    //     if(students[i].score<50){
    //         students[i].score=students[i].score+15;    
    //     }
    //     if(students[i].score>50)
    //     {
    //         console.log(students[i].name);
    //     }
    // }

    //=================OR================//
    
    for(let i=0;i<students.length;i++)
    {
        if(students[i].score<50)
        {
            const obj ={
                name:students[i].name,
                score:students[i].score+15
            }
            arr.push(obj)
        }
        else{
            arr.push(students[i]);
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i].score>50)
        console.log(arr[i].name,"passed the test");
        else
        console.log(arr[i].name,"fail the test")
    }

}
grace();
console.log(students,"===<<<<====>>>>",arr);