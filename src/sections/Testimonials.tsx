import Image from 'next/image';
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 text-white" id="testimonials">
      <div className="flex justify-center px-4">
        <div className="bg-gray-900/70 backdrop-blur rounded-xl shadow-lg p-8 max-w-6xl w-full">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Testimonials</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-gray-900/70 rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border-4 border-blue-600">
                    <Image src={t.avatar} alt={t.name} width={80} height={80} className="object-cover w-full h-full" />
                  </div>
                  <p className="text-gray-300 mb-4">&quot;{t.text}&quot;</p>
                  <div className="font-bold text-blue-400">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.position}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
