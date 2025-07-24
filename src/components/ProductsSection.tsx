import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import productsImage from "@/assets/products-image.png";

const ProductsSection = () => {
  return (
    <section id="products" className="py-12 md:py-20 bg-section-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h3 className="text-primary text-lg font-medium mb-4 uppercase tracking-wide">
              WHAT WE DO
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
              Products
            </h2>
            <div className="w-24 h-1 bg-primary mb-8 mx-auto lg:mx-0"></div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We manufacture and distribute cement and paving blocks of the highest quality to our 
              consumers countrywide. A product of National Cement Company Limited (NCCL) means 
              assured superior performance, reliable quality and easy accessibility to be a loved 
              brand across the nation. We take immense pride in our Kenyan roots and endeavours 
              to bring out the best in cement products in the country by employing the latest cutting-edge 
              technologies that ensures we remain ahead of the game, and set some of the 
              highest international standards in our products for decades to come. Our high-quality 
              Paving Blocks combine elegant aesthetics with quick installation processes. They are 
              economical, durable with a vast range of colors, designs and finishes to perfectly suit 
              your area
            </p>
            <Link to="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                View Products
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <img 
              src={productsImage} 
              alt="Simba Cement Products" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;