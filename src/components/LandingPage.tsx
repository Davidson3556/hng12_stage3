import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTicketStore } from '@/store';

const ticketOptions = [
  {
    id: "regular",
    price: "Free",
    label: "REGULAR ACCESS",
    seatsLeft: "20/92",
  },
  {
    id: "vip",
    price: "$150",
    label: "VIP ACCESS",
    seatsLeft: "20/92",
  },
  {
    id: "vvip",
    price: "$150",
    label: "VVIP ACCESS",
    seatsLeft: "20/92",
  },
];


const LandingPage = () => {
  const {
    ticketType,
    ticketCount,
    setTicketSelection,
    nextStep
  } = useTicketStore();

  return (
    <section className="flex flex-col items-center justify-center  ">
      <Card className="min-w-[700] bg-[#041E23] mx-auto border-[#0E464F]">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <h2 className="text-lg md:text-xl font-normal text-[#FFFFFF]">
              Ticket Selection
            </h2>
            <span className="text-xs md:text-sm text-gray-300">Step 1/3</span>
          </CardTitle>
          <div className="relative w-full bg-gray-600 h-1 mt-2 rounded">
            <div
              className="absolute left-0 top-0 h-full bg-teal-500 rounded transition-all duration-300"
              style={{ width: "33%" }}
            />
          </div>
        </CardHeader>
        
        <div className="border-0 md:border border-[#0E464F] md:bg-[#08252B] sm:bg-transparent  md:m-6 rounded-xl">
          <CardContent>
            <div className="mb-6 border border-[#07373F] my-4 rounded-lg mx-2 text-center p-4 bg-[radial-gradient(circle,#07373f,#0a0c1133)]">
              <h2 className="font-road_rage text-4xl md:text-5xl text-[#FAFAFA]">
                Techember Fest "25
              </h2>
              <p className="text-xs md:text-sm text-gray-400 mt-1">
                Join us for an unforgettable experience at <br /> 
                [Event Channel]! Secure your spot now.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                📍 [Event Location] || March 15, 2025 | 7:00 PM
              </p>
            </div>

            <div className="border border-[#07373F]"></div>

            <label className="block mt-6 text-[#FAFAFA] text-sm md:text-base">
              Select Ticket Type:
            </label>

            <div className="mb-6 border border-[#07373F] my-4 rounded-lg">
              <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-3 p-2">
                {ticketOptions.map((option) => (
                  <label
                    key={option.id}
                    htmlFor={option.id}
                    className={`
                      cursor-pointer rounded-md border p-3 transition-colors
                      ${ticketType === option.id 
                        ? "border-[#197686] bg-[#12464E]" 
                        : "border-[#197686]"}
                    `}
                  >
                    <input
                      type="radio"
                      id={option.id}
                      name="ticketType"
                      value={option.id}
                      checked={ticketType === option.id}
                      onChange={() => setTicketSelection(option.id, ticketCount)}                      
                      className="hidden"
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-lg md:text-xl font-semibold text-[#FFFFFF]">
                        {option.price}
                      </span>
                      <span className="mt-1 text-xs md:text-sm text-[#FAFAFA]">
                        {option.label}
                      </span>
                      <span className="text-xs text-[#D9D9D9] mt-2">
                        {option.seatsLeft}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <label className="block text-white text-xs md:text-sm mb-2">
                Number of Tickets:
              </label>
              <select
                value={ticketCount}
                onChange={(e) => setTicketSelection(
                  ticketType, 
                  Number(e.target.value)
                )}
                                className="w-full rounded-lg border border-[#07373F] bg-[#07373F] text-white p-2 md:p-3 text-sm md:text-base"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <div className="flex flex-col md:flex-row justify-between gap-2 mt-4">
                <Button
                  className="w-full md:w-[45%] border border-[#24A0B5] bg-transparent text-[#24A0B5] hover:bg-[#24A0B5]/10"
                >
                  Cancel
                </Button>
                <Button onClick={nextStep}
                                  className="w-full md:w-[45%] bg-[#24A0B5] hover:bg-[#1c7e8f] text-white"
                  // Add your navigation logic here
                >
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </section>
  );
};

export default LandingPage;
