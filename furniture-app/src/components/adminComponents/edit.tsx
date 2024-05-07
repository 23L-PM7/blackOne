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
import { EditIcon } from "../vectors/editIcon";

type EditProps = {
  item: any;
};

export default function EditModal(props: EditProps) {
  const { item } = props;

  // modal open close
  const [open, setOpen] = useState(false);

  // modal input fields
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [details, setDetails] = useState(item.details);
  const [price, setPrice] = useState(item.price);
  const [category, setCategory] = useState(item.category);
  const [dimensions, setDimensions] = useState(item.dimensions);
  const [picture, setPicture] = useState(item.picture);

  // loading
  const [loading, setLoading] = useState(false);

  // fetching furnitures
  const loadfurnitures: any = useFurnitures(
    (state: any) => state.loadFurnitures
  );

  // create furnitures

  function confirm() {
    toast("Are you sure you want to update?", {
      action: {
        label: "Yes",
        onClick: () => submit(),
      },
    });
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
    const id = item._id;

    axios
      .put(`/api/furnitures/${id}`, {
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
        toast.success(`"${name}" category updated successfully.`);
        loadfurnitures();
      });
  }

  return (
    <div>
      <Button
        color="primary"
        onClick={() => setOpen(true)}
        size="sm"
        variant="solid"
        sx={{
          width: "30px",
          height: "30px",
          padding: "8px",
          backgroundColor: "#A18565",
          ...quicksand.style,
        }}
      >
        <EditIcon />
      </Button>
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
              onClick={confirm}
              className={`${quicksand.className} bg-[#A18565] text-[#F5F5F5] py-1 px-5 rounded-sm hover:bg-[#F5F5F5] hover:text-[#343434]`}
            >
              Update
            </button>
          </div>
        </Sheet>
      </Modal>
    </div>
  );
}
