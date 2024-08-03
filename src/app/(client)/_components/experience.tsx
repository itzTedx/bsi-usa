import { Icons } from '@/components/icons'

function Experience() {
  const EXPItems = [
    {
      title: 'High Quality',
      desc: 'We are committed to delivering excellence. Our mission is to provide our customers with the highest quality construction services at competitive prices. Your satisfaction and the integrity of our work are our top priorities.',
      icon: <Icons.medal />,
    },
    {
      title: 'Satisfaction',
      desc: `Customer satisfaction is the cornerstone of our success. We are dedicated to fostering long-term relationships by consistently exceeding expectations. Your satisfaction is not just a goal; it${"'"}s our promise.`,
      icon: <Icons.satisfaction />,
    },
    {
      title: 'Team Work',
      desc: 'We believe in the power of teamwork and integrity. We uphold the highest standards of professionalism and fairness. By fostering trust and collaboration, we ensure mutual success and excellence.',
      icon: <Icons.team />,
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-3">
      <div>
        <span className="text-sm tracking-widest uppercase">
          We provide you
        </span>
        <p className="text-3xl">
          The <span className="font-bold text-accent">Best Experience</span>
        </p>
      </div>
      <div className="grid gap-8 mt-8 md:grid-cols-3">
        {EXPItems.map((item) => (
          <div
            className="p-8 border rounded-md border-accent space-y-3"
            key={item.title}
          >
            {item.icon}
            <h6 className="text-xl font-bold uppercase">{item.title}</h6>
            <p className=" text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
