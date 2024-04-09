export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/((?!$|register|api|login|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)",
  ],
};
