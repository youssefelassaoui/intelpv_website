const Team = () => {
  const team = [
    {
      name: "Ibtihal AIT ABDELMOULA",
      role: "Phd in embedded systems",
      image: "/ibtihal.png",
    },
    {
      name: "Ahmadou SANA",
      role: "Big Data Engineer",
      image: "/ahmadou.png",
    },
    {
      name: "Dr Hicham OUFETTOUL",
      role: "Researcher/Project Manager",
      image: "/hicham.png",
    },
    {
      name: "Youssef El ASSAOUI",
      role: "Full Stack Engineer",
      image: "/youssef.png",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Our Team
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Experts
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            A multidisciplinary team of engineers dedicated to innovative solar
            monitoring solutions.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="space-y-4">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                  />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-gray-900">{member.name}</h3>
                      <p className="text-green-600">{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
