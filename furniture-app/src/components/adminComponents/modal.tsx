"use client";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import { useState } from "react";
import Input from "@mui/joy/Input";
import { cinzel, quicksand } from "@/app/theme";
import { useFurnitures } from "../utility/utils";
import { Button, SvgIcon, Textarea, styled } from "@mui/joy";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { ImageField } from "./photos";

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
  const [picture, setPicture] = useState(
    "https://www.karageorgiou.gr/wp-content/uploads/2024/03/1.jpg"
  );

  // loading
  const [loading, setLoading] = useState(false);

  // fetching furnitures
  const loadfurnitures: any = useFurnitures(
    (state: any) => state.loadFurnitures
  );

  // create furniture
  function handlePicture(data: string) {
    setPicture(data);
  }

  function submit() {
    // check fields
    if (name == null || name == "") {
      toast.error(`Name is empty please fill all forms`);
      return;
    }
    if (description == null || description == "") {
      toast.error(`Description is empty please fill all forms`);
      return;
    }
    if (details == null || details == "") {
      toast.error(`Details is empty please fill all forms`);
      return;
    }
    if (price <= 25 || !price) {
      toast.error(`Price is not provided please fill all forms`);
      return;
    }
    if (category == null || category == "") {
      toast.error(`Category is empty please fill all forms`);
      return;
    }
    if (dimensions == null || dimensions == "") {
      toast.error(`Dimensions are not provided please fill all forms`);
      return;
    }
    if (picture == null || picture == "") {
      toast.error(`Picture is not uploaded`);
      return;
    }

    // if fields are okay then submit
    setLoading(true);
    axios
      .post("/api/furnitures", {
        name,
        description,
        details,
        price,
        category,
        dimensions,
        picture,
      })
      .then(() => {
        setOpen(false);
        reset();
        toast.success(`"${name}" category created successfully.`);
        loadfurnitures();
      });
  }

  // reset and fetch the new product
  function reset() {
    setLoading(false);
    setName("");
    setDetails("");
    setDescription("");
    setCategory("");
    setDimensions("");
    setPrice(0);
    setPicture("");
  }

  return (
    <div>
      <Toaster position="top-center" />
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
              Please input the product information
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
            {/* upload area */}
            <ImageField value={picture} onChange={setPicture} />

            <button
              onClick={submit}
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
