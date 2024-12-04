import { ReactNode } from "react";
import HomeFooter from "../home/footer_section.";

export default function PageLayout({ children }: { children: ReactNode }) {
    return (
        <div className="bg-gradient-to-b from-gray-50/90 to-gray-100/90 h-full flex flex-col justify-between">
            <div className="flex-1 mb-12">
                {children}
            </div>
            <HomeFooter />
        </div>
    );
}