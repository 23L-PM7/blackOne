"use client";
import { cinzel, quicksand } from "@/app/theme";
import Footer from "@/components/footer/Footer";

export default function About() {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-[50%] h-full">
          <h1 className={`${cinzel.className} text-[70px] h-[70px]`}>Our</h1>
          <h1 className={`${cinzel.className} text-[70px] h-[70px]`}>
            Philosophy
          </h1>
        </div>
        <div className="w-[50%] h-[50%]">
          <img src="images/purplee.jpeg" />

          <div className="w-[50%]">
            <p
              className={`${quicksand.className} pt-[20px] text-[20px] gap-[30px] `}
            >
              Introducing Karageorgiou Interiors by emphatically referring to
              their century-long heritage of artfully crafting endearing pieces
              of furniture, exceptionally designing interiors, and eclectically
              importing unique items would only tell half the story. No matter
              how proud the people of the company are about their legacy in
              interior design and furniture creation, it’s the fact that they
              have managed to build a business that holds the personality of
              each client at the core of its philosophy, that keeps them
              motivated, creative, and embarking on every project with fresh
              eyes and the fascination of an inspired creator. Through this
              approach, their intriguing choices of contemporary and classic
              furniture, their tailored design solutions, even their specially
              made handcrafted items, get elevated to a breathing universe that
              mirrors the personality of its residents.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="w-[90%]">
        <h1
          className={`${quicksand.className} pt-[100px] pb-[100px] text-[30px] opacity-5 `}
        >
          Creating not just a space that you inhabit, but a home you feel
          yourself in; a place with design and quality you simply find
          comforting and familiar.{" "}
        </h1>
      </div>
      <div className="flex items-center gap-[60px]">
        <img className="w-[40%] h-dvh object-cover" src="images/yaganaa.jpeg" />
        <img className="h-[80dvh]" src="images/black.jpeg" />
      </div>
      <div>
        <p
          className={`${quicksand.className} pt-[20px] text-[20px] gap-[20px] `}
        >
          In the beginning - in 1934, that is, when George Karageorgiou created
          his workshop in Kypseli -, there was skilled craftsmanship infused
          with instinctive creativity. Starting from this solid foundation, the
          small workshop has been growing ever since, not just as far as scale
          is concerned, but also with regard to its creative substance. With an
          appetite for all things new in the world of design, an eclectic
          spirit, and the attention to detail required by the craft,
          Karageorgiou Interiors evolved into a well-rounded company that
          designs, creates, discovers, feels, and anticipates, according to its
          customers’ needs. From utilitarian pieces of furniture to inspired
          designs, artifacts, or functional tailored solutions, our work
          showcases how keeping an open mind, staying on top of new trends,
          honoring the classics, collaborating with renowned professionals,
          attending international design fairs, nurturing meaningful
          relationships with our clients, can lead to remarkable results.
          <br />
          Such a mindset naturally leads to a specific approach when working
          with a new client. Whether it’s about renovating a small apartment or
          a large house, designing an office space or the interior of a private
          yacht, we undertake each project with the personality of the customer
          in mind, working towards solutions and suggestions that fit their
          aesthetics, meet their needs, correspond to their budget. Proper
          research, our experience and expertise in designing and crafting
          one-of-a-kind objects and spaces, our know-how of textiles,
          upholsteries, wood, or exotic materials, as well as our readiness to
          collaborate with acclaimed designers, architects, and other
          professionals, gets implemented in the optimal way, in order to
          deliver spaces that best suit our customers.
        </p>
      </div>
      <div>
        <h1
          className={`${cinzel.className} my-[20px] text-center text-[70px] h-[70px]`}
        >
          FAMILY VALUES
        </h1>
      </div>
      <div className="flex">
        <div className="relative pl-6 flex">
          <h1
            className="absolute left-0 bottom-0"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "scale(-1,-1)",
            }}
          >
            LE CROISSANT TIM COOK
          </h1>
          <img src="images/boss.jpeg" />
        </div>
        <div className="relative pl-6 flex">
          <img src="images/image.png" />
          <h1
            className="absolute left-0 bottom-0"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "scale(-1,-1)",
            }}
          >
            LE CROISSANT FLIP
          </h1>
        </div>
        <div className="relative pl-6 flex">
          <img src="images/woman.jpeg" />
          <h1
            className="absolute left-0 bottom-0"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "scale(-1,-1)",
            }}
          >
            LE CROISSANT DESIGNER
          </h1>
        </div>
      </div>
      <div>
        <h1
          className={`${quicksand.className} text-[20px] pt-[50px] gap-[20px] `}
        >
          Inspired by his father, Stelios Karageorgiou, with an eye for
          avant-garde design, went one step further, to become a pioneer in
          importing objects created by Italian artisans, through exclusive
          partnerships for Greece. Furthermore, growing in such a creative
          environment meant that he had learned to respect people and their
          stories, and that he realized the importance of personal relationships
          in the process of creating objects of high quality and aesthetic value
          that complete, rather than decorate, a space. This philosophy is
          applied to every decision, suggestion, creation, and collaboration of
          Karageorgiou Interiors, and it is the reason why the company has
          grown, moved to a modern space in Psychiko, and built a rich portfolio
          of different projects, in Greece and abroad. In fact, the company
          prides on its “hereditary” clients, people that come back to
          Karageorgiou Interiors for any new project, and for the projects of
          their children, carrying on an unofficial tradition. Today, Aspa and
          Eleana Karageorgiou, the third generation, bring their fresh creative
          take to the concepts, the ideas, and creations of the company. Forged
          with the values of a successful business, they have both developed a
          strong opinion about creativity and the endless possibilities of
          design, driving Karageorgiou Interiors into the future, with a keen
          eye for style and quality, well-informed about new trends, offering
          elevated aesthetics with layered interiors.
        </h1>
      </div>
      <Footer />
    </div>
  );
}
