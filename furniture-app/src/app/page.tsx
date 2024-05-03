"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Header } from "@/components/header/Headers";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log(user);

  return (
    <div>
      <a href="/api/auth/login">Login</a>
      <br />
      <a href="/api/auth/logout">Logout</a>
      <Header />
    </div>
  );
}
