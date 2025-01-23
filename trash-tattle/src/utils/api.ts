// utils/api.ts
export const API_BASE_URL = "https://localhost:8080/api";

export interface UserCredentials {
  email: string;
  password: string;
}

export const registerUser = async (credentials: UserCredentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error(`Registration failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Error registering user: ${(error as Error).message}`);
  }
};

export const loginUser = async (credentials: UserCredentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Error logging in: ${(error as Error).message}`);
  }
};

