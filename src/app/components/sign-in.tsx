"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

export function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const credentials = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };
    // await signInAuth("credentials", { ...credentials })
    await signIn("credentials", { ...credentials });
  };
  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} style={{ padding: 16 }}>
        <Typography variant="h5" gutterBottom>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 16 }}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
