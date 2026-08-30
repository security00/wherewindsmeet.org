import openNextWorker from "./.open-next/worker.js";

const CANONICAL_HOST = "wherewindsmeet.org";
const LEGACY_HOST = "www.wherewindsmeet.org";

const worker = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Run this before OpenNext cache interception so cached SSG pages cannot
    // bypass the canonical-host redirect.
    if (url.hostname === LEGACY_HOST) {
      url.protocol = "https:";
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }

    return openNextWorker.fetch(request, env, ctx);
  },
};

export default worker;
