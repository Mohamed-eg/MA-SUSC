import { Container } from "@mui/material";
import React from "react";
import FormR from "./form";
import myIMG from "../img/Logo-MA.png";
export default function Contaner() {
  return (
    <div>
      <Container maxWidth="sm">
        <div>
          <img className="MA-logo" src={myIMG}></img>
          <p>Kandil Winter Training</p>
        </div>
        <FormR></FormR>
      </Container>
    </div>
  );
}
