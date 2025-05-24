"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function HomePage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <h1 className="text-2xl font-semibold mb-4">Welcome</h1>
        <button
          onClick={() => signIn("google")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow"
        >
          Sign in with Google
        </button>
        <button
          onClick={() => {
            window.google.accounts.id.initialize({
              callback: () => alert("salam"),
              client_id: process.env.GOOGLE_CLIENT_ID!,
            });
            google.accounts.id.prompt();
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow"
        >
          Sign in with Google Modal
        </button>
      </div>
    );
  }

  console.log(session.user);
  const { name, email, image } = session.user!;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
      <Image
        src={image ?? ""}
        alt={name ?? "User"}
        width={96}
        height={96}
        className="rounded-full shadow-lg mb-4"
      />
      <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
      <p className="text-gray-500 mb-6">{email}</p>
      <button
        onClick={() => signOut()}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded shadow"
      >
        Sign out
      </button>
    </div>
  );
}
