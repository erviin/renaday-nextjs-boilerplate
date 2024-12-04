"use client";

import { ChevronRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../sheet";
import Link from "next/link";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../accordion";
import { WalletButton } from "./connect_wallet";
import { MobileAccountOptions } from "./account_options";
import { Session } from "next-auth";

export default function MenuDrawer({ session }: { session: Session | null }) {
    return (
        <Sheet>
            <SheetTrigger className="lg:hidden">
                <Menu />
            </SheetTrigger>
            <SheetContent className="w-full">
                <SheetHeader>
                    <SheetTitle className="">
                        <Link href={'/'} className="-mt-2 ">
                            <Image alt="logo" width={125} height={50} src={'/images/renaday_green.png'} />
                        </Link>
                    </SheetTitle>
                    <SheetDescription className="text-left text-xs">
                        Powered by blockchain technology, we offer secure transactions, smart contracts, and innovative
                        features like tokenized work agreements.
                    </SheetDescription>
                </SheetHeader>
                <WalletButton />

                <Accordion type="single" collapsible className="w-full">
                    {session ?
                        <AccordionItem value="item-1">
                            <AccordionTrigger> Find Jobs</AccordionTrigger>
                            <AccordionContent className="space-y-4 flex flex-col">
                                <Link href="/" >
                                    <div className="py-1">
                                        <div className="flex justify-between font-semibold">
                                            <h4>DISCOVERY</h4>
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                        <small className=" text-nowrap text-ellipsis">
                                            Start exploring project jobs that match your profile
                                        </small>
                                    </div>
                                </Link>
                                <Link href="/docs/installation" >
                                    <div className="py-1">
                                        <div className="flex justify-between font-semibold">
                                            <h4>JOBS</h4>
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                        <small className=" text-nowrap text-ellipsis">
                                            Team members have a very clear history, you can choose an expert to be responsible for mentoring & supervising
                                        </small>
                                    </div>
                                </Link>
                                <Link href="/docs/primitives/typography">
                                    <div className="py-1">
                                        <div className="flex justify-between font-semibold">
                                            <h4>PROJECTS</h4>
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                        <small className=" text-nowrap text-ellipsis">
                                            Calculating team salaries is very tiring, Renaday has a time tracker with hourly rates, you no longer need to calculate, you just need to fill your smart contract with stablecoin, and renaday will distribute it
                                        </small>
                                    </div>
                                </Link>
                                <Link href="/docs/primitives/typography" title="Get Started">
                                    <div className="py-1">
                                        <div className="flex justify-between font-semibold">
                                            <h4>PROPOSALS & OFFERS</h4>
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                        <small className=" text-nowrap text-ellipsis">
                                            You can document who can contribute well to the team with blockchain
                                        </small>
                                    </div>
                                </Link>
                                <Link href="/docs/primitives/typography">
                                    <div className="py-1">
                                        <div className="flex justify-between font-semibold">
                                            <h4>SAVED</h4>
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                        <small className=" text-nowrap text-ellipsis">
                                            Publish projects / job openings at your place
                                        </small>
                                    </div>
                                </Link>
                            </AccordionContent>
                        </AccordionItem> :
                        <AccordionItem value="item-1">
                            <AccordionTrigger> Renaday for business</AccordionTrigger>
                            <AccordionContent className="space-y-4 flex flex-col">
                                <Link href="/docs/installation" >
                                    <div className="py-1">
                                        <div className="flex justify-between font-semibold">
                                            <h4>HIRING</h4>
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                        <small className=" text-nowrap text-ellipsis">
                                            Team members have a very clear history, you can choose an expert to be responsible for mentoring & supervising
                                        </small>
                                    </div>
                                </Link>
                                <Link href="/docs/installation" >
                                    <div className="py-1">
                                        <div className="flex justify-between font-semibold">
                                            <h4>Transparency</h4>
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                        <small className=" text-nowrap text-ellipsis">
                                            Calculating team salaries is very tiring, Renaday has a time tracker with hourly rates, you no longer need to calculate, you just need to fill your smart contract with stablecoin, and renaday will distribute it
                                        </small>
                                    </div>
                                </Link>
                                <Link href="/docs/primitives/typography">
                                    <div className="py-1">
                                        <div className="flex justify-between font-semibold">
                                            <h4>Internal Management</h4>
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                        <small className=" text-nowrap text-ellipsis">
                                            You can document who can contribute well to the team with blockchain
                                        </small>
                                    </div>
                                </Link>
                                <Link href="/docs/primitives/typography" title="Get Started">
                                    <div className="py-1">
                                        <div className="flex justify-between font-semibold">
                                            <h4>Get Started</h4>
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                        <small className=" text-nowrap text-ellipsis">
                                            Publish projects / job openings at your place
                                        </small>
                                    </div>
                                </Link>
                                <Link href="/docs/primitives/typography">
                                    <div className="py-1">
                                        <div className="flex justify-between font-semibold">
                                            <h4>Financing</h4>
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                        <small className=" text-nowrap text-ellipsis">
                                            With RWA (Real World Asset) allowing you to start your project through community funding
                                        </small>
                                    </div>
                                </Link>
                            </AccordionContent>
                        </AccordionItem>
                    }
                    {session ? <AccordionItem value="item-2">
                        <AccordionTrigger>  Your Contracts</AccordionTrigger>
                        <AccordionContent className="space-y-4 flex flex-col">
                            <a href="/rx/my/direct-contract" title="Get Started">
                                <div className="py-1">
                                    <div className="flex justify-between font-semibold ">
                                        <h4>DIRECT CONTRACTS</h4>
                                        <ChevronRight className="h-4 w-4" />
                                    </div>
                                    <small className=" text-nowrap text-ellipsis">
                                        Your work history is well documented, so you are truly an outstanding person
                                    </small>
                                </div>
                            </a>
                            <Link href="/docs/primitives/typography" title="Get Started">
                                <div className="py-1">
                                    <div className="flex justify-between font-semibold">
                                        <h4>JOBS</h4>
                                        <ChevronRight className="h-4 w-4" />
                                    </div>
                                    <small className=" text-nowrap text-ellipsis">
                                        Your work history is well documented, so you are truly an outstanding person
                                    </small>
                                </div>
                            </Link>
                            <Link href="/docs/primitives/typography" title="PROJECTS">
                                <div className="py-1">
                                    <div className="flex justify-between font-semibold ">
                                        <h4>PROJECTS</h4>
                                        <ChevronRight className="h-4 w-4" />
                                    </div>
                                    <small className=" text-nowrap text-ellipsis">
                                        You can transfer tokenized work contracts to other parties when you have too large a workload
                                    </small>
                                </div>
                            </Link>
                        </AccordionContent>
                    </AccordionItem> :
                        <AccordionItem value="item-2">
                            <AccordionTrigger> Renaday for hustlers</AccordionTrigger>
                            <AccordionContent className="space-y-4 flex flex-col">
                                <Link href="/docs/primitives/typography" title="Get Started">
                                    <div className="py-1">
                                        <div className="flex justify-between font-semibold ">
                                            <h4>Reputation</h4>
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                        <small className=" text-nowrap text-ellipsis">
                                            Your work history is well documented, so you are truly an outstanding person
                                        </small>
                                    </div>
                                </Link>
                                <Link href="/docs/primitives/typography" title="Get Started">
                                    <div className="py-1">
                                        <div className="flex justify-between font-semibold">
                                            <h4>Liquidity</h4>
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                        <small className=" text-nowrap text-ellipsis">
                                            You can transfer tokenized work contracts to other parties when you have too large a workload
                                        </small>
                                    </div>
                                </Link>
                                <Link href="/docs/primitives/typography" title="Sub Contract">
                                    <div className="py-1">
                                        <div className="flex justify-between font-semibold ">
                                            <h4>Liquidity</h4>
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                        <small className=" text-nowrap text-ellipsis">
                                            If you are new, then look for someone within the ecosystem to support you in your work
                                        </small>
                                    </div>
                                </Link>
                                <Link href="/docs/primitives/typography" title="Sub Contract">
                                    <div className="py-1">
                                        <div className="flex justify-between font-semibold">
                                            <h4>Get Started</h4>
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                        <small className=" text-nowrap text-ellipsis">
                                            Start looking for projects and jobs that suit you
                                        </small>
                                    </div>
                                </Link>
                            </AccordionContent>
                        </AccordionItem>
                    }
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Accounts</AccordionTrigger>
                        <AccordionContent>
                            <MobileAccountOptions session={session} />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </SheetContent>
        </Sheet>


    );
}