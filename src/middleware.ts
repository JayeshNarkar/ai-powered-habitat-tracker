export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard", "/signout", "/api/:path*"] };
