import Link from 'next/link';

const PortfolioTabs = () => {
    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex justify-center flex-wrap -mb-px">
                <li className="me-2">
                    <Link href="#">
                        <div className="inline-block px-8 py-4 border-b-2 text-2xl border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer">All</div>
                    </Link>
                </li>
                <li className="me-2">
                    <div className="inline-block px-8 py-4 text-2xl text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500">Web Design</div>
                </li>
                <li className="me-2">
                    <Link href="#">
                        <div className="inline-block px-8 py-4 text-2xl border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer">Mobile App Design</div>
                    </Link>
                </li>
                <li className="me-2">
                    <Link href="#">
                        <div className="inline-block px-8 py-4 text-2xl border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer">Branding</div>
                    </Link>
                </li>
                <li>
                    <div className="inline-block px-8 py-4 text-2xl text-gray-400 rounded-t-lg dark:text-gray-500">Agency</div>
                </li>
            </ul>
        </div>
    );
};

export default PortfolioTabs;
