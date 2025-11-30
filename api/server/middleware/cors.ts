export default defineEventHandler((event) => {
    const origin = event.node.req.headers.origin || "*";

    // allow all origins
    setResponseHeader(event, "Access-Control-Allow-Origin", origin);
    setResponseHeader(event, "Vary", "Origin");

    // allowed methods
    setResponseHeader(event, "Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");

    // allowed headers
    setResponseHeader(event, "Access-Control-Allow-Headers", "Content-Type, Authorization");

    // if OPTIONS → return directly
    if (event.node.req.method === "OPTIONS") {
        event.node.res.statusCode = 200;
        event.node.res.end();
        return;
    }
});
