import Image from "next/image"
import { Organic } from "@/typings/searchTypings"

function ProductPage() {
  const sampleProduct: Organic = {
    url: "sample-url",
    image: "https://images.pexels.com/photos/704748/pexels-photo-704748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$10.99",
    title: "Sample Product",
    rating: "4.5",
    seller: "Sample Seller",
    product_id: "123456",
    badge: "Bestseller",
  };
  return (
    <div>
      <div> 
        <Image src={sampleProduct.image}
        alt={sampleProduct.title}
        width={90}
        height={90}
        className="border rounded-sm"
        />
      </div>
    </div>
  )
}

export default ProductPage