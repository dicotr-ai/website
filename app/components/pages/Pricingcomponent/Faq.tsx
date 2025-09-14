import { useState } from "react"

const FAQAccordion = () => {
  // activeIndex can be either a number or null
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const list = [
    {
      question: "Can I upgrade or cancel anytime?",
      answer: "Yes, all plans are flexible with monthly billing.",
      image:"/Number1.png"
    },
    {
      question: "Do you offer one-time projects?",
      answer: "We accept all major credit cards and PayPal.",
      image:"/Number2.png"
    },
    {
      question: "Are there any setup fees?",
      answer: "No, there are no setup fees for any of our plans.",
      image:"/Number3.png"
    },
  ]

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="accordion w-full flex flex-col divide-y divide-slate-200">
      {list.map((item, index) => (
        <div
          key={index}
          className="py-6 flex items-start justify-between gap-6"
        >
          {/* Left Icon/Image */}
          <div className="image w-12 h-12 flex-shrink-0">
            <img
              src={item.image}
              alt="FAQ"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Question + Answer */}
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-rubik font-bold text-lg">{item.question}</h3>

              {/* Toggle button in circle */}
              <button
                className={`w-8 h-8 flex items-center justify-center rounded-full border text-lg font-bold cursor-pointer transition ${
                  activeIndex === index
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
                onClick={() => toggle(index)}
              >
                {activeIndex === index ? "×" : "+"}
              </button>
            </div>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-slate-600 font-thin">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FAQAccordion
