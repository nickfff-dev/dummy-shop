import Product from "./Product"

 function ProductView({products,addTocart}:{products:any,addTocart:any}) {
  return (
    <div className="bg-white -mt-6">
      <div className="mx-auto max-w-2xl py-8 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
<h2 className="text-2xl font-bold tracking-tight text-gray-900">Groceries</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-3">
          {products.map((product:any, index:number) => (
            <Product key={ index} product={product} addTocart={addTocart} />
          ))}
        </div>
      </div>
    </div>
  )
}


export default ProductView
