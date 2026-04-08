import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarsBackgrounds } from "@/components/ui/demo-components-backgrounds-stars";

import { GoldTitle, GrayTitle, SectionLabel } from "@/components/ui/reusable";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden" >
    
    {/* hero */}

      <section className="pt-28 sm:pt-32 relative min-h-screen grid grid-cols-1 lg:grid-cols-5
       px-4 sm:px-8 pb-20 overflow-hidden
      " >
       <StarsBackgrounds/>
       <div className="col-span-full lg:col-span-3 flex flex-col items-center justify-center text-center lg:-rotate-2" >
           <Badge  variant="gold" >Powered By AI - Now in Beta</Badge>
       </div>

       
      </section>
    </div>
  );
}
