"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

export default function NameGenerator() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Name Generator</h2>
      <Button>Generate Name</Button>
    </div>
  );
}