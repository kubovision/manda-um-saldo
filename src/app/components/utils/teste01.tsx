'use client';

export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 flex flex-col items-center justify-center">
            <div className="w-full h-30 footer-top bg-gray-800 flex px-40">
                <div className="h-full bg-amber-400 w-100"></div>
                <div className="h-full bg-amber-950 flex-[1_1_100%]"></div>
            </div>
            <div className="w-full h-30 footer-top bg-gray-800 flex px-40">
                <div className="h-full bg-amber-400 w-100"></div>
                <div className="h-full bg-amber-600 flex-[1_1_100%]"></div>
            </div>
        </footer>
    );
}