
import "./globals.css";
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
// import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import Navbar from "@/components/Navbar";
// import { config, library } from '../../node_modules/@fortawesome/fontawesome-svg-core';
// import { fas } from '../../node_modules/fortawesome/@free-solid-svg-icons'; // Solid icons
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

export const metadata = {
  title: "Adult Dating - Post Classified Ads in India - Sduko",
  description: "Sduko is a free adult classified ad portal for dating and sex services in India. Search or post your sex services or dating services in India through fresh adult classified ads.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
