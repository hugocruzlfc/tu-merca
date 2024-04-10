export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/((?!$|register|api|login|forget-password|update-password|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)",
  ],
};
