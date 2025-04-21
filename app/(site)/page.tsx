import Title from "@/components/landing-page/title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Banner from "../../public/appBanner.png";
import { CLIENTS, PRICING_CARDS, PRICING_PLANS, USERS } from "@/lib/constants";
import Calender from "../../public/cal.png";
import { randomUUID } from "crypto";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import CustomCard from "@/components/landing-page/customCard";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DiamondIcon from "../../public/icons/diamond.svg";
import CheckIcon from "../../public/icons/check.svg";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <section id="home" className="bg-background dark:bg-black">
        <div className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
          <Title
            pill="✨ Your Workspace, Perfected"
            title="All-In-One Collaboration and Productivity Platform"
          />
          <div className="bg-white p-[2px] rounded-xl bg-gradient-to-r from-brand-primaryBlue to-brand-primaryPurple sm:w-[300px] mt-6">
            <Button
              variant="secondary"
              className="w-full rounded-[10px] p-6 text-2xl bg-background"
            >
              Get Cypress Free
            </Button>
          </div>
          <div className="md:mt-[-90px] sm:w-full w-[750px] flex justify-center items-center mt-[-40px] relative sm:ml-0 ml-[-50px]">
            <Image src={Banner} alt="Application Banner" />
            <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute"></div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div
          className="overflow-hidden flex after:content[''] 
        after:dark:from-brand-dark after:to-transparent after:from-background after:bg-gradient-to-l after:right-0 after:top-0 after:bottom-0 after:w-20 absolute after:z-10 after:absolute
        
        before:content[''] before:dark:from-brand-dark before:to-transparent before:from-background before:bg-gradient-to-r before:left-0 before:top-0 before:bottom-0 before:w-20 before:z-10 before:content[''] before:absolute"
        >
          {[...Array(2)].map((arr, index) => (
            <div key={index} className="flex flex-nowrap animate-slide">
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className="flex items-center justify-center p-4 sm:p-8"
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="object-contain max-w-none"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 m-48 sm:px-6 flex justify-center items-center flex-col relative">
        <div className="w-[30%] blur-[120px] rounded-full h-32 absolute bg-brand-primaryPurple/50"></div>
        <Title
          pill="📅 Organise you tasks"
          title="Keep track of meetings all in one place"
          subheading="Cypress is the all-in-one platform for teams that want to build better software, faster."
        />
        <div className="mt-10 max-w-[750px] flex justify-center items-center relative sm:ml-0 rounded-2xl border-8 border-washed-purple-300 border-opacity-10">
          <Image src={Calender} alt="Banner" className="rounded-2xl" />
        </div>
      </section>

      <section className="relative">
        <div
          className="w-full
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          -z-100
          top-56
        "
        />
        <div
          className="mt-20
          px-4
          sm:px-6 
          flex
          flex-col
          overflow-x-hidden
          overflow-visible
        "
        >
          <Title
            title="Trusted by all"
            subheading="Join thousands of satisfied users who rely on our platform for their 
            personal and professional productivity needs."
            pill="Testimonials"
          />
          {[...Array(2)].map((arr, index) => (
            <div
              key={randomUUID()}
              className={twMerge(
                clsx("mt-10 flex flex-nowrap gap-6 self-start", {
                  "flex-row-reverse": index === 1,
                  "animate-[slide_250s_linear_infinite]": true,
                  "animate-[slide_250s_linear_infinite_reverse]": index === 1,
                  "ml-[100vw]": index === 1,
                }),
                "hover:paused"
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial.name}
                  className="w-[500px]
                  shrink-0s
                  rounded-xl
                  dark:bg-gradient-to-t
                  dark:from-border dark:to-background
                "
                  cardHeader={
                    <div
                      className="flex
                      items-center
                      gap-4
                  "
                    >
                      <Avatar>
                        <AvatarImage src={`/avatars/${index + 1}.png`} />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="dark:text-washed-purple-800">
                          {testimonial.name.toLocaleLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-washed-purple-800">
                      {testimonial.message}
                    </p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section
        className="mt-20
        px-4
        sm:px-6
      "
      >
        <Title
          title="The Perfect Plan For You"
          subheading="Experience all the benefits of our platform. Select a plan that suits your needs and take your productivity to new heights."
          pill="Pricing"
        />
        <div
          className="flex 
        flex-col-reverse
        sm:flex-row
        gap-4
        justify-center
        sm:items-stretch
        items-center
        mt-10
        "
        >
          {PRICING_CARDS.map((card) => (
            <CustomCard
              key={card.planType}
              className={clsx(
                "w-[300px] rounded-2xl dark:bg-black/40 background-blur-3xl relative",
                {
                  "border-brand-primaryPurple/70":
                    card.planType === PRICING_PLANS.proplan,
                }
              )}
              cardHeader={
                <CardTitle
                  className="text-2xl
                  font-semibold
              "
                >
                  {card.planType === PRICING_PLANS.proplan && (
                    <>
                      <div
                        className="hidden dark:block w-full blur-[120px] rounded-full h-32
                        absolute
                        bg-brand-primaryPurple/80
                        -z-10
                        top-0
                      "
                      />
                      <Image
                        src={DiamondIcon}
                        alt="Pro Plan Icon"
                        className="absolute top-6 right-6"
                      />
                    </>
                  )}
                  {card.planType}
                </CardTitle>
              }
              cardContent={
                <CardContent className="p-0">
                  <span
                    className="font-normal 
                    text-2xl
                "
                  >
                    ${card.price}
                  </span>
                  {+card.price > 0 ? (
                    <span className="dark:text-washed-purple-800 ml-1">
                      /mo
                    </span>
                  ) : (
                    ""
                  )}
                  <p className="dark:text-washed-purple-800">
                    {card.description}
                  </p>
                  <Button className="whitespace-nowrap w-full mt-4">
                    {card.planType === PRICING_PLANS.proplan
                      ? "Go Pro"
                      : "Get Started"}
                  </Button>
                </CardContent>
              }
              cardFooter={
                <ul
                  className="font-normal
                  flex
                  mb-2
                  flex-col
                  gap-4
                "
                >
                  <small>{card.highlightFeature}</small>
                  {card.freatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex
                      items-center
                      gap-2
                    "
                    >
                      <Image src={CheckIcon} alt="Check Icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
