import React from "react";
import CourseCard from "./CourseCard";

function PopularCourser() {
  const Data = [
    {
      img: "https://s3-alpha-sig.figma.com/img/500b/8b86/d4922183dce51286c45f3cd7aee0f417?Expires=1699228800&Signature=QAbMI~LFs0N8P5bRlak6LhoQ2if3zXdMHt2Thu-Z~oNuv3VbnLtf9j2f5qm96t6h1W-FFV4lJw7O9-lm0ya-rutHpGj7s2xsntA4CgHmTv7UiAm9fq5T4cUr889M4rnzaELyWCWjHCZrzvfHXA5CZYWA~cv58oIXH1i0zuwaZaJpwxPf6gj5z5OOns4jlUiE~HQtnSYOM3lcem5u4ChydiSY8-msdd4VP3a5JpGw1h4NlsX4wiy1xvv9MCl7ukMgHcVTxaCwKvjVVjcU8wA9klrHOrcExpbOaSsv7vM12Oy4s2x8qoGvnGJ1KoRuF3ms0n8CEmYhJnzrbDVlZpWK2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Product Management Basic - Course",
      date: "1 - 28 July 2022",
      des: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      price: "$ 678",
      sprice: "$ 500",
      enrolledStudent: "40",
    },
    {
      img: "https://www.figma.com/file/6y68vegr4HIOLdVxbDXrGS/image/9e7f8e83d1f49ef71983cf6326f17c53fd9ce1de?fuid=1221867493757535439",
      title: "BM Data Science Professional Certificate",
      date: "1 - 28 July 2022",
      des: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      price: "$ 123",
      sprice: "$ 500",
      enrolledStudent: "11",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/43c9/52b8/c0cf46f9c5b7e2389e58c6911c9e5469?Expires=1699228800&Signature=Fbik7wVqlQXj~x9hNaUlmqdKb2ZPZ7NYlqWNinVK0e~POqjIRNdniszofwLr~PJ85zQOzDWFTzD-0acLWzwZDyOsrLCnPc4g0dsaRiwNChQf2coLzrzwFKkE8mE~l7J0-htILyQIArLPGJQZOxCslb1yDJUfSfFStX9VpDtwH2vdViq4gQTziZ~5jxA3OqL89dhoJhgiKSYdC7wsUOh8DKnGjUNKLGM1uG9Z6WVRsa6DApl1AzKTEnzwIkg-jNZk-9nT9wHWl7mL~OFHjSbo9-ilk3IdT~~6MDPLNxgdzD4lfXSQ1IA95SmaRp0lsN1jTtnPq1KsTZlYuKAQi6Ci0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Product Management Basic - Course",
      date: "1 - 28 July 2022",
      des: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      price: "$ 567",
      sprice: "$ 500",
      enrolledStudent: "234",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/c11a/472f/a4905dd085718bae4bc38f09b8dafaea?Expires=1699228800&Signature=qUKPooPTIqRSprc~4nr7cLM0s6sDmcuiW2jj5ch28ZQQEtcZW9bsz2emk9PQcmhsyH5Wm5A6YuoW3AUMm2Aspc8FoVdaxpWoxl0nGQXubq2ii1btL8neHcen~HBSp-ukvB3i81Jy-pydWeLfDTV7mHFAEuRwcFZoteeLIykFfkWiG2Ip4HHT0P4hPZUs0rBDatcDondO0T1wywgo1iRef6b5KDgwUFw92pGfRiNGSZFSUJJYKVVgY2mRG-mM9KXMoXmIb5f-dvjghlbff3fQrIJPqb9q8VDH20VOJD6tBZtVFiVAs-gi4fV8q5GRqlA8heJ3gHflUTlk4UaMbqQYIw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Product Management Basic - Course",
      date: "1 - 28 July 2022",
      des: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      price: "$ 380",
      sprice: "$ 500",
      enrolledStudent: "342",
    },
  ];
  return (
    <div>
      <div className="coursesHeading">
        <h1>Popular Courses</h1>
        <div className="titleLine">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="178"
            height="10"
            viewBox="0 0 178 10"
            fill="none"
          >
            <path
              d="M1 8.32205C49.5338 0.233062 116.717 -0.441062 177.834 8.32205"
              stroke="#0B7077"
              stroke-width="2.24694"
            />
          </svg>
        </div>
      </div>
      <div className="CoursesCatagories flex">
        <div className="CourseCatagory">All Programme</div>
        <div className="CourseCatagory">Ui/Ux Design</div>
        <div className="CourseCatagory">Program Design</div>
        <div className="CourseCatagory">Program Design</div>
        <div className="CourseCatagory">Program Design</div>
      </div>
      <div className="grid">
        {Data.map((el) => {
          return (
            <>
              <CourseCard key={el.enrolledStudent + Math.random} data={el} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default PopularCourser;
