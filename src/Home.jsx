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
            <nav className="w-full fixed bg-white z-10">
                <div className="sm:px-20 px-4 py-2 flex justify-between items-center">
                    <img src={logo} alt="Rex Logo" onClick={() => navigate("/")} className="sm:h-10 h-8 cursor-pointer" />
                    <div className='flex items-center justify-end gap-2 w-full' >
                        <img src={x_logo} alt="X Logo" onClick={() => window.open('https://x.com/rexd0tfun')} className="sm:h-9 h-7 cursor-pointer" />
                        <img src={atlas} alt="Atlas Logo" onClick={() => window.open('https://atlas3.io/project/rexdotfun')} className="sm:h-12 h-10 cursor-pointer" />
                    </div>
                </div>
            </nav>
            <div className='flex flex-col justify-center' >
                <img src={logo} alt="Rex Logo" className="sm:h-40 h-24 mx-auto mt-28 mb-12" />
                <p className="sm:text-2xl text-lg w-full max-w-3xl font-semibold text-center sm:px-8 px-4 sm:leading-9 tracking-wider">Send tokens. Get a fully provisioned AI agent in 60 seconds. Trading bots,
                    marketing agents, content machines, degen tools all running on dedicated
                    infrastructure. No API keys. No subscriptions.
                </p>
                <div className='flex justify-center gap-1 font-semibold mt-1' >
                    <p className="sm:text-2xl text-lg text-center">Just</p>
                    <p className="sm:text-2xl text-lg text-center text-red-600">$REX.</p>
                </div>
            </div>
            <div className='sm:w-2/3 flex items-start -mt-4' >
                <img src={dino} alt="Rex Dino" className="h-52" />
            </div>
            <div className='flex flex-col items-center gap-16' >
                <div className='flex gap-4' >
                    <img src={dead} alt="Dead" className="sm:h-20 h-16" />
                    <img src={simple} alt="Simple" className="sm:h-20 h-16" />
                </div>
                <p className="sm:text-2xl text-lg w-full max-w-2xl font-semibold text-center px-4 mb-10 tracking-wider">No accounts. No API keys. No DevOps. Just tokens and agents.</p>
            </div>
            <div className='flex sm:flex-row flex-col sm:px-32 gap-12 items-center mb-4' >
                <div className='border-3 border-red-500 rounded-4xl p-4 sm:w-1/2 w-2/3 h-48 text-center space-y-5 hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <p className='sm:text-3xl text-2xl font-semibold' >Pick Your Agent</p>
                    <p className='text-center text-xl' >Trading bot, marketing agent,
                        generalist, or bring your own
                        config. Connect your wallet and
                        choose</p>
                </div>
                <img src={arrow} alt="Arrow" className="h-20 sm:rotate-0 rotate-90" />
                <div className='border-3 border-red-500 rounded-4xl p-4 sm:w-1/2 w-2/3 h-48 text-center space-y-5 hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <p className='sm:text-3xl text-2xl font-semibold' >Send $REX</p>
                    <p className='text-center text-xl' >Send tokens to the treasury.
                        Deposits stack hit the threshold
                        and your agent starts provisioning.
                    </p>
                </div>
                <img src={arrow} alt="Arrow" className="h-20 sm:rotate-0 rotate-90" />
                <div className='border-3 border-red-500 rounded-4xl p-4 sm:w-1/2 w-2/3 h-48 text-center space-y-5 hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <p className='sm:text-3xl text-2xl font-semibold' >Pick Your Agent</p>
                    <p className='text-center text-xl' >Dedicated server spins up in &lt; 60s.
                        Full access for 5 hours. Your agent,
                        your infrastructure.
                    </p>
                </div>
            </div>
            <div>
                <div className='flex justify-center gap-3 mt-24' >
                    <img src={agent} alt="Agent" className="sm:h-24 h-16" />
                    <img src={flavors} alt="Flavors" className="sm:h-24 h-16" />
                </div>
                <p className="sm:text-2xl text-lg w-full max-w-2xl font-semibold text-center px-4 my-10 tracking-wider">Pre-configured with specialized tooling. Or bring your own.</p>
            </div>
            <div className='flex flex-wrap sm:px-28 justify-center gap-6' >
                <div className='border-3 border-red-500 rounded-4xl p-2 w-76 h-72 relative text-center hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <img src={dino1} alt="Dino1" className="h-48 absolute -ml-14 -mt-12" />
                    <p className='text-4xl font-semibold py-14' >Trading</p>
                    <p className='text-2xl' >DEX monitoring, market analysis,
                        portfolio tracking, trade signals.
                        Built for the trenches</p>
                </div>
                <div className='w-76 h-72 sm:block hidden' ></div>
                <div className='border-3 border-red-500 rounded-4xl p-2 w-76 h-72 relative text-center hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <img src={dino2} alt="Dino2" className="h-48 absolute -ml-14 -mt-12" />
                    <p className='text-4xl font-semibold py-14' >Generalist</p>
                    <p className='text-2xl' >Coding, research, data analysis,
                        automation. The Swiss Army knife
                        agent for whatever you need.</p>
                </div>
                <div className='w-76 h-72 sm:block hidden' ></div>
                <div className='w-76 h-72 sm:block hidden' ></div>
                <div className='border-3 border-red-500 rounded-4xl p-2 w-76 h-72 relative text-center hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <img src={dino3} alt="Dino3" className="h-48 absolute -ml-14 -mt-12" />
                    <img src={raa_black} alt="Raa" className="h-36 absolute ml-24 -mt-9" />
                    <p className='text-4xl font-semibold py-14' >Marketing</p>
                    <p className='text-2xl' >Content gen, social management,
                        community engagement, raid
                        coordination, campaign analytics. </p>
                </div>
                <div className='w-76 h-72 sm:block hidden' ></div>
                <div className='border-3 border-red-500 rounded-4xl p-2 w-76 h-72 relative text-center hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <img src={dino4} alt="Dino4" className="h-48 absolute -ml-14 -mt-12" />
                    <p className='text-4xl font-semibold py-14' >Custom</p>
                    <p className='text-2xl' >Your config, your tools, your
                        prompts. Full control over what
                        your agent does and how.
                    </p>
                </div>
            </div>
            <div>
                <img src={raa} alt="Raa" className="sm:h-32 h-20 my-20" />
            </div>
            <div className='flex gap-20 sm:justify-between justify-center sm:px-28 flex-wrap' >
                <div className='border-3 border-red-500 rounded-4xl p-4 w-80 h-48 text-center space-y-3 hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <p className='text-5xl font-semibold' >&lt;60s</p>
                    <p className='text-xl font-semibold' >INSTANT PROVISIONING</p>
                    <p className='text-lg' >From payment to live agent on
                        dedicated cloud infrastructure.</p>
                </div>
                <div className='border-3 border-red-500 rounded-4xl p-4 w-80 h-48 text-center space-y-3 hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <p className='text-5xl font-semibold' >0</p>
                    <p className='text-xl font-semibold' >ACCOUNTS NEEDED</p>
                    <p className='text-lg' >Wallet is your identity. No signup,
                        no email, no passwords.
                    </p>
                </div>
                <div className='border-3 border-red-500 rounded-4xl p-4 w-80 h-48 text-center space-y-3 hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <p className='text-5xl font-semibold' >|:|</p>
                    <p className='text-xl font-semibold' >DEDICATED SERVERS</p>
                    <p className='text-lg' >Each agent gets its own server. No
                        sharing, no throttling.</p>
                </div>
                <div className='border-3 border-red-500 rounded-4xl p-4 w-80 h-48 text-center space-y-3 hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <p className='text-5xl font-semibold' >5h</p>
                    <p className='text-xl font-semibold' >PER RENTAL</p>
                    <p className='text-lg' >Full access to your agent.
                        Auto-destroys when time is up.</p>
                </div>
                <div className='border-3 border-red-500 rounded-4xl p-4 w-80 h-48 text-center space-y-3 hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <p className='text-5xl font-semibold' >$REX</p>
                    <p className='text-xl font-semibold' >TOKEN POWERED</p>
                    <p className='text-lg' >Pay with $REX on Solana. Fast,
                        cheap, on-chain.
                    </p>
                </div>
                <div className='border-3 border-red-500 rounded-4xl p-4 w-80 h-48 text-center space-y-3 hover:scale-95 transition-all duration-200 cursor-pointer' >
                    <p className='text-5xl font-semibold' >|:|</p>
                    <p className='text-xl font-semibold' >AUTO-CLEANUP</p>
                    <p className='text-lg' >Infrastructure auto-destroyed on
                        expiry. Clean and secure.
                    </p>
                </div>
            </div>
            <footer className='flex flex-col items-center justify-center mt-20' >
                <img src={logo} alt='Logo' className='sm:h-12 h-8' />
                <p className='text-sm mt-1' >AI Agent Rentals on Solana</p>
            </footer>
        </div>
    )
}