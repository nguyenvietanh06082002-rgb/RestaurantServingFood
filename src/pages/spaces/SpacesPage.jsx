import banquetHall from "../../assets/images/banquet-hall.png";
import bar from "../../assets/images/bar.png";
import cool from "../../assets/images/cool.png";

const spaces = [
  {
    id: "main-hall",
    name: "Sảnh tiệc",
    description:
      "Không gian rộng rãi cho những buổi gặp mặt và tiệc đông người.",
    image: banquetHall,
  },
  {
    id: "private-room",
    name: "Phòng riêng",
    description:
      "Không gian riêng tư cho gia đình, bạn bè hoặc những dịp đặc biệt.",
    image: cool,
  },
  {
    id: "bar",
    name: "Bar Counter",
    description: "Khu vực thư giãn để trò chuyện và tận hưởng buổi tối.",
    image: bar,
  },
];

export default function SpacesPage() {
  return (
    <main className="min-h-screen bg-[#FFF8F4] px-5 py-12 md:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <p className="mb-2 text-sm uppercase tracking-widest text-[#7D562D]">
            Party Boys
          </p>

          <h1 className="font-serif text-4xl text-[#6A0205]">
            Không gian nhà hàng
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-[#58413E]">
            Khám phá các khu vực được thiết kế để phù hợp với những buổi gặp gỡ,
            dùng bữa và tổ chức tiệc.
          </p>
        </header>

        <section
          aria-label="Các khu vực trong nhà hàng"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {spaces.map((space) => (
            <article
              key={space.id}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-lg"
            >
              <img
                src={space.image}
                alt={space.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="font-serif text-2xl text-[#6A0205]">
                  {space.name}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-[#58413E]">
                  {space.description}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
