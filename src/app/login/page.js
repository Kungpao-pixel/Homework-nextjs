"use client";
import { useState } from "react";
import { login } from "@/fetching/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {

    await login({ email, password });
    router.push("/");

  };

  return (
    <div className="flex justify-center items-center h-screen bg-teal-950">
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full px-3 py-2 border rounded"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          type="button"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
}
