"use client"

import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { MessageCircle, Pizza, Star } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Location", id: "location" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Tony's Pizza"
          button={{
            text: "Order Now",
            href: "https://order.tonys-pizza.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Authentic Italian Pizza"
          description="Fresh ingredients, traditional recipes, and wood-fired perfection delivered to your door"
          tag="Since 1985"
          tagIcon={Pizza}
          buttons={[
            {
              text: "Order Online",
              href: "https://order.tonys-pizza.com"
            },
            {
              text: "View Menu",
              href: "menu"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/5953495/pexels-photo-5953495.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Fresh wood-fired pizza with melted cheese and herbs"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Our Signature Pizzas"
          description="Handcrafted with the finest ingredients and baked in our wood-fired oven"
          tag="Popular"
          tagIcon={Star}
          products={[
            {
              id: "margherita",
              name: "Classic Margherita",
              price: "$16.99",
              imageSrc: "https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Classic Margherita pizza with fresh basil",
              initialQuantity: 1
            },
            {
              id: "pepperoni",
              name: "Pepperoni Supreme",
              price: "$18.99",
              imageSrc: "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Pepperoni pizza with melted cheese",
              initialQuantity: 1
            },
            {
              id: "mushroom",
              name: "Gourmet Mushroom",
              price: "$19.99",
              imageSrc: "https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Gourmet mushroom pizza with herbs",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Family Tradition"
          description={[
            "For over 35 years, Tony's Pizza has been serving authentic Italian pizza made with love and traditional recipes passed down through generations.",
            "We use only the freshest ingredients sourced locally and imported Italian specialties to create the perfect pizza experience for our community."
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "story"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardThree
          title="What Our Customers Say"
          description="Real reviews from pizza lovers in our community"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarahj_foodie",
              testimonial: "The best pizza in town! The crust is perfect and the ingredients are always fresh. Tony's has been our family's go-to for years.",
              imageSrc: "https://images.pexels.com/photos/3811663/pexels-photo-3811663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson enjoying pizza"
            },
            {
              id: "2",
              name: "Michael Chen",
              handle: "@mike_eats",
              testimonial: "Outstanding wood-fired pizza with authentic Italian flavors. The margherita is absolutely divine - you can taste the quality in every bite.",
              imageSrc: "https://images.pexels.com/photos/5638675/pexels-photo-5638675.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen with family at dinner"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              handle: "@emily_foodlover",
              testimonial: "Fast delivery, hot pizza, and incredible taste. Tony's never disappoints! Their pepperoni supreme is my absolute favorite.",
              imageSrc: "https://images.pexels.com/photos/4348805/pexels-photo-4348805.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez smiling with pizza"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@davidk_pizza",
              testimonial: "Consistently excellent pizza with friendly service. The wood-fired oven makes all the difference - you can really taste it!",
              imageSrc: "https://images.pexels.com/photos/5239976/pexels-photo-5239976.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim enjoying lunch"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Visit Our Kitchen"
          description="Come see where the magic happens or get in touch for catering, events, or special requests"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your catering needs or special requests...",
            rows: 4,
            required: true
          }}
          buttonText="Send Message"
          imageSrc="https://images.pexels.com/photos/29626980/pexels-photo-29626980.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Pizza chef working in wood-fired oven kitchen"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Menu",
              items: [
                {
                  label: "Signature Pizzas",
                  href: "menu"
                },
                {
                  label: "Appetizers",
                  href: "appetizers"
                },
                {
                  label: "Desserts",
                  href: "desserts"
                },
                {
                  label: "Drinks",
                  href: "drinks"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "story"
                },
                {
                  label: "Ingredients",
                  href: "ingredients"
                },
                {
                  label: "Locations",
                  href: "locations"
                },
                {
                  label: "Careers",
                  href: "careers"
                }
              ]
            },
            {
              title: "Order",
              items: [
                {
                  label: "Online Ordering",
                  href: "https://order.tonys-pizza.com"
                },
                {
                  label: "Catering",
                  href: "catering"
                },
                {
                  label: "Gift Cards",
                  href: "gift-cards"
                },
                {
                  label: "Delivery",
                  href: "delivery"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Tony's Pizza | Authentic Italian Since 1985"
        />
      </div>
    </ThemeProvider>
  );
}