export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/((?!$|register|api|login|forget-password|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)",
  ],
};
