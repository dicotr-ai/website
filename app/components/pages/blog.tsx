import { useState } from "react";
import Image from "next/image";

// Blog Card Component
interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  excerpt?: string;
  large?: boolean;
}

const BlogCard = ({ image, date, title, excerpt, large }: BlogCardProps) => {
  return (
    <article className={`bg-white ${large ? "w-[540px]" : "w-[270px]"}`}>
      <Image
        src={image}
        alt={title}
        width={large ? 540 : 270}
        height={large ? 343 : 245}
        className="rounded-md object-cover"
      />

      <div className={large ? "mt-6" : "mt-4 relative"}>
        <p
          className={`text-[#808371] ${
            large ? "text-lg mb-2" : "text-sm mb-2"
          }`}
        >
          {date}
        </p>
        <h3
          className={`text-[#253D32] font-medium ${
            large ? "text-[26px] leading-9 mb-6" : "text-2xl leading-8 mb-3"
          }`}
        >
          {title}
        </h3>
        {excerpt && (
          <p className="text-[#78847D] text-lg leading-7">{excerpt}</p>
        )}

        {large ? (
            <a
                href="#"
                className="inline-block mt-6 px-12 py-5 border border-[#A3B938] rounded-full text-[#98AA28] font-semibold text-xl shadow-[0px_34px_50px_rgba(7,63,67,0.07)]"
            >
                Read More
            </a>
            ) : (
            <a
                href="#"
                className="flex justify-center items-center mt-6 w-[50px] h-[50px] border border-[#A3B938] rounded-full text-[#98AA28] shadow-[0px_34px_50px_rgba(7,63,67,0.07)]"
            >
                <Image src="/Show.svg" alt="read more" width={25} height={25} />
            </a>
        )}

      </div>
    </article>
  );
};

// Blog Section
const Blog = () => {
  const [activeTab, setActiveTab] = useState("Content Writing");

  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-end mb-[60px]">
          <h2 className="text-[#253D32] font-bold text-[42px] leading-[65px]">
            Read More Articles
            <br />
            From Our Blog
          </h2>

          {/* Tabs */}
          <div className="flex gap-12 relative">
            {["Content Writing", "Content Marketing"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-2xl ${
                  activeTab === tab ? "text-[#253D32] font-normal" : "text-[#808371]"
                }`}
              >
                {tab}
              </button>
            ))}
            {/* underline for active tab */}
            <div
              className="absolute bottom-0 h-[3px] bg-[#98AA28] transition-all duration-300"
              style={{
                width: activeTab === "Content Writing" ? "104px" : "150px",
                left: activeTab === "Content Writing" ? "35px" : "180px",
              }}
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-[540px_270px_270px] gap-8">
          {/* Large Card */}
          <BlogCard
            image="/seo.svg"
            date="AUGUST 17, 2021"
            title="10 Reasons to invest in SEO copywriting services"
            large
          />

          {/* Small Cards */}
          <BlogCard
            image="/digimark.svg"
            date="AUGUST 17, 2021"
            title="How to get hired at a top Digital Marketing"
            excerpt="Agency life. We’ve all seen the photos posted on social media – the cool..."
          />
          <BlogCard
            image="/copywriting.svg"
            date="AUGUST 17, 2021"
            title="Copywriting guidelines during the coronavirus"
            excerpt="Since the coronavirus hit earlier this year, it’s hard to go anywhere..."
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
