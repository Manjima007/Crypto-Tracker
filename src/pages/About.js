import React from 'react'

const About = () => {
  return (
    <div className='text-cyan font-playfair h-full w-[80%] px-10 py-10 text-left text-lg'>
      <details className='mb-10 mt-10'>
        <summary className='active:text-left cursor-pointer font-bold'>Mission & Vision of De-Crypto</summary>
        <samp className='text-white font-black'>
        "Mission: To simplify the process of tracking and analyzing crypto currencies, providing a transparent and reliable source of information to help users make informed investment choices. Vision: To be the leading online resource for cryptocurrency enthusiasts and professionals, delivering accurate data, actionable insights, and expert commentary to drive successful investment strategies"
        </samp>
      </details>
      <details className='mb-10 mt-10'>
        <summary className='active:text-left cursor-pointer font-bold'>Advantages of Using De-Crypto</summary>
        <samp className='text-white font-black'>
        "By using our website, users can easily track the value of their favorite cryptocurrencies in real-time, making it an invaluable resource for investors and traders to stay informed and make informed decisions. Additionally, our website's trend analysis feature helps users discover emerging cryptocurrencies that are on the rise, allowing them to get in on the ground floor of potential market winners."
        </samp>
      </details>
      <details className='mb-10 mt-10'>
        <summary className='active:text-left cursor-pointer font-bold'>Crypto Trading and Handling</summary>
        <samp className='text-white font-black'>
        Crypto trading involves buying, selling, and exchanging cryptocurrencies such as Bitcoin, Ethereum, and others on online platforms, requiring careful consideration of market trends, risk management, and security measures to prevent hacking and theft. Effective handling of cryptocurrency transactions requires a strong understanding of blockchain technology, wallet security, and the use of secure exchanges and storage solutions to protect investments.
        </samp>
      </details>
      <details className='mb-10 mt-10'>
        <summary className='active:text-left cursor-pointer font-bold'>Probable Future of De-Crypto</summary>
        <samp className='text-white font-black'>
        As the cryptocurrency market becomes increasingly mainstream, your website has a probable future of attracting institutional investors and corporations, potentially leading to increased traffic and revenue through premium subscription models and data analytics services. Additionally, the website may also expand its offerings to include educational resources, such as tutorials and webinars, to educate users about the basics of cryptocurrencies and blockchain technology, further solidifying its position as a leading authority in the space.
        </samp>
      </details>
      <details className='mb-10 mt-10'>
        <summary className='active:text-left cursor-pointer font-bold'>Our Creators and Experts</summary>
        <samp className='text-white font-black'>
        Our website was created by a team of experienced professionals, led by experts in the field of finance and technology, who have a deep understanding of the crypto currency market and its trends. Our team of experts continuously monitor the market, analyze data, and update our website to ensure that users have access to the most accurate and up-to-date information on cryptocurrency values.
        </samp>
      </details>
    </div>
  )
}

export default About