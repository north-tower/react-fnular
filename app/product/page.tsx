import Image from "next/image";
import { Organic } from "@/typings/searchTypings";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


function ProductPage() {
  const product: Organic = {
    url: "sample-url",
    images: [
      "https://images.pexels.com/photos/704748/pexels-photo-704748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1043503/pexels-photo-1043503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      // Add more URLs as needed
    ],
    price: "$10.99",
    title: "Sample Product",
    rating: "4.5",
    seller: "Sample Seller",
    product_id: "123456",
    badge: "Bestseller",
  };
  
  return (
    <div>
      <div className="hidden lg:inline space-y-4"> 
        {product.images.map((image, i) => (
          <Image
            key={i} // Don't forget to add a unique key for each Image component
            src={image} // Use 'image' instead of 'product.image'
            alt={product.title} // Use 'product.title' instead of 'product.title[i]'
            width={90}
            height={90}
            className="border rounded-sm"
          />
        ))}
      </div>
      <Carousel 
      opts={{
        loop: true,
      }}
      className="w-3/5 mb-10 lg:mb-0  lg:w-full self-start flex items-center max-w-xl mx-auto lg:mx-20"
      >
        <CarouselContent>
          {product.images.map((image, i) => (
            <CarouselItem key={i}>
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center p-2 relative">
                  <Image key={image}
                  src={image}
                  alt={product.title}
                  width={400}
                  height={400}
                  />
                  </div>
                </div>
            </CarouselItem>
          ))}
          
          
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />  
      </Carousel>

    </div>
  );
}

export default ProductPage;
