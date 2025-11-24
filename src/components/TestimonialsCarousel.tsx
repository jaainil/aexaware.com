import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "We partnered with Aexaware to bring our vision of a modern e-commerce platform to life. From design to deployment, they handled everything with precision. The site not only looks great but also scales smoothly as our customer base grows.",
    author: "Pavan D.",
    role: "Zeck Switches",
  },
  {
    quote:
      "Aexaware built and deployed our software ecosystem from the ground up. They took charge of everything—website development, infrastructure setup, and scaling strategies. The result was a robust, secure, and future-proof platform.",
    author: "Rajan R.",
    role: "Qreius.com",
  },
  {
    quote:
      "We needed an e-commerce solution that was both functional and easy for our customers to use. Aexaware delivered exactly that. Their team guided us from concept to a fully operational online store, ensuring smooth deployment and ongoing reliability.",
    author: "Arvind S.",
    role: "Bharat Krushi Biofertilizer",
  },
  {
    quote:
      "The team at Aexaware is simply outstanding. They understood our complex requirements and delivered a custom software solution that has streamlined our operations significantly. Their attention to detail and commitment to quality are commendable.",
    author: "Meera K.",
    role: "TechInnovate Solutions",
  },
];

export const TestimonialsCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {testimonials.map((testimonial, i) => (
          <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="flex h-full flex-col justify-between rounded-3xl bg-primary-foreground/5 p-8 backdrop-blur-sm">
              <div>
                <div className="mb-6 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="size-4 fill-accent text-accent"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed text-primary-foreground/90">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              <div className="mt-8 border-t border-primary-foreground/10 pt-6">
                <cite className="not-italic">
                  <span className="block font-semibold">
                    {testimonial.author}
                  </span>
                  <span className="block text-sm text-primary-foreground/60">
                    {testimonial.role}
                  </span>
                </cite>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-12 flex justify-center gap-4">
        <CarouselPrevious className="static translate-y-0 hover:bg-primary-foreground/10 hover:text-primary-foreground" />
        <CarouselNext className="static translate-y-0 hover:bg-primary-foreground/10 hover:text-primary-foreground" />
      </div>
    </Carousel>
  );
};
