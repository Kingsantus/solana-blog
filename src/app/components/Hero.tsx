"use client";

import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["seamless", "innovative", "dynamic", "engaging", "efficient", "futuristic"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-10 lg:py-20 items-center justify-center flex-col">
          <div className="flex">
           <a 
              href="https://www.x.com/superteamng" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="gap-4 px-4 py-2 bg-blue-500 text-white text-xl border rounded-sm flex items-center justify-center hover:bg-gray-700"
            >
              Follow Superteam
            </a>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Solana Blog App</span>
              <span className="relative flex w-full justify-center text-muted-foreground overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight max-w-2xl text-center">
              Explore the <strong>Psolite Solana Workshop</strong>-a four-day deep dive into all facetsof Solana. From Connecting wallet to creating account, sending sol and SPL token, creeating and minting tokens, and running blog site on solana ecosystems, unlock the full potential of decentralized tech. 
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <a 
              href="https://www.youtube.com/@digital_psolite" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="gap-4 px-4 py-2 bg-blue-500 text-white text-xl border rounded-sm flex items-center justify-center hover:bg-gray-700"
            >
              Watch Tutorial
            </a>
              <WalletMultiButton />
          </div>
        </div>
      </div>
    </div>
  );
};
