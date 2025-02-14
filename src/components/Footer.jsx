import { FaGithubSquare, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
            <div className='space-y-4'>
                <h3 className='text-2xl text-gray-200 font-semibold'>AJ</h3>
                <div className="flex flex-row gap-6 text-gray-400 text-4xl">
                    <a href="https://github.com/akash11-01"><FaGithubSquare /></a>
                    <a href="https://x.com/akashjaiswar221"><FaTwitter /></a>
                </div>

            </div>
            <p className='text-gray-400'>@2025 AJ</p>
        </div>
    )
}
