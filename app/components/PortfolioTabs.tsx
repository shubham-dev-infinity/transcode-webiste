"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import PortfolioTemplate from './PortfolioTemplate';
import WebDesignPortfolio from './WebDesignPortfolio';
import MobileAppDesign from './MobileAppDesign';

const PortfolioTabs = () => {
    const [selectedTab, setSelectedTab] = useState<string>('all'); 
    
    const handleTabClick = (tab: string) => { 
        setSelectedTab(tab);
    };

    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex justify-center flex-wrap -mb-px mt-0 sm:mt-10">
                <li className="me-2">
                    <div
                        className={`inline-block px-4 sm:px-8 py-2 sm:py-4 border-b-2 text-lg sm:text-2xl border-transparent rounded-t-lg hover:text-blue hover:border-b-4 hover:border-blue dark:hover:text-gray-300 cursor-pointer ${selectedTab === 'all' ? 'text-blue border-gray dark:text-gray-300 dark:border-gray-300' : ''
                            }`}
                        onClick={() => handleTabClick('all')}
                    >
                        All
                    </div>
                </li>
                <li className="me-2">
                    <div
                        className={`inline-block px-4 sm:px-8 py-2 sm:py-4 border-b-2 text-lg sm:text-2xl border-transparent rounded-t-lg hover:text-blue hover:border-b-4 hover:border-blue dark:hover:text-gray-300 cursor-pointer ${selectedTab === 'web_design' ? 'text-blue border-gray dark:text-gray-300 dark:border-gray-300' : ''
                            }`}
                        onClick={() => handleTabClick('web_design')}
                    >
                        Web Design
                    </div>
                </li>
                <li className="me-2">
                    <div
                        className={`inline-block px-4 sm:px-8 py-2 sm:py-4 border-b-2 text-lg sm:text-2xl border-transparent rounded-t-lg hover:text-blue hover:border-b-4 hover:border-blue dark:hover:text-gray-300 cursor-pointer ${selectedTab === 'mobile_AppDesign' ? 'text-blue border-blue dark:text-gray-300 dark:border-gray-300' : ''
                            }`}
                        onClick={() => handleTabClick('mobile_AppDesign')}
                    >
                        Mobile App Design
                    </div>
                </li>
                <li className="me-2">
                    <div
                        className={`inline-block px-4 sm:px-8 py-2 sm:py-4 border-b-2 text-lg sm:text-2xl border-transparent rounded-t-lg hover:text-blue hover:border-b-4 hover:border-blue dark:hover:text-gray-300 cursor-pointer ${selectedTab === 'Branding' ? 'text-blue border-blue dark:text-gray-300 dark:border-gray-300' : ''
                            }`}
                        onClick={() => handleTabClick('Branding')}
                    >
                        Branding
                    </div>
                </li>
                <li className="me-2">
                    <div
                        className={`inline-block px-4 sm:px-8 py-2 sm:py-4 border-b-2 text-lg sm:text-2xl border-transparent rounded-t-lg hover:text-blue hover:border-b-4 hover:border-blue dark:hover:text-gray-300 cursor-pointer ${selectedTab === 'Agency' ? 'text-blue border-blue dark:text-gray-300 dark:border-gray-300' : ''
                            }`}
                        onClick={() => handleTabClick('Agency')}
                    >
                        Agency
                    </div>
                </li>
            </ul>
            {selectedTab === 'all' && <PortfolioTemplate />}
            {selectedTab === 'mobile_AppDesign' && <MobileAppDesign />}
            {selectedTab === 'web_design' && <WebDesignPortfolio />}

            {/* Render other PortfolioTemplates based on other tabs */}
            <div className='mt-16 bg-gray'>
            <h3 className='font-extrabold text-2xl sm:text-6xl text-center py-8'>Let&apos;s discuss your project!</h3>
                <button className="bg-blue px-4 py-2 rounded-md text-white mb-8 hover:bg-white hover:text-blue hover:border-blue border hover:border-solid">Schedule Meeting</button>
            </div>
        </div>
    );
};

export default PortfolioTabs;

