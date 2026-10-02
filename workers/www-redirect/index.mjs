// Legacy-host redirect: www.wherewindsmeet.org/* -> https://wherewindsmeet.org/*
// Static-assets _redirects cannot match on host, and this account's deploy token
// cannot manage zone Redirect Rules, so this tiny Worker only runs for the www
// host. The apex site itself is an assets-only Worker (no script invocations).
const CANONICAL_HOST = "wherewindsmeet.org";

const wwwRedirect = {
  async fetch(request) {
    const url = new URL(request.url);
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    url.port = "";
    return Response.redirect(url.toString(), 301);
  },
};

export default wwwRedirect;
