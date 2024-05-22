"use client";
import { cinzel, quicksand } from "@/app/theme";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

// export default function Home() {
//   const { user, error, isLoading } = useUser();
//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;
//   if (!user) return <Link href="/api/auth/login">Login</Link>;
//   return <div className="flex justify-center ">Hello {user.name},</div>;
// }

import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function EditButton() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) return <Link href="/api/auth/login">Login</Link>;
  return (
    <div
      className="gradient-custom-2 mt-20"
      style={{ backgroundColor: "#EDECE9" }}
    >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#A18565", height: "190px" }}
              >
                <div className=" p-2 " style={{ width: "190px" }}>
                  <div className="font-medium text-lg">User Profile</div>
                  <MDBCardImage
                    src={user.picture}
                    alt="Generic placeholder image"
                    className="flex first-letter:justify-center img-thumbnail"
                    fluid
                    style={{ width: "150px", zIndex: "1" }}
                  />
                </div>

                <div
                  className="ms-3"
                  style={{ marginTop: "130px", backgroundColor: "#343434" }}
                ></div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex text-center py-3">
                  <div>
                    <MDBCardText className="mb-1 font-medium text-lg">
                      Email
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      {user.email}
                    </MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 font-medium text-lg">
                      nickname
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      {user.nickname}
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 font-medium text-lg">
                      Phone
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      +976 88222211
                    </MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <MDBCardText className="font-italic mb-1">
                      Web Developer
                    </MDBCardText>
                    <MDBCardText className="font-italic mb-1">
                      Lives in New York
                    </MDBCardText>
                    <MDBCardText className="font-italic mb-0">
                      Photographer
                    </MDBCardText>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4 font-medium text-lg">
                  <a href="/api/auth/logout">Logout</a>
                </div>
                <MDBRow></MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
