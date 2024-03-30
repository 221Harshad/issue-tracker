"use client";

import React from "react";
import { TextField, TextArea,Button } from "@radix-ui/themes";
const NewIssuePage = () => {
  return (
    <div className="max-w-xl p-5 space-y-3">
      <TextField.Root placeholder="Title"></TextField.Root>
      <TextArea placeholder="Reply to comment…" />
      <Button>Submit</Button>
    </div>
  );
};

export default NewIssuePage;
