'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTicketStore } from "@/store";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const TicketPreview = () => {
  const { formData, reset } = useTicketStore();
  const router = useRouter();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Add your download logic here
    setTimeout(() => {
      setIsDownloading(false);
      alert('Download complete!');
    }, 2000);
  };

  return (
    
    <section className="flex flex-col items-center justify-center p-4">
      {/* Ticket with background image - Responsive container */}
      <div className="relative w-full max-w-[350px] md:max-w-[400px] aspect-[3/5] bg-cover bg-center rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/icons/ticket.svg"
          alt="Ticket background"
          fill
          className=""
          priority
        />
        
        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-between p-14">
          {/* Event Title & Info */}
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white">Techember Fest "25</h2>
            <p className="text-xs md:text-sm text-gray-200 mt-2">
              D4 Rumens Road, Ikoyi, Lagos
              <br />
              March 15, 2025 | 7:00 PM
            </p>
          </div>

          {/* User Avatar with responsive sizing */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-teal-500">
            <Image
              src={formData.avatar || '/default-avatar.png'}
              alt="User Avatar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80px, 96px"
            />
          </div>

          {/* Ticket Details */}
          <div className="w-full bg-black/50 p-4 rounded-md backdrop-blur-sm">
            <h3 className="text-lg md:text-xl font-bold text-white truncate">
              {formData.fullName}
            </h3>
            <p className="text-sm md:text-base text-teal-300 truncate">{formData.email}</p>
            <div className="mt-3">
              <p className="text-xs text-gray-300">Special Request:</p>
              <p className="text-sm text-white break-words">{formData.request}</p>
            </div>
          </div>

          {/* Barcode */}
          <div className="text-center">
            <div className="bg-white w-32 h-8 rounded-sm mx-auto" />
            <p className="mt-2 text-xs text-gray-200">1234567891026</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col md:flex-row gap-4 w-full max-w-lg">
        <Button
          onClick={handleDownload}
          className="w-full bg-[#24A0B5] hover:bg-[#1c7e8f] text-white"
          disabled={isDownloading}
        >
          {isDownloading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Generating...
            </div>
          ) : (
            'Download Ticket'
          )}
        </Button>

        <Button
          onClick={() => {
            reset();
            router.push('/');
          }}
          className="w-full border border-[#24A0B5] bg-transparent text-[#24A0B5] hover:bg-[#24A0B5]/10"
        >
          Back to Home
        </Button>
      </div>
    </section>
  );
};