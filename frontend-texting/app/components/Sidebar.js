
'use client'
import { useEffect } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  useEffect(() => {
    // Ensure Bootstrap JS is loaded
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileSidebar"
        aria-controls="mobileSidebar"
      >
        Open Sidebar
      </button>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="mobileSidebar"
        aria-labelledby="mobileSidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileSidebarLabel">
            Sidebar
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li>
              <Link href="/">
                <p className="text-decoration-none">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="text-decoration-none">About</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="text-decoration-none">Contact</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
