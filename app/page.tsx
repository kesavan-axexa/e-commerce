"use client";

import { encryptData } from "@/utils/cryptoHelpers";
import React, { useCallback } from "react";

const Home: React.FC = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";

  const handleGoogleLogin = useCallback(() => { 
    const width = 600;
    const height = 700;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    const popup = window.open(
      `${BASE_URL}/auth/google`,
      "GoogleLogin",
      `width=${width},height=${height},top=${top},left=${left}`,
    );

    if (!popup) return;

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== BASE_URL) return;

      const { token, user } = event.data as { token?: string; user?: any };

      if (token && user) {
        const encryptedToken = encryptData(token);
        if (encryptedToken) {
          localStorage.setItem("authToken", encryptedToken);
          localStorage.setItem("user", JSON.stringify(user));

          console.log("Encrypted JWT Token:", encryptedToken);
          console.log("User Info:", user);
        }
      }

      window.removeEventListener("message", handleMessage);
      popup.close();
    };

    window.addEventListener("message", handleMessage);
  }, [BASE_URL]);

  return (
    <div className="flex flex-col  items-center justify-center min-h-screen gap-4 p-4">
      <h1 className="text-2xl font-semibold">Welcome to Axexa</h1>
      <p className="text-gray-600">
        Sign in with Google to continue to the dashboard
      </p>

      <button
        onClick={handleGoogleLogin}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Home;
