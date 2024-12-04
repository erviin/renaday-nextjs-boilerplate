import { FileCodeIcon as FileContract, Shield, Users } from 'lucide-react'
import { FeatureCard } from './feature-card';

export default function KeyFeature() {
    return (
        <section className="container md:py-16 md:px-0 px-2 mx-auto mt-8">
            {/* <h2 className="text-3xl font-bold text-white text-center mb-8">Key Features</h2> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <FeatureCard
                    title="Tokenized Contracts"
                    description="Secure and tradable work agreements using blockchain technology"
                    icon={<FileContract className="h-6 w-6 text-green-400" />}
                    link="#"
                    delay={0.5}
                />
                <FeatureCard
                    title="Decentralized Escrow"
                    description="Automated payments and milestones for worry-free collaborations"
                    icon={<Shield className="h-6 w-6 text-green-400" />}
                    link="#"
                    delay={0.8}

                />
                <FeatureCard
                    title="Reputation System"
                    description="On-chain work history and verifiable credentials"
                    icon={<Users className="h-6 w-6 text-green-400" />}
                    link="#"
                    delay={1.2}
                />
            </div>
        </section>
    );
}