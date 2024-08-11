"use client";
import React, { useState } from "react";
import { Tabs, Tab, Box, Paper, Container } from "@mui/material";
import { SignIn } from "./sign-in";
import { SignUp } from "./sign-up";

export function AuthTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={1} style={{ padding: 16 }}>
        <Box sx={{ mt: 4 }}>
          <Tabs value={activeTab} onChange={handleTabChange} centered>
            <Tab label="Sign In" />
            <Tab label="Sign Up" />
          </Tabs>
          <Box sx={{ mt: 2 }}>
            {activeTab === 0 && <SignIn />}
            {activeTab === 1 && <SignUp />}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
