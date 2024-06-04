import { PhoneCall } from "lucide-react";
import Image from "next/image";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center px-20 h-[96px] bg-white w-full">
      <div className="flex text-sm text-black font-medium items-center">
        <div className="flex gap-2">
          <PhoneCall className="h-4 w-4"/> +216 53 535 372
        </div>
        <div className="ml-4">
          <Select>
            <SelectTrigger className="w-[60px] h-8 border-none">
              <SelectValue placeholder="EN" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="EN">EN</SelectItem>
                <SelectItem value="FR">FR</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Image
        width={197}
        height={54}
        src="./logo.svg"
        alt="logo"
      />
      <Link href="/booking">
        <div className=" flex text-white w-[160px] h-[50px] rounded-3xl bg-[#D1495B] items-center justify-center font-semibold">
          CTA
        </div>
      </Link>
    </div>
  );
}
 
export default Topbar;