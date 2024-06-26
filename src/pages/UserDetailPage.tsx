import React from "react";
import { NavLink, useParams } from "react-router-dom";

const UserDetailPage = () => {
  const { userId } = useParams();
  console.log(userId);
  return (
    <div>
      <article className="">
        <div className="flex flex-row  justify-between place-items-baseline around-md border-b border-gray-500 py-4 mb-4">
          <h1 className="text-xl font-bold  text-teal-700 md:text-4xl dark:text-teal-900 text-purple-800-700  mb-6">
            User Detail Page
          </h1>
          <NavLink
            className="link-button bg-transparent text-red-800  hover:text-red-700 underline"
            to={`/`}
          >
            Go Back to User List page
          </NavLink>
        </div>
        <h2 className="text-2xl font-bold  text-teal-700 mb-6">
          This User ID is : {userId}
        </h2>
        <p>
          You can easily customize this template to create a homepage for a
          travel app. The design is simple and clean, with a header that shows a
          large image background and a unique trip search bar. It also includes
          sections for popular destinations, staff, testimonials, highlights,
          FAQs, and more.
        </p>
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

export default UserDetailPage;
