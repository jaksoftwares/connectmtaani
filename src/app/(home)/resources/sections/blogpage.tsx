"use client"; 

import Link from 'next/link'; 
import Image from 'next/image'; 

const BlogPage = () => {
  return (
    <>
      <section className="bg-gray-100 min-h-screen py-8 px-4">
        {/* Blog Header */}
        <header className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Revolutionizing the Labour Hiring Architecture in Kenya
          </h1>
          <p className="text-gray-600 mt-4">
            Published on <span className="font-medium">December 20, 2024</span> by{" "}
            <span className="font-medium">ConnectMtaani Team</span>
          </p>
        </header>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto mb-8">
          <Image
            src="https://via.placeholder.com/800x400" 
            alt="Blog Header"
            width={800} 
            height={400} 
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Blog Content */}
        <article className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 text-lg leading-relaxed">
            The labor market in Kenya is undergoing a transformative shift, with
            innovative platforms like ConnectMtaani paving the way for efficient
            job matching and workforce management. The gig economy is thriving,
            providing opportunities for millions of informal sector workers to
            connect with reliable employers and contribute to economic growth.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            By leveraging technology, ConnectMtaani is bridging the gap between
            job seekers and employers, streamlining the hiring process, and
            empowering businesses with a flexible workforce. In this blog, we&quot;ll
            explore how ConnectMtaani is revolutionizing labor hiring, the
            benefits it offers to both workers and employers, and what lies ahead
            for the future of work in Kenya.
          </p>

          <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-600 my-6">
          &quot;ConnectMtaani is not just a platform; it’s a movement that’s
            transforming how work gets done in Kenya.&quot;
          </blockquote>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Whether you&quot;re a business owner looking for reliable workers or a job
            seeker searching for opportunities, ConnectMtaani provides the tools
            and support needed to thrive in a dynamic labor market.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
            The Benefits of ConnectMtaani
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Efficient job matching with verified employers and workers.</li>
            <li>Empowering informal sector workers with access to short-term and long-term opportunities.</li>
            <li>Streamlined hiring processes for businesses of all sizes.</li>
          </ul>
        </article>

        {/* Related Posts Section */}
        <section className="max-w-4xl mx-auto mt-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Related Posts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example of Related Posts */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src="https://via.placeholder.com/300x150"
                alt="Related Post"
                width={300} 
                height={150} 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  Empowering Informal Workers in Kenya
                </h4>
                <Link
                  href="/blog/empowering-informal-workers"
                  className="text-orange-500 text-sm mt-2 inline-block font-medium"
                >
                  Read More &gt;
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src="https://via.placeholder.com/300x150" 
                alt="Related Post"
                width={300} 
                height={150} 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  The Future of the Gig Economy
                </h4>
                <Link
                  href="/blog/future-of-gig-economy"
                  className="text-orange-500 text-sm mt-2 inline-block font-medium"
                >
                  Read More &gt;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default BlogPage;