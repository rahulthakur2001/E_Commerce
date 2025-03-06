import React from 'react'
import store from "../assets/store.png"
import apple from "../assets/apple.png"

export const Footer = ({ data }) => {
  const defaultData = {
    discountText: "$20 discount",
    mainText: "for your first order",
    heading: "Join our newsletter and get...",
    subText: "Join our email subscription now to get updates on promotions and coupons.",
    placeholder: "Your email address",
    buttonText: "Subscribe",
    benefits: [
      "Everyday fresh products",
      "Free delivery for orders over $70",
      "Daily Mega Discounts",
      "Best price on the market"
    ],
    categories: {
      "FRUIT & VEGETABLES": ["Fresh Vegetables", "Herbs & Seasonings", "Fresh Fruits", "Cuts & Sprouts", "Exotic Fruits & Veggies", "Packaged Produce", "Party Trays"],
      "BREAKFAST & DAIRY": ["Milk & Flavoured Milk", "Butter and Margarine", "Cheese", "Eggs Substitutes", "Honey", "Marmalades", "Sour Cream and Dips", "Yogurt"],
      "MEAT & SEAFOOD": ["Breakfast Sausage", "Dinner Sausage", "Beef", "Chicken", "Sliced Deli Meat", "Shrimp", "Wild Caught Fillets", "Crab and Shellfish", "Farm Raised Fillets"],
      "BEVERAGES": ["Water", "Sparkling Water", "Soda & Pop", "Coffee", "Milk & Plant-Based Milk", "Tea & Kombucha", "Drink Boxes & Pouches", "Craft Beer", "Wine"],
      "BREADS & BAKERY": ["Milk & Flavoured Milk", "Butter and Margarine", "Cheese", "Eggs Substitutes", "Honey", "Marmalades", "Sour Cream and Dips", "Yogurt"]
    },
    contact: {
      phone: "8 800 555-55",
      workingHours: "Working 8:00 - 22:00",
      discount: "15% discount on your first purchase",
    },
    copyright: ["Copyright 2025 © All rights reserved by Blackrise Theme"],
    footerLinks: ["Privacy Policy", "Terms and Conditions", "Cookie"],
    paymentMethods: ["stripe", "paypal", "visa", "mastercard"],
    socialLinks: ["facebook", "twitter", "instagram"]
  };

  const content = { ...defaultData, ...data };

  return (
    <div className="py-10 px-5">
      <div className="bg-green-500 text-white px-10 py-10">
        <p className="text-lg">
          <a href="#" className="underline">{content.discountText}</a> {content.mainText}
        </p>
        <h2 className="text-2xl font-bold mt-2">{content.heading}</h2>
        <p className="mt-2 w-[30%]">{content.subText}</p>
        <div className="mt-4 flex">
          <input
            type="email"
            placeholder={content.placeholder}
            className="p-3 text-black rounded-l outline-none w-80"
          />
          <div className='bg-white p-1 rounded-r'>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            {content.buttonText}
          </button>
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="bg-gray-100 text-black py-5">
        <div className="max-w-6xl mx-auto flex justify-around text-center">
          {content.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center">
              <span className="text-xl">✔️</span>
              <p className="mt-2">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Categories Section */}
      <div className="bg-gray-100 text-black py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {Object.entries(content.categories).map(([category, items], index) => (
            <div key={index}>
              <h3 className="font-bold mb-2">{category}</h3>
              <ul className="text-sm">
                {items.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
   {/* Bottom Section */}
   <div className="bg-white text-black py-5">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center border-b-[1px] border-b-gray-500 py-10">
          <div className='leading-tight'>
          <div className="text-[22px] font-bold">{content.contact.phone}</div>
          <span className="text-[12px]">{content.contact.workingHours}</span>
          </div>
          <div className='flex gap-2 items-center'>
          <div className='text-right'>
            <h1 className='text-[13px] font-bold'>Download App on Mobile :</h1>
            <p className='text-[12px] font-semibold'>{content.contact.discount}</p>
          </div>
          <div className='flex gap-1 w-50 h-10'>
            <img src={store} alt="" className='h-full w-full object-contain'/>
            <img src={apple} alt="" className='h-full w-full object-contain'/>
          </div>
          <div className="flex space-x-4">
            {content.socialLinks.map((social, index) => (
              <a key={index} href="#" className="text-xl">🔗</a>
            ))}
          </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex justify-between items-center mt-4">
          <div>
            {content.copyright.map((copy, index) => (
              <p key={index} className='text-[12px] text-gray-600 font-semibold'>{copy}</p>
            ))}
          </div>
          <div className='flex gap-8 items-center'>
          <div className="flex space-x-3">
            {content.footerLinks.map((link, index) => (
              <a key={index} href="#" className="text-[12px] font-semibold text-gray-600">{link}</a>
            ))}
          </div>
          <div className="flex space-x-2">
            {content.paymentMethods.map((method, index) => (
              <span key={index} className="text-xl">💳</span>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
