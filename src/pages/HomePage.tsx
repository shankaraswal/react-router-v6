import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  function generateNumberArray(start, end, gap) {
    const numbers = [];
    for (let i = start; i <= end; i += gap) {
      numbers.push(i);
    }
    return numbers;
  }
  const numberArray = generateNumberArray(101, 200, 17);

  return (
    <div>
      <article className="prose lg:prose-xl">
        <h1 className="text-xl font-bold  text-teal-700 md:text-4xl dark:text-teal-900  mb-6">
          User List
        </h1>
        <p>
          You can easily customize this template to create a homepage for a
          travel app. The design is simple and clean, with a header that shows a
          large image background and a unique trip search bar. It also includes
          sections for popular destinations, staff, testimonials, highlights,
          FAQs, and more.
        </p>
        <ul className="list-disc list-inside">
          {numberArray.map((el) => (
            <li className="my-4" key={el}>
              <NavLink
                to={`/user/${el}`}
                className="text-teal-700 hover:text-red-900 underline"
              >{`User ID is ${el}`}</NavLink>
            </li>
          ))}
        </ul>
        <p>
          An eye catching design, perfect for companies in the IT sector, gadget
          companies or AI. It features a video background in the header
          guaranteed to draw attention, a special typeface as an accent as well
          as all of the sections you would need to present your product to the
          world.
        </p>
      </article>
    </div>
  );
};

export default HomePage;
