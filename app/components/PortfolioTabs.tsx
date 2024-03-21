// import Link from 'next/link';
// import PortfolioTemplate from './PortfolioTemplate';

// const PortfolioTabs = () => {
//     return (
//         <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
//             <ul className="flex justify-center flex-wrap -mb-px">
//                 <li className="me-2">
//                     <Link href="#">
//                         <div className="inline-block px-8 py-4 border-b-2 text-2xl border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer">All</div>
//                         <PortfolioTemplate/>
//                     </Link>
//                 </li>
//                 <li className="me-2">
//                     <div className="inline-block px-8 py-4 text-2xl text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500">Web Design</div>
//                 </li>
//                 <li className="me-2">
//                     <Link href="#">
//                         <div className="inline-block px-8 py-4 text-2xl border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer">Mobile App Design</div>
//                     </Link>
//                 </li>
//                 <li className="me-2">
//                     <Link href="#">
//                         <div className="inline-block px-8 py-4 text-2xl border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer">Branding</div>
//                     </Link>
//                 </li>
//                 <li>
//                     <div className="inline-block px-8 py-4 text-2xl text-gray-400 rounded-t-lg dark:text-gray-500">Agency</div>
//                 </li>
//             </ul>

//         </div>
//     );
// };

// export default PortfolioTabs;

// PortfolioTabs.js

"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import PortfolioTemplate from './PortfolioTemplate';

const PortfolioTabs = () => {
    const [selectedTab, setSelectedTab] = useState<string>('all'); // Specify the type as string for selectedTab

    // Function to handle tab selection
    const handleTabClick = (tab: string) => { // Specify the type as string for the 'tab' parameter
        setSelectedTab(tab);
    };

    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex justify-center flex-wrap -mb-px">
                <li className="me-2">
                    <div
                        className={`inline-block px-8 py-4 border-b-2 text-2xl border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer ${selectedTab === 'all' ? 'text-gray-600 border-gray-600 dark:text-gray-300 dark:border-gray-300' : ''
                            }`}
                        onClick={() => handleTabClick('all')}
                    >
                        All
                    </div>
                </li>
                <li className="me-2">
                    <div
                        className={`inline-block px-8 py-4 border-b-2 text-2xl border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer ${selectedTab === 'web_design' ? 'text-gray-600 border-gray-600 dark:text-gray-300 dark:border-gray-300' : ''
                            }`}
                        onClick={() => handleTabClick('web_design')}
                    >
                        Web Design
                    </div>
                </li>
                <li className="me-2">
                    <div
                        className={`inline-block px-8 py-4 border-b-2 text-2xl border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer ${selectedTab === 'web_design' ? 'text-gray-600 border-gray-600 dark:text-gray-300 dark:border-gray-300' : ''
                            }`}
                        onClick={() => handleTabClick('web_design')}
                    >
                        Mobile App Design
                    </div>
                </li>
                <li className="me-2">
                    <div
                        className={`inline-block px-8 py-4 border-b-2 text-2xl border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer ${selectedTab === 'web_design' ? 'text-gray-600 border-gray-600 dark:text-gray-300 dark:border-gray-300' : ''
                            }`}
                        onClick={() => handleTabClick('web_design')}
                    >
                        Branding
                    </div>
                </li>
                <li className="me-2">
                    <div
                        className={`inline-block px-8 py-4 border-b-2 text-2xl border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer ${selectedTab === 'web_design' ? 'text-gray-600 border-gray-600 dark:text-gray-300 dark:border-gray-300' : ''
                            }`}
                        onClick={() => handleTabClick('web_design')}
                    >
                        Agency
                    </div>
                </li>
            </ul>
            {selectedTab === 'all' && <PortfolioTemplate />}
            {/* {selectedTab === 'web_design' && <WebDesignPortfolio />} */}
            {/* Render other PortfolioTemplates based on other tabs */}
            <div className='mt-10 bg-gray'>
            <h3 className='font-extrabold text-6xl text-center py-8'>Let&apos;s discuss your project!</h3>
                <button className="bg-blue px-4 py-2 rounded-md text-white mb-8">Schedule Meeting</button>
            </div>
        </div>
    );
};

export default PortfolioTabs;



// import Link from 'next/link';
// import { useState } from 'react';
// import PortfolioTemplate from './PortfolioTemplate';

// const PortfolioTabs = () => {
//     const [activeTab, setActiveTab] = useState('webDesign'); // Default active tab

//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//     };

//     return (
//         <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
//             <ul className="flex justify-center flex-wrap -mb-px">
//                 <li className="me-2">
//                     <Link href="#">
//                         <div className={`inline-block px-8 py-4 border-b-2 text-2xl border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer ${activeTab === 'all' ? 'text-blue-600 border-blue-600' : ''}`} onClick={() => handleTabChange('all')}>All</div>
//                     </Link>
//                 </li>
//                 <li className="me-2">
//                     <div className={`inline-block px-8 py-4 text-2xl border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer ${activeTab === 'webDesign' ? 'text-blue-600 border-blue-600' : ''}`} onClick={() => handleTabChange('webDesign')}>Web Design</div>
//                 </li>
//                 <li className="me-2">
//                     <div className={`inline-block px-8 py-4 text-2xl border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer ${activeTab === 'mobileApp' ? 'text-blue-600 border-blue-600' : ''}`} onClick={() => handleTabChange('mobileApp')}>Mobile App Design</div>
//                 </li>
//                 <li className="me-2">
//                     <div className={`inline-block px-8 py-4 text-2xl border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer ${activeTab === 'branding' ? 'text-blue-600 border-blue-600' : ''}`} onClick={() => handleTabChange('branding')}>Branding</div>
//                 </li>
//                 <li>
//                     <div className={`inline-block px-8 py-4 text-2xl text-gray-400 rounded-t-lg dark:text-gray-500 ${activeTab === 'agency' ? 'text-blue-600' : ''}`} onClick={() => handleTabChange('agency')}>Agency</div>
//                 </li>
//             </ul>
//             <PortfolioTemplate activeTab={activeTab} />
//         </div>
//     );
// };

// export default PortfolioTabs;
