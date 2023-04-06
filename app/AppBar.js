import Link from "next/link";

export default function AppBar () {
    return (
        <div className="fixed w-full py-4 px-8 bg-slate-100">
            <Link href={'/'} className='text-2xl text-primary font-bold'>RISK PROTOCOL</Link>
        </div>
    );
}