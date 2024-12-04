"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PageLayout from "@/components/ui/general/page_layout";
import { DrawerNewDirectContract } from "@/components/ui/home/authorized/new_direct_contract";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { BriefcaseIcon, Clock, DollarSign, MapPin, Plus, Search } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";
export default function FindWork() {
    const { data: session, status } = useSession();
    const [isOpenDirectContract, setIsOpenDirectContract] = useState(false);

    return (
        <PageLayout>
            <div className="flex space-x-4 container mx-auto py-2 xl:py-8 px-2 xl:px-0">
                <div className="flex-1 space-y-4 px-2 lg:px-0">

                    <Card className="bg-gradient-to-br from-green-300  to-emerald-500 border shadow-none text-white">
                        <CardHeader className="p-3 lg:p-4">
                            <CardTitle className="text-lg font-semibold">$RNDX</CardTitle>
                            <CardDescription className="lg:text-base text-white text-sm">
                                The official RENADAY token is used to submit proposals for jobs or projects. This token can also be earned by
                                talents upon completing each job or project.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <div className="relative bg-white">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-10" placeholder="Search for jobs..." />
                    </div>
                    <Card>
                        <CardHeader>
                            <div className="flex flex-col md:flex-row  space-y-1 md:space-y-0 items-start justify-between">
                                <div>
                                    <CardTitle className="text-xl">Experienced PHP & MySQL Developer Needed</CardTitle>
                                    <CardDescription className="mt-2">Multi Branch-Clinic and Pharmacy Management Web App</CardDescription>
                                </div>
                                <Badge variant="secondary">20 minutes ago</Badge>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <Badge variant="outline">PHP</Badge>
                                <Badge variant="outline">Web Development</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="md:space-y-4 space-y-0 flex md:flex-col flex-col-reverse">
                            <div className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-4 mt-4 md:mt-0 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                    <Clock className="mr-2 h-4 w-4" />
                                    Est. time 1-3 months
                                </div>
                                <div className="flex items-center">
                                    <BriefcaseIcon className="mr-2 h-4 w-4" />
                                    Less than 30 hours/week
                                </div>
                                <div className="flex items-center ">
                                    <DollarSign className="mr-2 h-4 w-4" />
                                    Project funded: <Badge className="px-1 bg-green-600">$1000</Badge>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="mr-2 h-4 w-4" />
                                    US
                                </div>
                            </div>
                            <div>
                                <p className="text-sm">
                                    We are seeking for skilled PHP and MySQL developer to build a comprehensive web application designed for Multi
                                    Branch Clinic and Pharmacy support. The application will cater to the operational needs of healthcare providers
                                    with pharmacy setup, ensuring a seamless experience across various modules.
                                </p>
                            </div>

                        </CardContent>
                    </Card>
                </div>
                <div className="w-3/12 space-y-4 hidden lg:block">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <Avatar className="bg-zinc-800 text-zinc-300">
                                    <AvatarImage src={status === 'authenticated' ? session.user?.image ?? '' : "https://github.com/shadcn.png"} />
                                    <AvatarFallback>RN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle>{session?.user?.name}</CardTitle>
                                    <CardDescription>FullStack Developer</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <div className="flex items-center justify-between text-sm mb-2">
                                    <span>Profile completion</span>
                                    <span>100%</span>
                                </div>
                                <Progress value={100} />
                            </div>
                            <Button className="w-full" variant="outline">
                                Complete Profile
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Dialog open={isOpenDirectContract}>
                                <DialogTrigger asChild>
                                    <Button className="w-full justify-between" variant="outline">
                                        Direct Contract
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[650px]">
                                    <DrawerNewDirectContract setIsOpen={setIsOpenDirectContract} />
                                </DialogContent>
                            </Dialog>

                            <Separator />
                            <Button className="w-full justify-between" variant="outline">
                                Create New
                                <Plus className="h-4 w-4" />
                            </Button>
                        </CardContent>
                        <CardFooter>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">RNDX:</span>
                                <Badge variant="secondary">10</Badge>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div >
        </PageLayout >
    );
}