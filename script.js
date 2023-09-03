const buttonAll=async()=>{

    const response=await fetch("https://openapi.programming-hero.com/api/videos/categories")

    const data=await response.json();

    console.log(data.data);

   
    
    data.data.forEach(showButton=>{

        const buttonOne=document.getElementById("button");

        const newButton=document.createElement('div');
        newButton.innerHTML=`
        <button onclick="buttonclickshow(${showButton.category_id})" class="btn btn-active btn-ghost hover:bg-[#FF1F3D]">${showButton.category}</button>

  
        
        `
        buttonOne.appendChild(newButton);



    })

}

const buttonclickshow=async(card)=>{

    const res=await fetch(`https://openapi.programming-hero.com/api/videos/category/${card}`)

    const data=await res.json();

    // console.log(data.data);

    const cardd=document.getElementById("card-container");
    cardd.innerHTML='';
   


    data.data.forEach(catagory=>{

        const hiddenCard=document.createElement('div');
        cardd.classList="grid cursor-pointer  justify-between gap-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1"
        hiddenCard.innerHTML=`
            <div class="card w-80 h-96 card-compact bg-base-100 shadow-xl">
            <figure><img class="w-full h-full" src="${catagory?.thumbnail}" alt="Shoes" class="h-52 w-80"/></figure>
            <div class="card-body">
            <div class="flex justify-center  relative bottom-10"> 
            <h6 >
            <span class=" rounded-md p-1  text-white bg-[black]"> ${catagory.others.posted_date?catagory.others.posted_date:""}</span> 
            </h6>
            </div>
              <div class="flex gap-3">
              <img src="${catagory.authors[0].profile_picture}" class="w-14 rounded-full " alt="Shoes" />
               <h3 class="card-title">${catagory.title}</h3>
              
              </div>
              <div class="">
            <div class="ml-16 flex justify-center ">
            <p class="w-24">${catagory.authors[0].profile_name}
             
            </p> 
            <span class="lg:relative lg:bottom-4 lg:right-24"> ${catagory.authors[0].verified?catagory.authors[0].verified:`<img src="./img/Twitter_Verified_Badge.svg.png" class="w-6 mt-4"` } </span>

           
           
           
            </div>
              <p class="ml-16">${catagory.others.views} views</p>
              </div>
            </div>
          </div>
            `
            cardd.appendChild(hiddenCard)

    })




}

    const notFound=async(error)=>{
        const res=await fetch(`https://openapi.programming-hero.com/api/videos/category/${error}`)

        const data=await res.json();

        console.log(data.data);

    }
    notFound();



buttonclickshow("1000");










buttonAll();