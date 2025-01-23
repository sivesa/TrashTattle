// hooks/useAuth.ts
import { useState } from "react";
import { UserCredentials, registerUser, loginUser } from "../utils/api";
import { logMessage, LogLevel } from "../utils/logging";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (credentials: UserCredentials) => {
    setLoading(true);
    setError(null);
    try {
      const response = await registerUser(credentials);
      logMessage(LogLevel.INFO, "User registered successfully", response);
      return response;
    } catch (err) {
      setError((err as Error).message);
      logMessage(LogLevel.ERROR, "Registration error", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials: UserCredentials) => {
    setLoading(true);
    setError(null);
    try {
      const response = await loginUser(credentials);
      logMessage(LogLevel.INFO, "User logged in successfully", response);
      return response;
    } catch (err) {
      setError((err as Error).message);
      logMessage(LogLevel.ERROR, "Login error", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { register, login, loading, error };
};

