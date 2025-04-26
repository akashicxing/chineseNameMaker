export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Serve static assets from the static directory
    if (url.pathname.startsWith('/static/')) {
      return env.ASSETS.fetch(request);
    }
    
    // Handle all other routes through Next.js
    try {
      return await env.ASSETS.fetch(request);
    } catch (e) {
      return new Response(`${e.message}\n${e.stack}`, { status: 500 });
    }
  },
}; 