import Link from "next/link";

export default function HomeFooter() {
    return (
        <div className="flex flex-col   bg-background/95  p-10 border-t  ">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 container mx-auto">
                <div className="space-y-4">
                    <h3 className="font-semibold">For Huslers</h3>
                    <div className="flex flex-col space-y-2 text-sm">
                        <Link href={`#`}>How to find work</Link>
                        <Link href={`#`}>How to find mentor</Link>
                        <Link href={`#`}>How to tokenize your experience</Link>
                        <Link href={`#`}>How to sub contract an offer</Link>
                        <Link href={`#`}>How to earn fron EXP Token</Link>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="font-semibold">For Clients</h3>
                    <div className="flex flex-col space-y-2 text-sm">
                        <Link href={`#`}>How to find talent</Link>
                        <Link href={`#`}>How to promote your best talent</Link>
                        <Link href={`#`}>What is the benefit of EXP token for business?</Link>
                        <Link href={`#`}>How to collaborate internally with RENADAY DAO</Link>
                        <Link href={`#`}>How to earn from EXP Token</Link>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="font-semibold">Resources</h3>
                    <div className="flex flex-col space-y-2 text-sm">
                        <Link href={`#`}>Help & Supports</Link>
                        <Link href={`#`}>Blog</Link>
                        <Link href={`#`}>Affiliate / Airdrop</Link>
                        <Link href={`#`}>Work to earn</Link>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="font-semibold">Company</h3>
                    <div className="flex flex-col space-y-2 text-sm">
                        <Link href={`#`}>Dev Releases</Link>
                        <Link href={`#`}>Tokenomics</Link>
                        <Link href={`#`}>About us</Link>
                        <Link href={`#`}>Contact us</Link>
                    </div>
                </div>

            </div>
            <div className="flex flex-col space-y-1 lg:space-y-0 lg:flex-row lg:justify-between py-4 text-sm container mx-auto">
                <div>
                    Follow us:
                </div>
                <div>
                    Apps:
                </div>
            </div>
            <div className="border-t border-green-500 flex  flex-col-reverse lg:flex-row justify-between py-2 text-sm container mx-auto">
                <div>
                    <p>©2024-2025 Renaday® </p>
                </div>
                <div className="flex lg:flex-row flex-col space-y-1 mb-1 lg:mb-0 lg:space-y-0 lg:space-x-8 ">
                    <Link href={`#`}>Terms of Services</Link>
                    <Link href={`#`}>Privacy Policy</Link>
                </div>



            </div>

        </div>
    )
}
