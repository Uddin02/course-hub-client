import React from "react";

const Blog = () => {
  return (
    <div className="m-5">
      <h1 className="text-2xl text-slate-700 text-center mb-10 underline">
        Some questions answer about node and firebase
      </h1>
      <p className="text-2xl text-slate-500">1. What is cors?</p>
      <p className="text-justify text-2xl text-slate-500">
        Ans: Cross-Origin Resource Sharing (CORS) is an HTTP-header based
        mechanism that allows a server to indicate any origins (domain, scheme,
        or port) other than its own from which a browser should permit loading
        resources. CORS also relies on a mechanism by which browsers make a
        "preflight" request to the server hosting the cross-origin resource, in
        order to check that the server will permit the actual request. In that
        preflight, the browser sends headers that indicate the HTTP method and
        headers that will be used in the actual request. <br />
        An example of a cross-origin request: the front-end JavaScript code
        served from https://domain-a.com uses XMLHttpRequest to make a request
        for https://domain-b.com/data.json.
      </p>

      <p className="text-2xl text-slate-500 mt-10">
        2. Why are you using firebase? What other options do you have to
        implement authentication?
      </p>
      <p className="text-justify text-2xl text-slate-500">
        Ans: The Firebase Realtime Database lets you build rich, collaborative
        applications by allowing secure access to the database directly from
        client-side code. Data is persisted locally, and even while offline,
        realtime events continue to fire, giving the end user a responsive
        experience. <br />
        Authentication is the process of identifying users that request access
        to a system, network, or device. Access control often determines user
        identity according to credentials like username and password. Other
        authentication technologies like biometrics and authentication apps are
        also used to authenticate user identity. <br />
        <br />
        5 Common Authentication Types <br />
        <br />
        1. Password-based authentication <br />
        2. Multi-factor authentication <br />
        3. Certificate-based authentication <br />
        4. Biometric authentication <br />
        5. Token-based authentication <br />
      </p>

      <p className="text-2xl text-slate-500 mt-10">
        3. How does the private route work?
      </p>
      <p className="text-justify text-2xl text-slate-500">
        Ans: The private route component is similar to the public route, the
        only change is that redirect URL and authenticate condition. If the user
        is not authenticated he will be redirected to the login page and the
        user can only access the authenticated routes If he is authenticated
        (Logged in).
      </p>

      <p className="text-2xl text-slate-500 mt-10">
        4. What is Node? How does Node work?
      </p>
      <p className="text-justify text-2xl text-slate-500">
        Ans: Node.js is a JavaScript runtime environment that achieves low
        latency and high throughput by taking a “non-blocking” approach to
        serving requests. In other words, Node.js wastes no time or resources on
        waiting for I/O requests to return. <br />
        Node.js accepts the request from the clients and sends the response,
        while working with the request node.js handles them with a single
        thread. To operate I/O operations or requests node.js use the concept of
        threads. Thread is a sequence of instructions that the server needs to
        perform. It runs parallel on the server to provide the information to
        multiple clients. Node.js is an event loop single-threaded language. It
        can handle concurrent requests with a single thread without blocking it
        for one request.<br />Node.js basically works on two concept Asynchronous
        Non-blocking & I/O
      </p>
    </div>
  );
};

export default Blog;
