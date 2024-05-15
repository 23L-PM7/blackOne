"use client";
import { cinzel, quicksand } from "@/app/theme";
import Footer from "@/components/footer/Footer";

export default function About() {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-[50%] h-full">
          <h1 className={`${quicksand.className} text-[45px] h-[45px]`}>Our</h1>
          <h1 className={`${quicksand.className} text-[45px] h-[45px]`}>
            Philosophy
          </h1>
        </div>
        <div className="w-[50%] h-[50%]">
          <img src="images/purplee.jpeg" />
        </div>
      </div>

      <div>
        <p>
          Introducing Karageorgiou Interiors by emphatically referring to their
          century-long heritage of artfully crafting endearing pieces of
          furniture, exceptionally designing interiors, and eclectically
          importing unique items would only tell half the story. No matter how
          proud the people of the company are about their legacy in interior
          design and furniture creation, it’s the fact that they have managed to
          build a business that holds the personality of each client at the core
          of its philosophy, that keeps them motivated, creative, and embarking
          on every project with fresh eyes and the fascination of an inspired
          creator. Through this approach, their intriguing choices of
          contemporary and classic furniture, their tailored design solutions,
          even their specially made handcrafted items, get elevated to a
          breathing universe that mirrors the personality of its residents.{" "}
        </p>
      </div>
      <div>
        <h1>
          Creating not just a space that you inhabit, but a home you feel
          yourself in; a place with design and quality you simply find
          comforting and familiar.{" "}
        </h1>
      </div>
      <div>
        <img src="images/yaganaa.jpeg" />
        <img src="images/black.jpeg" />
      </div>
      <div>
        <p>
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
          relationships with our clients, can lead to remarkable results.{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
}
