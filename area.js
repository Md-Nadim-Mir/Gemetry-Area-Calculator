

 let count =0;

// buttn add event listener

let buttons=document.getElementsByClassName('a');

for(let button of buttons){

   button.addEventListener('click',function(event){

      // input 1
      let input_1= event.target.parentNode.parentNode.childNodes[5].childNodes[1].value;
      let input1=parseFloat(input_1)
      

      // input 2
      let input_2=event.target.parentNode.parentNode.childNodes[5].childNodes[5].value;
      let input2=parseFloat(input_2)

     

      // name
      let name=event.target.parentNode.parentNode.childNodes[1].innerText;


      // input field empty
      event.target.parentNode.parentNode.childNodes[5].childNodes[1].value='';
      event.target.parentNode.parentNode.childNodes[5].childNodes[5].value='';
      

      //  area find 
      let area1=document.getElementById('area1');
      let area2=document.getElementById('area2');
      let area3=document.getElementById('area3');
      let area4=document.getElementById('area4');
      let area5=document.getElementById('area5');
      let area6=document.getElementById('area6');

      let areaValue=0;

      if(isNaN(input1 && input2)){

         alert('Please fill up the input field');
         return;

      }

      

      else {

         count++;

         if(name=='Triangle'){

            area1.innerText=0.5 * input1 * input2;
            areaValue=area1.innerText;
            display(areaValue,count,name)
            // input_1.innerText='';
            // input_2.innerText='';
  
        }
  
        else if(name=='Rectangle'){
  
           area2.innerText= input1 * input2;
           areaValue=area2.innerText;
           display(areaValue,count,name)
       }
  
  
       else if(name=='Parallelogram'){
  
        area3.innerText= input1 * input2;
        areaValue=area3.innerText;
        display(areaValue,count,name)
  
      }
  
  
      else if(name=='Rhombus'){
  
        area4.innerText=0.5 * input1 * input2;
        areaValue=area4.innerText;
        display(areaValue,count,name)
      }
  
  
      else if(name=='Pentagon'){
  
        area5.innerText=0.5 * input1 * input2;
        areaValue=area5.innerText;
        display(areaValue,count,name)
  
      }
  
  
      else if(name=='Ellipse'){
  
        area6.innerText=(3.1416 * input1 * input2).toFixed(2);
        areaValue=area6.innerText;
        display(areaValue,count,name)
  
      }
  
     
      //  event.target.setAttribute('disabled',true);

      }
     


     
      
     

   })


}


// dynamic function

function display(areaValue,count,name){

   let geometry_added=document.getElementById('geometry_added');

   let p=document.createElement('p');


   p.classList.add('my-4')

   p.innerHTML=`<p class='text-xl text-[#f56245] font-bold mb-3'>${count} . ${name} :   ${areaValue} cm<sup>2</sup></p> <p><button class='btn bg-[purple] w-1/2 mx-2 text-white' style="font-size:14px;">Convert  m<sup>2</sup></button></p>`

   geometry_added.appendChild(p)

}




