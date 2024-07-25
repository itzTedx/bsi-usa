const WhyPage = () => {
  const whyUs = [
    {
      title: 'Building for a Better Future',
      desc: "Every day, we solve complex design and construction problems, using high-quality, sustainable materials that benefit both the environment and people's well-being. Our focus on sustainability means every project not only meets but exceeds environmental standards, promoting a greener future for everyone.",
    },
    {
      title: 'Expertise and Innovation',
      desc: 'With years of experience and a team of skilled professionals, we bring innovative solutions to every project. We stay up-to-date with the latest technologies and practices, ensuring your projects are completed with precision and efficiency.',
    },
    {
      title: 'Support and Collaboration',
      desc: 'From planning to project completion, we support you every step of the way. Our collaborative approach ensures your vision is integrated into every phase of the project. We listen to your needs and provide personalized support to ensure your success.',
    },
    {
      title: 'Quality and Reliability',
      desc: 'At Builders Solutions Inc., quality and reliability are our top priorities. We use only the best materials and have strict quality control measures to ensure every project is built to last. Our reputation for excellence is backed by many successful projects and happy clients.',
    },
  ]

  return (
    <>
      <h2 className="w-full h-60 bg-blue-950 text-white about-billboard grid place-content-center text-6xl font-bold uppercase">
        Why Us
      </h2>
      <div className="max-w-6xl mx-auto space-y-4 my-12 px-5 md:px-0">
        <h2 className="text-2xl">
          Why Choose <span className="font-bold">Builders Solutions Inc.?</span>
        </h2>
        <p>
          Building success, globally, requires a reliable partner who
          understands your vision and the complexities of international
          construction. At Builders Solutions Inc., we offer more than just
          trading services; we provide a comprehensive solution that empowers
          you to achieve your goals.
        </p>
      </div>
      <section className="mb-9 max-w-5xl mx-auto grid gap-9 px-5 md:px-0">
        <h3 className="text-rose-600 font-bold text-3xl">
          We deliver excellence
        </h3>
        {whyUs.map(({ title, desc }) => (
          <div
            key={title}
            className="p-6 border-rose-600 rounded-lg border hover:bg-rose-100 transition-colors"
          >
            <h4 className="font-bold mb-2 text-lg">{title}</h4>
            <p>{desc}</p>
          </div>
        ))}
      </section>
      <h5 className="max-w-6xl mx-auto space-y-4 my-12 text-xl px-5 md:px-0">
        Choose <span className="font-bold">Builders Solutions Inc.</span> As
        your partner, and together we can build a{' '}
        <span className="font-bold text-rose-600"> Better</span>, more
        sustainable
        <span className="font-bold text-rose-600"> Future.</span>
      </h5>
    </>
  )
}

export default WhyPage
