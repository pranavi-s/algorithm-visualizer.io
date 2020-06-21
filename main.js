
let num = 35;
var container = document.getElementById("container")
// container.classList.add("container1");
// console.log(`${window.innerHeight},${window.innerWidth}`)
function generateblocks(num)
{
    for(var i = 0 ;i<num;i++)
    {   const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const value = Math.floor(Math.random()*100);
        var newblock = document.createElement("div");
        newblock.classList.add("block");
        newblock.style.height = `${value * 3}px`;
        // newblock.style.height = (windowHeight * value * 0.003) + 'px';
        // newblock.style.width = (((windowWidth * 0.60)/num)-1) + 'px';
        // newblock.style.transform = `translateX(${i*3}px)`;
        var labels =document.createElement("label");
        labels.classList.add("lable");
        labels.innerHTML = value;
        newblock.appendChild(labels);
        container.appendChild(newblock);
    }
    // document.body.appendChild(container);
    // console.log(container)
}

function swap(el1,el2)
{

    // console.log(window.getComputedStyle(blocks[j]).getPropertyValue("transform"));// windows.getcomputedstyle gives all the css properties of an element;4
    // // get property value gives the desired css value of the element
    return new Promise(resolve=>{
        const s1 = window.getComputedStyle(el1);
        const s2 = window.getComputedStyle(el2);
        transform1 = s1.getPropertyValue("transform");
        transform2 = s2.getPropertyValue("transform");
        // el1.style.transform = transform2;
        // el2.style.transform = transform1;
        window.requestAnimationFrame(function(){
           setTimeout(()=>{
               container.insertBefore(el2,el1);
               resolve();
            },250);
        })
    })
}

async function bubblesort()
{
    let blocks = document.querySelectorAll(".block")
    const blength = blocks.length;

    for(let i = 0 ;i<blength-1;i+=1)
    {
        for(let j = 0;j<blength-i-1;j+=1)
        {   
            blocks[j].style.backgroundColor     = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";
            const t1=Number(blocks[j].childNodes[0].innerHTML); // it gives all the element inside it the blocks[j].
            const t2=Number(blocks[j+1].childNodes[0].innerHTML);
            if(t1>t2)
            {
                 await swap(blocks[j],blocks[j+1]);
                //console.log(window.getComputedStyle(blocks[j]).getPropertyValue("background"));                //blocks = document.querySelectorAll(".block");
                blocks = document.querySelectorAll(".block");

            }
            blocks = document.querySelectorAll(".block");
            blocks[j].style.backgroundColor= "#58b7ff";
            blocks[j+1].style.backgroundColor = "#58b7ff";

        }
        blocks[blength - i - 1].style.backgroundColor = "#13CE66";
    }
}


async function insertionsort()
{
    let blocks = document.querySelectorAll(".block");
   for(var i = 1; i<blocks.length;i++)
   {   //console.log(`I is ${i}`);
       var x,j;
       j = i-1;
       x =  Number(blocks[i].childNodes[0].innerHTML);
       while(j>-1 && Number(blocks[j].childNodes[0].innerHTML>x))
       {
           blocks[j].style.backgroundColor ="#FF4949";
           blocks[j+1].style.backgroundColor = "#FF4949";
           await swap(blocks[j],blocks[j+1]);
           blocks[j+1].style.backgroundColor =  "#13CE66"; // green
           blocks[j].style.backgroundColor =  "#13CE66";
           j = j-1;
           blocks = document.querySelectorAll(".block");
       }
   }
}

function selection_swap(el1,el2)
{
    return new Promise(resolve=>{
    // const newel = el1;
    // el1.classList.add("swap");
    // el2.classList.add("swap2");
    const s1 = window.getComputedStyle(el1);
    const s2 = window.getComputedStyle(el2);
    const t1 = s1.getPropertyValue("height");
    const t2 = s2.getPropertyValue("height");
    const v1 =el1.childNodes[0].innerHTML;
    const v2 = el2.childNodes[0].innerHTML;

    window.requestAnimationFrame(function(){
        setTimeout(()=>{
            el2.style.height = t1;
            el1.style.height= t2;
            el2.childNodes[0].innerHTML = v1;
            el1.childNodes[0].innerHTML = v2;
            resolve();
         },2000);
     })
    })
}

async function selection_sort()
{

var blocks = document.querySelectorAll(".block");
var mini;
for(var i = 0;i<blocks.length-1;i++)
{    mini = i;
    //blocks[i].style.backgroundColor = "#FF4949";
    for(var j = i+1;j<blocks.length;j++)
            if( Number(blocks[j].childNodes[0].innerHTML) <  Number(blocks[mini].childNodes[0].innerHTML))
                mini = j;

        // setInterval(() => {

        // }, 2000);
        blocks[mini].style.backgroundColor = "#FF4949";
        blocks[i].style.backgroundColor = "#FF4949";
    //   blocks[i].style.backgroundColor = "#FF4949";
     await selection_swap(blocks[i],blocks[mini]);
    //  setInterval(() => {
        
    // }, 2000);
    //blocks[i].style.backgroundColor = "#13CE66";
     blocks[i].style.backgroundColor = "#13CE66";
     blocks[mini].style.backgroundColor = "#58b7ff";
     //blocks = document.querySelectorAll(".block");   
}
blocks[i].style.backgroundColor = "#13CE66";
}


