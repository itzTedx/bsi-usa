function Experience() {
  const EXPItems = [
    {
      title: "High Quality",
      desc: "To provide the highest level of quality construction services to our customers at reasonable and market-competitive prices.",
    },
    {
      title: "Satisfaction",
      desc: "To ensure the longevity of our company through repeat and referral business achieved through customer satisfaction in all areas, including timeliness, attention to detail, and service-minded attitudes.",
    },
    {
      title: "Team Work",
      desc: "To maintain the highest levels of professionalism, integrity,honesty, and fairness in our relationships with our suppliers, subcontractors, professional associates, and customers.",
    },
  ];

  return (
    <section className="container">
      <div>
        <span className="uppercase text-sm tracking-widest">
          We provide you
        </span>
        <p className="text-3xl">
          The <span className="text-accent font-bold">Best Experience</span>
        </p>
      </div>
      <div className="mt-8 grid sm:grid-cols-3 gap-8">
        {EXPItems.map((item) => (
          <div className="rounded-md border border-accent p-8" key={item.title}>
            <h6 className="text-xl font-bold mt-9 uppercase">{item.title}</h6>
            <p className="mt-3 text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
