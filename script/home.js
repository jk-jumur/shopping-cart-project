const productContainer = document.getElementById("productContainer");
// console.log(productContainer);

const fetchProducts = ()=>{
      fetch("https://in-a5-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        displayProducts(data);
      });
    } 
    
   const displayProducts = (products) =>{
    //    console.log(products);
         products.forEach(product => {
            //   console.log(product);
               const card = document.createElement("div");
               card.innerHTML = `
                   <div class="bg-white  rounded-xl   drowp-shadow-lg  p-4 border-t-2 border-[#4F46E5]">
                          <img src="https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg", alt="" class="rounded-xl">
                           <div class="space-y-2 my-3">
                               <p class="font-medium">Premium Wireless Controller</p>
                               <p class="bg-[#4F46E5]/20  py-2 px-6 rounded-xl text-[#4F46E5]  w-fit">Men</p>
                               <p>$79.99</p>
                           </div>
                           <button class="bg-[#4F46E5]  text-white w-full rounded-xl py-2">View Details</button>
                           </div> `;

                  productContainer.appendChild(card) ;        
         });
   };

   fetchProducts();

