"use client"
import ContractListItem, { ContractListItemSkeleton } from "@/components/ui/general/contract_list";
import PageLayout from "@/components/ui/general/page_layout";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


export default function MyDirectContract() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state
    const { data: session, status } = useSession();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("/rx/api/direct-contract/list");
                const result = await response.json();
                setList(result.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        if (status === "authenticated") {
            fetchData();
        }
    }, [status]);
    return (
        <PageLayout>
            <div className="flex  flex-col  container mx-auto py-2 xl:py-8 px-2 xl:px-0">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <h1 className="text-2xl font-bold tracking-tight">DIRECT CONTRACTS</h1>
                    <div className="relative w-full md:w-96 bg-white">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search a contract..."
                            className="pl-8"
                        />
                    </div>
                </div>
                {loading ?
                    (<div>
                        <ContractListItemSkeleton />
                        <ContractListItemSkeleton />
                    </div>
                    )
                    : (
                        <div>
                            {list && list.length > 0 ? list.map((item, index) => (<ContractListItem key={index} item={item} session={session} />)) : (<div />)}
                        </div>
                    )}

            </div>
        </PageLayout>
    )
}