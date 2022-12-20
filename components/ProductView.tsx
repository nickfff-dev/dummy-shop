 function ProductView({products,addTocart}:{products:any,addTocart:any}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-8 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
<h2 className="text-2xl font-bold tracking-tight text-gray-900">Groceries</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-3">
          {products.map((product:any, index:number) => (
            <div  key={index} className="group relative" onClick={()=>{addTocart(product)}}>
              <div className="min-h-50   overflow-hidden rounded-md  group-hover:opacity-75  lg:h-50">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-50  w-full object-center lg:h-auto object-contain"
                />
              </div>
              <span className={` ${product.category ? "visible": "invisible"} text-[11px] rounded text-[#2B78C6] bg-[#F2F8FF] pr-10 mb-2 font-bold z-20 px-1`}>{product.category}</span>
              <p className="text-2xl font-bold  text-black mt-2">${product.price.toString().split(".")[0]} <sup className="text-[14px] -ml-1">{product.price.toString().split(".")[1]}</sup></p>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default ProductView
