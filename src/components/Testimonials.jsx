function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content: "SoftSell helped us recover over $50,000 from unused enterprise software licenses. The process was incredibly smooth, and we received payment within 24 hours of the sale.",
      author: {
        name: "Sarah Johnson",
        role: "CTO",
        company: "TechNova Solutions",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 2,
      content: "As a growing startup, we needed to offload some licenses after downsizing. SoftSell not only found buyers quickly but got us 30% more than we expected. I highly recommend their service.",
      author: {
        name: "Michael Chen",
        role: "Operations Director",
        company: "Quantum Innovations",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];

  return (
    <section id="testimonials" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            What Our Customers Say
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full" src={testimonial.author.image} alt="" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.content}</p>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {testimonial.author.name}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {testimonial.author.role}, {testimonial.author.company}
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
}

export default Testimonials;