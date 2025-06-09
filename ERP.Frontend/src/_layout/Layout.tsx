import "./Layout.scss"; 
import Navbar from "./Navbar/Navbar";
import type { LayoutProps } from "./Layout.types";



export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <div className="layout__navbar">
        <Navbar />
      </div>
      <div className="layout__content">{children}</div>
    </div>
  );
}
