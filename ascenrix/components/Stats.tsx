const stats = [
  {
    value: "150+",
    label: "Projects Delivered",
  },
  {
    value: "98%",
    label: "Customer Satisfaction",
  },
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "24/7",
    label: "Global Support",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-5xl font-bold text-blue-400">
                {stat.value}
              </h3>

              <p className="mt-3 text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
