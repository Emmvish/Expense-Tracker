import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = ()=>(
    <div>
      {/* Client side routing is faster than a href type of server routing. */}
      <p>404 Not Found - <Link to="/">Go Home</Link></p>
    </div>
  )

  export default NotFoundPage;