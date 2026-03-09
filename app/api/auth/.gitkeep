import { signIn } from "@/auth";

export async function GET() {
  const url = await signIn("credentials", {
    redirectTo: "https://panchu-hs46.vercel.app/",
    callbackURL: "https://panchu-hs46.vercel.app/",
  });

  return Response.redirect(url);
}
