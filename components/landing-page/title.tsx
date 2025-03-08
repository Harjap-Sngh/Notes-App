import React from "react";

interface Titleprops {
  title: string;
  subheading?: string;
  pill: string;
}

const Title: React.FC<Titleprops> = ({ title, subheading, pill }) => {
  return (
    <>
      <section className="flex flex-col gap-4 justify-center items-start md:items-center">
        <article className="rounded-full p-[1px] text-sm dark:bg-gradient-to-r bg-washedBlue-50 text-red-200">
          sdvsvdv
        </article>
      </section>
    </>
  );
};

export default Title;
