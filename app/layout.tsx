import Navigation from "../components/navigation";
import SalesLayout from "./about-us/company/jobs/sales/layout";
import Sales from "./about-us/company/jobs/sales/page";
import AboutUsLayout from "./about-us/layout";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
