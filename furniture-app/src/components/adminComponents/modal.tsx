"use client";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useState } from "react";
import Input from "@mui/joy/Input";
import { cinzel, quicksand } from "@/app/theme";

export default function AdminModal() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className={`${quicksand.className} bg-[#A18565] text-[#F5F5F5] py-1 px-5 rounded-sm hover:bg-[#F5F5F5] hover:text-[#343434]`}
      >
        + Add new item
      </button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            backgroundColor: "#EDECE9",

            ...cinzel.style,
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <div>
            <h1 id="modal-title">NEW ITEM FORM</h1>
            <h1 id="modal-desc">This is the modal desc</h1>
          </div>
          <div>
            <Input
              sx={{
                ...cinzel.style,
              }}
              placeholder="Name of Product"
            />
          </div>
        </Sheet>
      </Modal>
    </div>
  );
}
