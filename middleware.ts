import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({

    publicRoutes: [
        '/',
        '/events/:id',
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing',
        "/favicon.ico",
        "/assets/images/logo.svg",
        "/assets/images/dotted-pattern.png"
    ],

    ignoredRoutes:[
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing',
        "/favicon.ico",
        "/assets/images/logo.svg",
        "/assets/images/dotted-pattern.png",

    ]

});

export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};