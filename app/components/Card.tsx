interface CardProps {
    title: string;
}

const Card:React.FC<CardProps> = ({ title }) => {
    return (
        <div className="bg-gray shadow rounded-lg overflow-hidden">
            <div className="bg-gray h-32 flex pt-8 justify-center">
                <div className="dark_gray h-16 w-16 sm:h-24 sm:w-24 rounded-full border-2 border-blue"></div>
            </div>
            <div className="py-0 sm:py-8 px-6 text-center">
                <h2 className="text-black font-semibold">{title}</h2>
            </div>
        </div>
    );
};
export default Card;