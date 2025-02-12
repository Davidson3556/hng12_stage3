import React from "react";
import { useState } from "react";
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
  const [ticketType, setTicketType] = useState("regular");
  const [ticketCount, setTicketCount] = useState(1);
  return (
    <section className="flex flex-col items-center justify-center p-2">
      <Card className="w-full max-w-md bg-[#041E23] mx-auto border-[#0E464F]">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <h2 className="text-xl font-normal text-[#FFFFFF]">
              Ticket Selection
            </h2>
            <span className="text-sm text-gray-300">Step 1/3</span>
          </CardTitle>
          {/* Progress Bar (33% filled) */}
          <div className="relative w-full bg-gray-600 h-1 mt-2 rounded">
            <div
              className="absolute left-0 top-0 h-full bg-teal-500 rounded transition-all duration-300"
              style={{ width: "33%" }} // For Step 1 of 3, ~33%
            />
          </div>
        </CardHeader>
        <div className="border border-[#0E464F] bg-[#08252B] m-6  rounded-xl">
          <CardContent>
            <div className="mb-6 border border-[#07373F] my-4 rounded-lg mx-2 text-center ">
              <h2 className="font-road_rage text-5xl text-[#FAFAFA] ">
                Techember Fest "25
              </h2>
              <p className="text-xs md:text-sm text-gray-400 mt-1 ">
                Join us for an unforgettable experience at <br /> [Event
                Channel]! Secure your spot now.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                📍 [Event Location] || March 15, 2025 | 7:00 PM
              </p>
            </div>
            <div className="border border-[#07373F]"></div>

            {/* Label for the section */}
            <label className="block mt-6 text-[#FAFAFA]"> Number of Tickets </label>

            <div className="mb-6 border border-[#07373F] my-4 rounded-lg ">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
                {ticketOptions.map((option) => {
                  const isSelected = ticketType === option.id;
                  return (
                    <label
                      key={option.id}
                      htmlFor={option.id}
                      className={`
                      font-roboto  cursor-pointer rounded-md border m-2 space-x-2   transition-colors
          ${
            isSelected
              ? "border-[#197686] bg-[#12464E]"
              : "border-[#197686]"
          }
        `}
                    >
                      {/* Hidden Radio for Accessibility */}
                      <input
                        type="radio"
                        id={option.id}
                        name="ticketType"
                        value={option.id}
                        checked={isSelected}
                        onChange={() => setTicketType(option.id)}
                        className="hidden"
                      />

                      {/* Ticket Info: Price on top, label below, seats left at the bottom */}
                      <div className="flex flex-col items-start">
                        <span className="text-xl font-semibold text-[#FFFFFF]">
                          {option.price}
                        </span>
                        <span className="mt-1 text-sm text-[#FAFAFA] ">{option.label}</span>
                        <span className="text-xs text-[#D9D9D9]">
                          {option.seatsLeft}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            <label className="block mt-6 text-[#FAFAFA]">Select Ticket Type:</label>

            {/* <div className="space-y-4">
            <Label>Select Ticket Type:</Label>
            <RadioGroup
              value={ticketType}
              onValueChange={(val) => setTicketType(val)}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="regular" value="free" />
                <Label htmlFor="regular" className="text-sm">
                  Regular Access — Free
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="vip" value="vip" />
                <Label htmlFor="vip" className="text-sm">
                  VIP Access — $50
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="vvip" value="vvip" />
                <Label htmlFor="vvip" className="text-sm">
                  VVIP Access — $100
                </Label>
              </div>
            </RadioGroup>

            <div className="space-y-2">
              <Label htmlFor="quantity">Number of Tickets</Label>
              <Input
                id="quantity"
                type="number"
                min={1}
                value={ticketQuantity}
                onChange={(e) => setTicketQuantity(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div> */}
   <div className="mt-6 space-y-4">
      {/* Ticket Quantity Dropdown */}
      <label className="block text-white text-sm mb-2">Number of Tickets:</label>
      <select
        value={ticketCount}
        onChange={(e) => setTicketCount(Number(e.target.value))}
        className="w-full rounded-lg border border-gray-600 bg-[#132032] text-white p-3 focus:border-teal-400 focus:ring-2 focus:ring-teal-400"
      >
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        {/* Cancel Button */}
        <Button
          variant="outline"
          className="w-[45%] border-gray-600 text-white hover:border-teal-400"
        >
          Cancel
        </Button>

        {/* Next Button */}
        <Button className="w-[45%] bg-teal-500 hover:bg-teal-600 text-white">
          Next
        </Button>
      </div>
    </div>

          </CardContent>

          <CardFooter className="flex flex-col md:flex-row gap-2 w-full">
            <Button variant="outline" className="w-full md:w-auto">
              Cancel
            </Button>
            <Button className="w-full md:w-auto">Next</Button>
          </CardFooter>
        </div>
      </Card>
    </section>
  );
};

export default LandingPage;