generateblocks(num);

async function quickswap(el1,el2)
{
    return new Promise(resolve=>{
    const s1 = window.getComputedStyle(el1);
    const s2 = window.getComputedStyle(el2);
    const t1 = s1.getPropertyValue("height");
    const t2 = s2.getPropertyValue("height");
    const v1 =el1.childNodes[0].innerHTML;
    const v2 = el2.childNodes[0].innerHTML;
    const a  = el1,b=el2;
    window.requestAnimationFrame(function(){
        setTimeout(()=>{
            el2.style.height = t1;
            el1.style.height= t2;
            el2.childNodes[0].innerHTML = v1;
            el1.childNodes[0].innerHTML = v2;
            resolve();
         },2000);
     })
    })
}
var bar = document.querySelectorAll(".block");
//console.log(bar);
 async function partition(bar,low, high)
{   
    var piviot = Number(bar[low].childNodes[0].innerHTML);
    var i = low;
    var k = high;
    do{  
        //console.log(typeof Number(bar[i].childNodes[0].innerHTML))
        bar = document.querySelectorAll(".block")
        //  console.log(bar[i].childNodes);
         console.log(`i is ${i} j is ${k}`);   
        do{
        i++;
        bar = document.querySelectorAll(".block")
        if(i==num)break;
        }while( Number(bar[i].childNodes[0].innerHTML)<= piviot)
        
        do{
            k--;
            bar = document.querySelectorAll(".block")
            if(k==num)break;
        
        }while(  Number(bar[k].childNodes[0].innerHTML) > piviot)
        if(i<k)
        {    

            //bar = document.querySelectorAll(".block")
            bar[k].style.backgroundColor ="#FF4949"; // red
            bar[i].style.backgroundColor = "#FF4949";
            // setInterval(() => {
            // }, 3000);

            await quickswap(bar[i],bar[k]);
            // setInterval(() => {
            // }, 3000);
            bar = document.querySelectorAll(".block")
            bar[k].style.backgroundColor ="pink";
            bar[i].style.backgroundColor = "#58b7ff"; // green
        }
    }while(i<k);
        
       //bar = document.querySelectorAll(".block");
       bar[k].style.backgroundColor ="#FF4949";
       bar[low].style.backgroundColor = "#FF4949";
      await quickswap(bar[k],bar[low]);
      bar[k].style.backgroundColor ="pink";
      bar[low].style.backgroundColor = "#58b7ff";
return k;
}


async function quicksort(bar,low,high)
{
    var j;
if(low<high)
{           bar = document.querySelectorAll(".block");
            j = await partition(bar,low,high);
          bar = document.querySelectorAll(".block")
          await quicksort(bar,low,j);
          bar = document.querySelectorAll(".block")
          await quicksort(bar,j+1,high);
}
return bar;
}
var low = 0;
var high = num;
 async function sort()
 {
    bar = await quicksort(bar,low,high);
    coloring(bar);
 }
function coloring(bar)
{
    for(var i =0 ;i<num;i++)
    {
        if(i<=(num/2))
        bar[i].style.backgroundColor = "#13CE66";
        else 
        bar[i].style.backgroundColor = "pink";
    }
}


var mergecont = document.getElementById("mergecontainer");
console.log("very first cont");
console.log(mergecont)
// async function mergecopy(el1)
// {   
//     return new Promise(resolve=>{
   
//         var s1 = window.getComputedStyle(el1);
//         var  h1 = s1.getPropertyValue("height");
//         var newdiv = document.createElement("div");
//         var newlabel = document.createElement("label");
//         newdiv.classList.add("block1");
//         newlabel.classList.add("lable");
//         newlabel.innerHTML= el1.childNodes[0].innerHTML;
//         newdiv.appendChild(newlabel);
//         mergecont.appendChild(newdiv);
//         window.requestAnimationFrame(function(){
//             setTimeout(()=>{
//                 newdiv.style.backgroundColor = "red";
//                 newdiv.style.height = h1;
//                 resolve();
//             },2000)
//         })
//     })
// }


async function mergecopy(el1)
{   
    return new Promise(resolve=>{
   
        // var s1 = window.getComputedStyle(el1);
        // var  h1 = s1.getPropertyValue("height");
        // var newdiv = document.createElement("div");
        // var newlabel = document.createElement("label");
        // newdiv.classList.add("block1");
        // newlabel.classList.add("lable");
        // newlabel.innerHTML= el1.childNodes[0].innerHTML;
        // newdiv.appendChild(newlabel);
        // mergecont.appendChild(newdiv);
        window.requestAnimationFrame(function(){
            setTimeout(()=>{
                 el1.classList.add(".move")
                  el1.style.backgroundColor = "red";
                // newdiv.style.height = h1;
                resolve();
            },3000)
        })
    })
}

