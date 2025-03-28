import { useActionData } from "react-router";
import { insertSubscriber } from "~/database/database.server";
import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Coming Soon - Betterbloq" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email");

  if (!email) {
    return { error: "All fields are required." };
  }

  if (typeof email !== 'string' || !email.includes('@')) {
    return { error: 'Please enter a valid email address.' };
  }

  const result = insertSubscriber(email);

  return { success: "Thank you for your interest! We'll be in touch." };
}

export default function Home() {
  const actionData: {
    error: string;
    success: string;
  } | undefined = useActionData();

  return <Welcome actionData={actionData} />;
}
