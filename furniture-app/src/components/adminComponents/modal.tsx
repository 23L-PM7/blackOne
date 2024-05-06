"use client";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import { useState } from "react";
import Input from "@mui/joy/Input";
import { cinzel, quicksand } from "@/app/theme";
import { useFurnitures } from "../utility/utils";
import { Button, SvgIcon, Textarea, styled } from "@mui/joy";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function AdminModal() {
  // modal open close
  const [open, setOpen] = useState(false);

  // modal input fields
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [dimensions, setDimensions] = useState("");

  // fetching furnitures
  const loadfurnitures: any = useFurnitures(
    (state: any) => state.loadFurnitures
  );

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
          <div className="flex flex-col py-4">
            <h1 id="modal-title" className={`${cinzel.className}`}>
              NEW ITEM FORM
            </h1>
            <h1 id="modal-desc" className={`${quicksand.className}`}>
              This is the modal desc
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            {/* input fields */}
            <div>
              <label className={`${quicksand.className}`}>Name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  ...quicksand.style,
                }}
                placeholder="Name of Product"
              />
            </div>
            <div>
              <label className={`${quicksand.className}`}>Category</label>
              <Input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                sx={{
                  ...quicksand.style,
                }}
                placeholder="Category of Product"
              />
            </div>
            <div>
              <label className={`${quicksand.className}`}>Description</label>
              <Textarea
                minRows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{
                  ...quicksand.style,
                }}
                placeholder="Description of Product"
              />
            </div>
            <div>
              <label className={`${quicksand.className}`}>Details</label>
              <Textarea
                minRows={2}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                sx={{
                  ...quicksand.style,
                }}
                placeholder="Details of Product"
              />
            </div>
            <div>
              <label className={`${quicksand.className}`}>Dimensions</label>
              <Input
                value={dimensions}
                onChange={(e) => setDimensions(e.target.value)}
                sx={{
                  ...quicksand.style,
                }}
                placeholder="Dimensions of Product"
              />
            </div>
            <div>
              <label className={`${quicksand.className}`}>Price</label>
              <Input
                value={price}
                type="number"
                onChange={(e) => setPrice(e.target.valueAsNumber)}
                sx={{
                  ...quicksand.style,
                }}
                placeholder="Price of Product in $"
              />
            </div>
            <div>
              <label className={`${quicksand.className}`}>
                Photo of Product
              </label>
              <Input
                value={price}
                type="number"
                onChange={(e) => setPrice(e.target.valueAsNumber)}
                sx={{
                  ...quicksand.style,
                }}
                placeholder="Price of Product in $"
              />
            </div>
            {/* upload area */}
            <Button
              sx={{
                backgroundColor: "#F5F5F5",
                color: "#343434",
                ...quicksand.style,
              }}
              component="label"
              role={undefined}
              tabIndex={-1}
              variant="outlined"
              color="neutral"
              startDecorator={
                <SvgIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </SvgIcon>
              }
            >
              Upload a Photo
              <VisuallyHiddenInput type="file" />
            </Button>

            <button
              className={`${quicksand.className} bg-[#A18565] text-[#F5F5F5] py-1 px-5 rounded-sm hover:bg-[#F5F5F5] hover:text-[#343434]`}
            >
              Create
            </button>
          </div>
        </Sheet>
      </Modal>
    </div>
  );
}
