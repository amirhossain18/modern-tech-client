import React from 'react';

const Blog = () => {
    return (
        <div>
         <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">What is cors</h5>
    <p class="card-text">Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
  
  </div>
</div>
<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Why we are use firebse ?</h5>
    <p class="card-text">Benefit #1: Google Analytics For Firebase</p>
    <p class="card-text">Benefit #2: Realtime Database & Firestore</p>
    <p class="card-text">Benefit #3: Authentication</p>
    <p class="card-text">Benefit #4: Crashlytics</p>
    <p class="card-text">Benefit #5: Free Use of Dynamic Links</p>
  </div>
</div>
<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">How does the private route work</h5>
    <p class="card-text">The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
  
  </div>
</div>
<div class="card">
  <div class="card-header">
  What is node and how does its works?
  </div>
  <div class="card-body">
    
    <p class="card-text">It is used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
  
  </div>
</div>
        </div>
    );
};

export default Blog;