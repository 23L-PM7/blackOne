"use client";
import { Button, SvgIcon, styled } from "@mui/joy";
import { useState } from "react";
import { quicksand } from "@/app/theme";
import { Loader } from "../loader";

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

export function ImageField({ value, onChange }: any) {
  const [uploading, setUploading] = useState(false);
  const [button, setButton] = useState("Upload a photo");

  async function handleUpload(e: any) {
    setButton("Loading... T-T");
    setUploading(true);

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file, file.name);
    formData.append("upload_preset", "t7ualgaz");
    formData.append("cloud_name", "dbeiy8zw2");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dbeiy8zw2/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (res.ok) {
        const { secure_url } = await res.json();
        onChange(secure_url);
        setButton("Upload complete >.<");
        setUploading(false);
      }
    } catch (e) {
      alert("An Error Occured While Uploading");
      console.log(e);
    }
  }

  return (
    <div>
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
        {button}
        <VisuallyHiddenInput
          disabled={uploading}
          onChange={handleUpload}
          type="file"
          name="file"
        />
      </Button>
    </div>
  );
}
