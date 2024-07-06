import { Inter,Roboto } from "next/font/google";
import "./globals.css";
import Navber from "@/components/Navber";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({weight:['400','500','700','900'],subsets: ["latin"] });

export const metadata = {
  title: {
    default: 'Next js',
    template:'%s | Next js'
  },
  description: "supar powerful next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navber></Navber>
        {children}
        </body>
    </html>
  );
}