async function mergeswap(el1,el2)
{
    return new Promise(resolve=>{
    // const s1 = window.getComputedStyle(el1);
    // const s2 = window.getComputedStyle(el2);
    // const t1 = s1.getPropertyValue("height");
    // const t2 = s2.getPropertyValue("height");
    // const v1 =el1.childNodes[0].innerHTML;
    // const v2 = el2.childNodes[0].innerHTML;
    // // const a  = el1,b=el2;
    window.requestAnimationFrame(function(){
        setTimeout(()=>{
            // console.log(`element 1 height ${el1.style.height}`)
            // el2.style.height = el1.style.height
            // el2.childNodes[0].innerHTML = v1;
            el2.style.backgroundColor = "green";
            el2.classList.remove(".move")

            resolve();
         },3000);
     })
    })
}

var blockm = document.querySelectorAll(".block");
var mergeblocks = document.querySelectorAll(".block1");
async function merge(blockm ,low, mid, high)
{

   var i,j,k;
   i = low;
   j = mid+1;
   k = low;
   blockm = document.querySelectorAll(".block");
   while(i<=mid && j<=high)
   {    console.log("while mein aaya")
        console.log(`${blockm[i].childNodes[0].innerHTML}, ${blockm[j].childNodes[0].innerHTML}`)
        blockm = document.querySelectorAll(".block");   
       if( Number(blockm[i].childNodes[0].innerHTML) <  Number(blockm[j].childNodes[0].innerHTML))
          {    
               console.log("i se swap hua")
            //    blockm = document.querySelectorAll(".block");
               await mergecopy(blockm[i]);i++;
          }


       else
         {    console.log("j se swap hua")
            //  blockm = document.querySelectorAll(".block");
             await mergecopy(blockm[j]);j++;
        }
   }

    for(;i<=mid;i++)
    { 
         // blockm = document.querySelectorAll(".block");
     await mergecopy(blockm[i])
    }
    for(;j<=high;j++)
     {      // blockm = document.querySelectorAll(".block");

        await mergecopy(blockm[j])
    }
    // blockm = document.querySelectorAll(".block");
    mergeblocks = document.querySelectorAll(".block1");
    // var ll = 0;
    for(i = low;i<=high;i++)
    {    console.log(`iss loop mein aaya ${i}`)
        await mergeswap(mergeblocks[i],blockm[i])
    }

}


async function mergesort(blockm , low, high)
{
    var mid ;
    blockm = document.querySelectorAll(".block")
    console.log(`low is ${low}, high is ${high}`)
    if(low<high)
    {
        mid=parseInt((low+high)/2);
        await mergesort(blockm, low, mid);
        await mergesort(blockm, mid+1, high);
        await merge(blockm, low , mid, high);
    }
}



//mergesort(blockm,0,5);










function algo_name()
{
    var button = document.getElementsByClassName("btn");
    var alg = document.getElementById("algoname")
    for(var i = 0 ;i<button.length;i++)
    {
        button[i].addEventListener("click", function(){
            // var algoname = document.createElement("h4");
            alg.innerHTML = this.innerHTML;
            alg.style.color = "white";
            // document.body.appendChild(alg);
            console.log(this.innerHTML)
        })

    }
    // var algoname = document.createElement("h4");

}
algo_name();









function gencont()
{
    // newcontainer.classList.add("newcontainer");
    // container.parentNode.insertBefore(newcontainer,container)
    // container.parentNode.removeChild(container);
    // // console.log(newcontainer)
    // return newcontainer 
    var newcontainer = document.createElement("div");
    // newcontainer.classList.add("container1");
    for(var i = 0 ;i<num;i++)
    {
        const value = Math.floor(Math.random()*100);
        const newblock = document.createElement("div");
        newblock.classList.add("block");
        newblock.style.height = `${value * 3}px`;
        // newblock.style.transform = `translateX(${i * 3}px)`;
        const labels =document.createElement("label");
        labels.classList.add("lable");
        labels.innerHTML = value;
        newblock.appendChild(labels);
        newcontainer.appendChild(newblock);
        newcontainer.classList.add("container")
        newcontainer.id = "container"
    }
    container.parentNode.replaceChild(newcontainer,container);
    container = newcontainer;
}

function isort()
 {  
     
     gencont();
    insertionsort();
}

function bsort()
{  
      gencont();
    bubblesort();
}

function ssort()
{   
    // var newcontainer = gencont();
    // // container = newcontainer;
    // generateblocks(num,newcontainer);
    gencont();
    selection_sort();
}

function qsort()
{
    // var newcontainer = gencont();
    // // container = newcontainer;
    // generateblocks(num,newcontainer);
    gencont();
    sort();     
}