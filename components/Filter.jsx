'use client'
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "./ui/separator";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const Filter = () => {  
  /* TODO: manage states */
  const [openLevel, setOpenLevel] = React.useState(false);
  const [openDestination, setOpenDestination] = React.useState(false);
  const [openMajor, setOpenMajor] = React.useState(false);
  const [LevelValue, setLevelValue] = React.useState("");
  const [destinationValue, setDestinationValue] = React.useState("");
  const [majorValue, setMajorValue] = React.useState("");

  return (
    <div className="flex items-center justify-center mt-8 p-2 bg-white/25 rounded-sm">
      <div className="flex bg-white p-3 rounded-sm items-center justify-center">
        <Popover open={openLevel} onOpenChange={setOpenLevel}>
          <PopoverTrigger asChild className="border-none">
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openLevel}
              className="w-[200px] h-[45px] items-center justify-start"
            >
              {LevelValue
                ? frameworks.find((framework) => framework.value === LevelValue)?.label
                : "Study level"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              <Separator orientation="vertical" className="px-px py-5 ml-auto"/>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Study level" />
              <CommandEmpty>No study level found</CommandEmpty>
              <CommandGroup>
                <CommandList>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setLevelValue(currentValue === LevelValue ? "" : currentValue);
                        setOpenLevel(false);
                      }}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${
                          LevelValue === framework.value ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      {framework.label}
                    </CommandItem>
                  ))}
                </CommandList>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <Popover open={openDestination} onOpenChange={setOpenDestination}>
          <PopoverTrigger asChild className="border-none">
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openDestination}
              className="w-[250px] h-[45px] items-center justify-start"
            >
              {destinationValue
                ? frameworks.find((framework) => framework.value === destinationValue)?.label
                : "Search by destination"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              <Separator orientation="vertical" className="px-px py-5 ml-auto"/>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[250px] p-0">
            <Command>
              <CommandInput placeholder="Destination..." />
              <CommandEmpty>No study level found</CommandEmpty>
              <CommandGroup>
                <CommandList>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setDestinationValue(currentValue === destinationValue ? "" : currentValue);
                        setOpenDestination(false);
                      }}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${
                          destinationValue === framework.value ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      {framework.label}
                    </CommandItem>
                  ))}
                </CommandList>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <Popover open={openMajor} onOpenChange={setOpenMajor}>
          <PopoverTrigger asChild className="border-none">
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openMajor}
              className="w-[220px] h-[45px] items-center justify-start"
            >
              {majorValue
                ? frameworks.find((framework) => framework.value === majorValue)?.label
                : "Search by Major"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              <Separator orientation="vertical" className="px-px py-5 ml-auto"/>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[220px] p-0">
            <Command>
              <CommandInput placeholder="Major..." />
              <CommandEmpty>No study level found</CommandEmpty>
              <CommandGroup>
                <CommandList>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setMajorValue(currentValue === majorValue ? "" : currentValue);
                        setOpenMajor(false);
                      }}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${
                          majorValue === framework.value ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      {framework.label}
                    </CommandItem>
                  ))}
                </CommandList>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <div className="flex pl-1">
          <Button className="bg-[#004E98] px-16 hover:bg-[#004E98]/75"> 
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
