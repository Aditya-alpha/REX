import logo from './assets/logo.png';
import x_logo from './assets/x_logo.png';
import atlas from './assets/atlas.jpeg';
import dino from './assets/dino.png';
import dead from './assets/dead.png';
import simple from './assets/simple.png';
import agent from './assets/agent.png';
import flavors from './assets/flavors.png';
import dino1 from './assets/dino1.png';
import dino2 from './assets/dino2.png';
import dino3 from './assets/dino3.png';
import dino4 from './assets/dino4.png';
import raa from './assets/raa.png';
import raa_black from './assets/raa_black.png';
import arrow from './assets/arrow.png';

import { useNavigate } from 'react-router-dom';


export default function Home() {

    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center min-h-screen pb-6">
            <nav className="w-full fixed bg-white">
                <div className="px-12 flex justify-between items-center">
                    <img src={logo} alt="Rex Logo" onClick={() => navigate("/")} className="h-16 cursor-pointer" />
                    <div className='flex items-center justify-center gap-2' >
                        <img src={x_logo} alt="X Logo" onClick={() => window.open('https://x.com/rexd0tfun')} className="h-9 cursor-pointer" />
                        <img src={atlas} alt="Atlas Logo" onClick={() => window.open('https://atlas3.io/project/rexdotfun')} className="h-12 cursor-pointer" />
                    </div>
                </div>
            </nav>
            <div>
                <img src={logo} alt="Rex Logo" className="h-60" />
                <p className="text-lg w-full max-w-2xl font-semibold text-center px-8 -mt-8">Send tokens. Get a fully provisioned AI agent in 60 seconds. Trading bots,
                    marketing agents, content machines, degen tools all running on dedicated
                    infrastructure. No API keys. No subscriptions.
                </p>
                <div className='flex justify-center gap-1 pr-8 font-semibold' >
                    <p className="text-lg text-center">Just</p>
                    <p className="text-lg text-center text-red-600">$REX.</p>
                </div>
            </div>
            <div className='w-2/3 flex items-start -mt-4' >
                <img src={dino} alt="Rex Dino" className="h-52" />
            </div>
            <div className='-mt-28' >
                <div className='flex gap-4' >
                    <img src={dead} alt="Dead" className="h-85" />
                    <img src={simple} alt="Simple" className="h-85 mt-5" />
                </div>
                <p className="text-lg w-full max-w-2xl font-semibold text-center px-4 -mt-20 mb-10">No accounts. No API keys. No DevOps. Just tokens and agents.</p>
            </div>
            <div className='flex px-32 gap-12 items-center mb-4' >
                <div className='border-3 border-red-500 rounded-4xl p-4 w-1/2 h-48 text-center space-y-5 hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <p className='text-2xl font-semibold' >Pick Your Agent</p>
                    <p className='text-center' >Trading bot, marketing agent,
                        generalist, or bring your own
                        config. Connect your wallet and
                        choose</p>
                </div>
                <img src={arrow} alt="Arrow" className="h-20" />
                <div className='border-3 border-red-500 rounded-4xl p-4 w-1/2 h-48 text-center space-y-5 hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <p className='text-2xl font-semibold' >Send $REX</p>
                    <p className='text-center' >Send tokens to the treasury.
                        Deposits stack hit the threshold
                        and your agent starts provisioning.
                    </p>
                </div>
                <img src={arrow} alt="Arrow" className="h-20" />
                <div className='border-3 border-red-500 rounded-4xl p-4 w-1/2 h-48 text-center space-y-5 hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <p className='text-2xl font-semibold' >Pick Your Agent</p>
                    <p className='text-center' >Dedicated server spins up in &lt; 60s.
                        Full access for 5 hours. Your agent,
                        your infrastructure.
                    </p>
                </div>
            </div>
            <div>
                <div className='flex gap-3' >
                    <img src={agent} alt="Agent" className="h-85" />
                    <img src={flavors} alt="Flavors" className="h-85 -mt-10" />
                </div>
                <p className="text-lg w-full max-w-2xl font-semibold text-center px-4 -mt-40 mb-4">Pre-configured with specialized tooling. Or bring your own.</p>
            </div>
            <div className='flex flex-wrap px-28 gap-6' >
                <div className='border-3 border-red-500 rounded-4xl p-2 w-76 h-72 relative text-center hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <img src={dino1} alt="Dino1" className="h-48 absolute -ml-14 -mt-12" />
                    <p className='text-2xl font-semibold py-14' >Trading</p>
                    <p>DEX monitoring, market analysis,
                        portfolio tracking, trade signals.
                        Built for the trenches</p>
                </div>
                <div className='w-76 h-72' ></div>
                <div className='border-3 border-red-500 rounded-4xl p-2 w-76 h-72 relative text-center hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <img src={dino2} alt="Dino2" className="h-48 absolute -ml-14 -mt-12" />
                    <p className='text-2xl font-semibold py-14' >Generalist</p>
                    <p>Coding, research, data analysis,
                        automation. The Swiss Army knife
                        agent for whatever you need.</p>
                </div>
                <div className='w-76 h-72' ></div>
                <div className='w-76 h-72' ></div>
                <div className='border-3 border-red-500 rounded-4xl p-2 w-76 h-72 relative text-center hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <img src={dino3} alt="Dino3" className="h-48 absolute -ml-14 -mt-12" />
                    <img src={raa_black} alt="Raa" className="h-36 absolute ml-24 -mt-9" />
                    <p className='text-2xl font-semibold py-14' >Marketing</p>
                    <p>Content gen, social management,
                        community engagement, raid
                        coordination, campaign analytics. </p>
                </div>
                <div className='w-76 h-72' ></div>
                <div className='border-3 border-red-500 rounded-4xl p-2 w-76 h-72 relative text-center hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <img src={dino4} alt="Dino4" className="h-48 absolute -ml-14 -mt-12" />
                    <p className='text-2xl font-semibold py-14' >Custom</p>
                    <p>Your config, your tools, your
                        prompts. Full control over what
                        your agent does and how.
                    </p>
                </div>
            </div>
            <div>
                <img src={raa} alt="Raa" className="h-76" />
            </div>
            <div className='flex gap-20 justify-between px-28 flex-wrap' >
                <div className='border-3 border-red-500 rounded-4xl p-4 w-80 h-48 text-center space-y-5 hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <p className='text-4xl font-semibold' >&lt;60s</p>
                    <p className='font-semibold' >INSTANT PROVISIONING</p>
                    <p>From payment to live agent on
                        dedicated cloud infrastructure.</p>
                </div>
                <div className='border-3 border-red-500 rounded-4xl p-4 w-80 h-48 text-center space-y-5 hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <p className='text-4xl font-semibold' >0</p>
                    <p className='font-semibold' >ACCOUNTS NEEDED</p>
                    <p>Wallet is your identity. No signup,
                        no email, no passwords.
                    </p>
                </div>
                <div className='border-3 border-red-500 rounded-4xl p-4 w-80 h-48 text-center space-y-5 hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <p className='text-4xl font-semibold' >|:|</p>
                    <p className='font-semibold' >DEDICATED SERVERS</p>
                    <p>Each agent gets its own server. No
                        sharing, no throttling.</p>
                </div>
                <div className='border-3 border-red-500 rounded-4xl p-4 w-80 h-48 text-center space-y-5 hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <p className='text-4xl font-semibold' >5h</p>
                    <p className='font-semibold' >PER RENTAL</p>
                    <p>Full access to your agent.
                        Auto-destroys when time is up.</p>
                </div>
                <div className='border-3 border-red-500 rounded-4xl p-4 w-80 h-48 text-center space-y-5 hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <p className='text-4xl font-semibold' >$REX</p>
                    <p className='font-semibold' >TOKEN POWERED</p>
                    <p>Pay with $REX on Solana. Fast,
                        cheap, on-chain.
                    </p>
                </div>
                <div className='border-3 border-red-500 rounded-4xl p-4 w-80 h-48 text-center space-y-5 hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <p className='text-4xl font-semibold' >|:|</p>
                    <p className='font-semibold' >AUTO-CLEANUP</p>
                    <p>Infrastructure auto-destroyed on
                        expiry. Clean and secure.
                    </p>
                </div>
            </div>
            <footer className='flex flex-col items-center justify-center mt-20' >
                <img src={logo} alt='Logo' className='h-12' />
                <p className='text-xs -mt-2' >AI Agent Rentals on Solana</p>
            </footer>
        </div>
    )
}