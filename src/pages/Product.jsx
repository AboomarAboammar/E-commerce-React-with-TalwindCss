import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { products, currency,cartItems,
    addToCart } = useContext(ShopContext);
  const { productId } = useParams();

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [Size, setSize] = useState("");

  const fetchProductData = () => {
    products?.map((item) => {
      if (item._id === productId) {
        setProductData(item);

        setImage(item.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, []);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*Product data*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*product image*/}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                key={index}
                src={item}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>
        {/* Product info*/}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_dull_icon} alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 font-medium text-3xl">
            {currency} {productData.price}
          </p>
          <p className="mt-5 to-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p className="">Sellect Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border bg-gray-100 px-4 py2 g-2 ${
                    item === Size ? "bg-orange-400" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,Size)} className="bg-black text-white px-8 py-3 rounded-md text-sm active:bg-gray-700">ADD TO CART</button>
        <hr className="mt-8 sm:w-4/5 "/>
        <div className="text-sm to-gray-500 mt-5 flex flex-col gap-1">
          <p>100% Original Product</p>
          <p>Cash on delivery is available on this product. </p>
          <p>Easy return and exchange policy within 7 days.</p>
        </div>
        
        </div>
        
      </div>
      {/*Description and Review */}
      <div className="mt-20">
        <div className="flex">
<b className="border px-5 py-3 text-sm">Description</b>
        <p className="border px-5 py-3 text-sm">Review (122)</p>
        
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>An e-commerce website is an online plateform that facilitates the buing and selling Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eos magnam, ipsum aspernatur ut sed incidunt soluta labore, illo a doloremque nesciunt nihil corrupti corporis fugit suscipit nulla. Consequuntur, aut Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi nostrum quaerat error vel veniam placeat? Aliquam, ipsa earum.</p>
          <p>E-commerce website typically display products or services along eith detailed Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nobis voluptates quidem beatae at dolore repudiandae culpa veniam fuga error. Hic inventore tempore corporis quam.</p>
        </div>
      </div>
      {/* Releted product*/}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
