import { useSearchParams } from 'react-router-dom';

const Tabs = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentTab = searchParams.get('tab') || 'users';

    const handleTabChange = (tab:string) => {
        setSearchParams({ tab });
    };

    return (
        <div className="flex space-x-4 border-b">
            <button
                onClick={() => handleTabChange('users')}
                className={`px-4 py-2 text-gray-600 ${currentTab === 'users' ? 'border-b-2 border-indigo-600' : ''}`}
            >
                Users
            </button>
            <button
                onClick={() => handleTabChange('orders')}
                className={`px-4 py-2 text-gray-600 ${currentTab === 'orders' ? 'border-b-2 border-indigo-600' : ''}`}
            >
                Orders
            </button>
            <button
                onClick={() => handleTabChange('products')}
                className={`px-4 py-2 text-gray-600 ${currentTab === 'products' ? 'border-b-2 border-indigo-600' : ''}`}
            >
                Products
            </button>
        </div>
    );
};


export default Tabs;
