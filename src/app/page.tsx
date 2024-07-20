"use client";
import Image from "next/image";
import { Button, Box } from "@mui/material";
import styled from "@emotion/styled";

const StyledBox = styled(Box)`
 
`;
export default function Home() {
  return (
    <StyledBox>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </StyledBox>
  );
}
