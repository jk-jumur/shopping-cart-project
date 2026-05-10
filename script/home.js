const productContainer = document.getElementById("productContainer");

const loading = document.getElementById("loading");
// console.log(productContainer);

let isLoading = true;

const fetchProducts = ()=>{
       isLoading = true;
       loading.style.display = "flex";
      fetch("https://in-a5-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        displayProducts(data);
         isLoading = false;
         loading.style.display = "none";
      });
    } 
    
   const displayProducts = (products) =>{
    //    console.log(products);
         products.forEach(product => {
            //   console.log(product);
               const card = document.createElement("div");
               card.innerHTML = `
                   <div class="bg-white  rounded-xl   drowp-shadow-lg  p-4 border-t-2 border-[#4F46E5]">

                          <img src= "${product.img}"

                           alt="${product.title}" 
                           class="rounded-xl h-46 w-full object-cover" />

                           <div class="space-y-2 my-3">
                               <p class="font-medium">${product.title}</p>
                               <p class="bg-[#4F46E5]/20  py-2 px-6 rounded-xl text-[#4F46E5]  w-fit">${product.category}</p>
                               <p>$${product.price}</p>
                           </div>
                           <button class="bg-[#4F46E5]  text-white w-full rounded-xl py-2">View Details</button>
                           </div> `;

                  productContainer.appendChild(card) ;        
         });
   };

   fetchProducts();

