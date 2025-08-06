"use client"
import { IoCheckmark } from "react-icons/io5";
import { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import Modal from "./Modal";

export default function SubscriptionPlans() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "", price: "" });

  const data = [
    {
      h: "Basic",
      p: "2000",
      d: "Individuals looking to prevent diabetes with expert guidance",
      b: [
        "2-week personalized diet plan",
        "1 consultation call",
        "24/7 WhatsApp support",
        "App access for tracking",
        "E-books & resources"
      ]
    },
    {
      h: "Advance",
      p: "3500",
      d: "People needing extended support with check-ins & webinars",
      b: [
        "Everything in Basic Plan",
        "4-week personalized diet plan",
        "4 follow-up calls",
        "Private community access",
        "4 educational webinars"
      ]
    },
    {
      h: "Premium",
      p: "6900",
      d: "Long-term diabetes prevention with expert & psychological support",
      b: [
        "Everything in Advance Plan",
        "2 psychologist sessions",
        "2 senior dietitian consultations",
        "Stress management & mental wellness",
      ]
    }
  ];

  const handleOpenModal = (plan) => {
    setSelectedPlan({ name: plan.h, price: plan.p });
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white flex flex-col justify-center items-center px-4 py-[3rem] gap-3 w-full">
      <h2 className="text-[24px] md:text-[48px] font-semibold text-center leading-[1.2]">Subscription Plans</h2>
      <p className="max-w-[60ch] text-[10px] md:text-[14px] text-center text-[#00000080] mx-auto mb-[12px] md:mb-[16px]">Find a Plan That Works for You.</p>

      <div className="md:w-10/12 flex flex-wrap justify-center items-stretch gap-y-8 gap-3 md:gap-6 mt-12">
        {data.map((item, index) => (
          <div key={index}
            className={`relative w-[90%] min-h-[400px] flex items-stretch xl:w-[30%] p-4 rounded-3xl cursor-pointer hover:shadow-xl transition-all duration-200 ${index === 1 ? "text-white bg-[#16BA98]" : "text-black bg-[#F0F9F8]"}`}>
            <div className="w-full">
              {(index === 1) && (
                <div className="absolute w-full flex justify-center text-xl text-center top-[-20px] left-1/2 -translate-x-1/2 bg-[#0D7E81] text-white py-2 px-3 rounded-t-2xl z-0 translate-y-2 font-semibold">
                  Most Popular
                </div>
              )}

              <div className="w-full flex flex-col items-start text-left rounded-3xl gap-3 md:gap-1 z-10 p-6">
                <h1 className={`text-3xl font-semibold ${index === 1 ? "text-white" : "text-[#0D8082]"}`}>
                  {item.h}
                </h1>
                <div className="flex items-end">
                  <h1 className="font-semibold text-3xl">₹{item.p}</h1>
                  <h2 className="text-lg"> /mo</h2>
                </div>
                <p className="text-sm font-semibold">Best For:</p>
                <p className="text-sm opacity-80 text-left">{item.d}</p>

                <div className="w-full flex flex-col min-h-[100px] gap-2 mt-4 mb-auto">
                  {item.b.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-5 h-5 text-sm rounded-full flex justify-center items-center ${index === 1 ? "bg-white text-[#16BA98]" : "bg-[#0D8082] text-white"}`}>
                        <IoCheckmark />
                      </div>
                      <p className="text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleOpenModal(item)}
                  className="mt-8 rounded-lg w-full py-2 font-semibold text-white bg-[#0D8082]"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} className="flex justify-center items-center">
          <RegistrationForm
            selectedPlan={selectedPlan.name}
            selectedPrice={selectedPlan.price}
          />
        </Modal>
      )}
    </div>
  );
}