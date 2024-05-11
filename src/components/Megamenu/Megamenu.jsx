import React, { useState } from "react";
import "./Megamenu.css";
import { Link } from "react-router-dom";
import pizzaImage from "../../assets/biryani.png";
import Kacchibiriany from "../../assets/biryani.png";
import breadImage from "../../assets/biryani2.png";
import fishImage from "../../assets/biryani3.png";
import carrotImage from "../../assets/biryani2.png";
import cookieImage from "../../assets/biryani3.png";
import SubMegaCategory from "./SubMegaCategory";

const Megamenu = () => {
  const [hovering, setHovering] = useState(null);

  const menuItems = [
    {
      name: "BD Food Menu",
      description: "Delicious Bangladeshi Items",
    },
    {
      name: "African Menu",
      description: "Authentic Indian flavors",
    },
    {
      name: "Australian menu",
      description: "Fresh seafood from Bangladesh",
    },
    {
      name: "Russian menu",
      description: "Healthy Dutch delicacies",
    },
    {
      name: "American menu",
      description: "Traditional African treats",
    },
    {
      name: "European menu",
      description: "Exquisite Japanese dishes",
    },
  ];

  return (
    <div className="megamenu">
      <div className="row">
        <div className="main_category">
          {menuItems.map((item, index) => (
            <div
              className="mega-menu-item"
              id={`item-active-${index}`}
              onMouseEnter={() => setHovering(index)}
            >
              <Link className="link-main-category" to="/">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </Link>
            </div>
          ))}
        </div>
        {hovering === 0 ? (
          <div className="mega-sub-main-menu">
            <div>
              <SubMegaCategory
                img={Kacchibiriany}
                title="Kacchi Biriyani"
                subTitle="Special Spicy Mutton With Bashmoti Rice"
              />
              <SubMegaCategory
                img={breadImage}
                title="Morog Polau"
                subTitle="Chicken Roast With Special Rice With Kebab & Borhani"
              />
              <SubMegaCategory
                img={fishImage}
                title="Beef Khichuri"
                subTitle="Tender pieces of Beef cooked in a creamy tomato-based sauce flavored with Hot Khichuri"
              />
              <SubMegaCategory
                img={carrotImage}
                title="Beef Tehari"
                subTitle="A spicy and aromatic Thai curry made with green curry paste"
              />
              <SubMegaCategory
                img={cookieImage}
                title="Chicken Jhaal Fry"
                subTitle="Spicy and numbing tofu dish cooked with minced pork"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Illish & Egg"
                subTitle="A Korean mixed rice dish topped with assorted vegetables"
              />
            </div>
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="Fish Fry & Rice"
                subTitle="Flavorful Bangladeshi fried rice cooked with Fish."
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Sheek Kebab With Naan"
                subTitle="A classic Bangladeshi dish featuring Kebab & Naan"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Mangso Parata"
                subTitle="Succulent crab cooked in a spicy and tangy tomato-based chili "
              />
              
              
            </div>
          </div>
        ) : hovering === 1 ? (
          <div className="mega-sub-main-menu">
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={breadImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={fishImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={carrotImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={cookieImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
            </div>
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
            </div>
          </div>
        ) : hovering === 2 ? (
          <div className="mega-sub-main-menu">
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={breadImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={fishImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={carrotImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={cookieImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
            </div>
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
            </div>
          </div>
        ) : hovering === 3 ? (
          <div className="mega-sub-main-menu">
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={breadImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={fishImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={carrotImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={cookieImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
            </div>
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
            </div>
          </div>
        ) : hovering === 4 ? (
          <div className="mega-sub-main-menu">
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={breadImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={fishImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={carrotImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={cookieImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
            </div>
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Roast"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
            </div>
          </div>
        ) : hovering === 4 ? (
          <div className="mega-sub-main-menu">
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={breadImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={fishImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={carrotImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={cookieImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
            </div>
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
            </div>
          </div>
        ) : (
          <div className="mega-sub-main-menu">
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="Japanese Sushi Platter"
                subTitle="Assorted nigiri and maki sushi featuring fresh fish like salmon"
              />
              <SubMegaCategory
                img={breadImage}
                title="Vietnamese Pho"
                subTitle="Fragrant beef noodle soup with thinly sliced beef"
              />
              <SubMegaCategory
                img={fishImage}
                title="Indian Butter Chicken"
                subTitle="Tender pieces of chicken cooked in a creamy tomato-based sauce flavored with butter"
              />
              <SubMegaCategory
                img={carrotImage}
                title="Thai Green Curry"
                subTitle="A spicy and aromatic Thai curry made with green curry paste"
              />
              <SubMegaCategory
                img={cookieImage}
                title="Chinese Mapo Tofu"
                subTitle="Spicy and numbing tofu dish cooked with minced pork"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Korean Bibimbap"
                subTitle="A Korean mixed rice dish topped with assorted vegetables"
              />
            </div>
            <div>
              <SubMegaCategory
                img={pizzaImage}
                title="Indonesian Nasi Goreng"
                subTitle="Flavorful Indonesian fried rice cooked with shrimp, chicken"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Malaysian Roti Canai with Curry"
                subTitle="Flaky and crispy Malaysian flatbread served"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Filipino Adobo"
                subTitle="A classic Filipino dish featuring chicken or pork simmered"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="Singaporean Chili Crab"
                subTitle="Succulent crab cooked in a spicy and tangy tomato-based chili "
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
              <SubMegaCategory
                img={pizzaImage}
                title="biryani"
                subTitle="Lorem ipsum dolor sit consectetur"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Megamenu;
