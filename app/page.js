"use client"

import Image from "next/image"
import featuresImg from "../public/features-img.jpg"
import flower03 from "../public/flower-03.jpg"
import flower02 from "../public/flower-02.jpg"
import flower06 from "../public/flower-06.jpg"
import flower008 from "../public/flower-008.jpg"
import cat01 from "../public/cat-01.jpg"
import cat02 from "../public/cat-02.jpg"
import logo from "../public/logo-regular.png"
import giftCardImg from "../public/gift-card-img.jpg"
import testimonialImg from "../public/testimonial-07-free-img.jpg"

export default function Home() {

  let date =  new Date().getFullYear();

  return (
    <>
      <nav className="min-h-[100px] w-full flex items-center px-6 border-b-[1px]">
        <div className="w-full flex justify-between">
          <div className="flex items-center">
            <Image 
            src={logo} 
            
            />

            <ul className="uppercase ml-10 flex items-center space-x-8">
              <li>shop all</li>
              <li>plants</li>
              <li>cacti</li>
            </ul>
          </div>

          <div className="flex items-center">
            <ul className="uppercase ml-10 flex items-center space-x-8">
                <li>our story</li>
                <li>questions?</li>
              </ul>
          </div>
        </div>
      </nav>
      <main>

        <section className="header py-20 px-6 bg-[#f1f5f4]">
          <div className="flex w-full items-center">
            <div className="w-[50%] space-y-6">
              <h6 className="text-neutral-500 font-semibold">Plants</h6>
              <h2 className="text-5xl font-extrabold max-w-sm leading-[4rem]">Bird of Paradise Plant</h2>
              <p className="max-w-md ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nulla in mauris efficitur elementum.</p>
              <div className="flex items-center space-x-6">
                <ul className="space-x-1 flex items-center">
                  <li className="line-through">$65.00</li>
                  <li>$50.00</li>
                </ul>
                <button className="bg-[#586f69] px-8 py-3 tracking-widest uppercase text-white">add to cart</button>
              </div>
            </div>

            <div className="w-[50%] pl-20 space-y-6">
            <Image 
            src={"/hero.png"} 
            width={400}
            height={400}
            />
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="text-center mb-16">
            <h6 className="text-neutral-500 font-semibold mb-2">Special Offers</h6>
            <h2 className="text-4xl font-extrabold max-w-md mx-auto  leading-[3rem]">Unique deals & offers every single day</h2>
          </div>
          <div className="flex w-full">
            <div className="w-1/2">
              <Image 
                src={featuresImg}
              />
            </div>
            <div className="w-1/2 grid place-content-center">
              <div>

                <Image 
                  src={flower03}
                  className="p-8 pb-0"
                  />

                <div className="p-4 pl-8">
                  <h6 className="text-neutral-500 mb-2">Cacti</h6>
                  <h4 className="font-bold text-xl">Aloe Juvenna Plant</h4>
                  <h6 className="text-neutral-500 mt-2">$85.00</h6>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="pb-24 px-4">
          <div className="text-center mb-16">
            <h6 className="text-neutral-500 font-semibold mb-2">Shop</h6>
            <h2 className="text-4xl font-extrabold max-w-md mx-auto  leading-[3rem]">Most Popular Plants</h2>
          </div>

          <div className="grid grid-flow-col grid-cols-4 gap-4">
            <div>
              <Image 
                src={flower03}
                />

              <div className="p-4">
                <h6 className="text-neutral-500 mb-2">Cacti</h6>
                <h4 className="font-bold text-xl">Aloe Juvenna Plant</h4>
                <h6 className="text-neutral-500 mt-2">$85.00</h6>
              </div>
            </div>
            <div>
              <Image 
                src={flower008}
                />

              <div className="p-4">
                <h6 className="text-neutral-500 mb-2">Cacti</h6>
                <h4 className="font-bold text-xl">Aloe Juvenna Plant</h4>
                <h6 className="text-neutral-500 mt-2">$85.00</h6>
              </div>
            </div>
            <div>
              <Image 
                src={flower02}
                />

              <div className="p-4">
                <h6 className="text-neutral-500 mb-2">Cacti</h6>
                <h4 className="font-bold text-xl">Aloe Juvenna Plant</h4>
                <h6 className="text-neutral-500 mt-2">$85.00</h6>
              </div>
            </div>
            <div>
              <Image 
                src={flower06}
                />

              <div className="p-4">
                <h6 className="text-neutral-500 mb-2">Cacti</h6>
                <h4 className="font-bold text-xl">Aloe Juvenna Plant</h4>
                <h6 className="text-neutral-500 mt-2">$85.00</h6>
              </div>
            </div>

          </div>

        </section>

        <section className="pb-24 px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
            <h6 className="text-neutral-500 font-semibold">Our story</h6>
            <h2 className="text-4xl font-extrabold  leading-[3rem]">We are a family owned, retail and wholesale plant nursery, located in New York.</h2>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            <button className="bg-[#586f69] px-8 py-3 tracking-widest uppercase text-white">read more</button>
          </div>

          <div className="grid grid-flow-col grid-cols-2 gap-4">
            <div className="relative h-[400px] w-full">
              <Image 
                src={cat01}
                className="h-full w-full object-cover"
              />
              <div className="bg-white bg-opacity-80 text-center py-2 absolute right-4 left-4 bottom-4 z-20">
                <div className="uppercase font-bold">cacti</div>
                <div className="uppercase font-bold text-neutral-500 text-xs">4 products</div>
              </div>
            </div>
            <div className="relative h-[400px] w-full">
              <Image 
                src={cat02}
                className="h-full w-full object-cover"
              />
              <div className="bg-white bg-opacity-80 text-center py-2 absolute right-4 left-4 bottom-4 z-20">
                <div className="uppercase font-bold">plants</div>
                <div className="uppercase font-bold text-neutral-500 text-xs">8 products</div>
              </div>
            </div>


          </div>

        </section>

        <section className="pb-20">
          <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
              <h6 className="text-neutral-500 font-semibold">Maria Oliver</h6>
            </div>
            <div className="bg-[#f1f5f4]">
              <div className="grid grid-flow-col py-8">
                <div className="px-3">
                  <div className="space-y-8">
                    <div className="h-28 w-28 mx-auto">
                    <Image 
                    src={testimonialImg}
                    className="rounded-full overflow-hidden"
                  />
                    </div>
                    <p className="font-bold text-3xl max-w-md mx-auto leading-[2.5rem] text-center">“ Really good service and good quality plants, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum! ”</p>
                    <div className="space-y-6 max-w-sm  mx-auto">
                      <h3 className="text-2xl font-semibold">Give the Gift of Plants</h3>
                      <p className="leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nulla in mauris efficitur elementum. Donec mollis eleifend ex vitae vulputate. Nam sodales, lorem ac tempus lorem ipsum dolor si amet.</p>
                      <button className="bg-[#586f69] px-8 py-3 tracking-widest uppercase text-white">buy gift card</button>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <Image 
                    src={giftCardImg}
                    className="h-full"
                  />
                </div>
              </div>
            </div>
        </section>

        <section className="pb-20">
          <ul className="px-10 grid grid-flow-col grid-cols-4 gap-4">
            <li className="space-y-1">
              <div>icon</div>
              <h6 className="font-bold text-xl capitalize">fast delivery</h6>
              <p className="leading-6 text-neutral-500 max-w-sm">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur</p>
            </li>
            <li className="space-y-1">
              <div>icon</div>
              <h6 className="font-bold text-xl capitalize">order tracking</h6>
              <p className="leading-6 text-neutral-500 max-w-sm">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur</p>
            </li>
            <li className="space-y-1">
              <div>icon</div>
              <h6 className="font-bold text-xl capitalize">secure payment</h6>
              <p className="leading-6 text-neutral-500 max-w-sm">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur</p>
            </li>
            <li className="space-y-1">
              <div>icon</div>
              <h6 className="font-bold text-xl capitalize">big discounts</h6>
              <p className="leading-6 text-neutral-500 max-w-sm">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur</p>
            </li>
          </ul>
        </section>

        <footer className="bg-[#f1f5f4]">
          <div className="divide-y-2">
            <ul className="p-20 grid grid-flow-col grid-cols-4 gap-6">
              <li>
                <Image 
                  src={logo} 
                />
                <p className="mt-4 max-w-xs text-neutral-500 leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
              </li>
              <li className="space-y-1">
                <h6 className="font-bold text-lg capitalize">quick links</h6>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-[#586f69]">Shop</a>
                  </li>
                  <li>
                    <a href="#" className="text-[#586f69]">Plants</a>
                  </li>
                  <li>
                    <a href="#" className="text-[#586f69]">Cacti</a>
                  </li>
                  <li>
                    <a href="#" className="text-[#586f69]">Cart</a>
                  </li>
                  <li>
                    <a href="#" className="text-[#586f69]">My account</a>
                  </li>
                </ul>
              </li>
              <li className="space-y-1">
                <h6 className="font-bold text-lg capitalize">our socials</h6>
                <ul className="flex flex-wrap space-x-1">
                  <li>icon</li>
                  <li>icon</li>
                  <li>icon</li>
                  <li>icon</li>
                </ul>
              </li>
              <li className="space-y-3">
                <h6 className="font-bold text-lg capitalize leading-6">subscribe to our newsletter</h6>
                <form onSubmit={(e)=>{e.preventDefault()}} className="space-y-4">
                  <input type="text" className="p-2 min-w-full outline-none bg-white" placeholder="Your email address"/>
                  <button type="submit" onClick={()=> alert("You subscribed")} className="bg-[#586f69] px-8 py-3 tracking-widest uppercase text-white">subscribe</button>
                </form>
              </li>
            </ul>
            <p className="px-20 py-10 text-neutral-500">Copyright © {date} eGrow Plants | Powered by eGrow Plants</p>
          </div>

        </footer>

      </main>
    </>
  )
}
