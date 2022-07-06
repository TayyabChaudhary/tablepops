import ImageHow from "next/image";
import SectionThree from "../Section_Three/sectionThree";
export default function SectionTwo() {
  return (
    <div>
      <div className="flex justify-center pt-16">
        <h1 className="text-3xl crush_hading_main" style={{color: '#EE6C4D'}}>
          CRUSH YOUR NEXT CELEBRATION IN JUST 4 STEPS
        </h1>
      </div>
      <div className="flex justify-start mr-5 ml-5 mt-10">
        <div className="flex flex-row justify-between w-full">
          <div>
            <ImageHow src="/image 24.png" width="300px" height="200px" />
            <h3 className="font-medium text-xl mt-3 dishes_and_others">
              1. DISH YOUR DEETS
            </h3>
            <p className="text-xs dishes_and_others_p">
              Answer a few quick questions <br /> about your event to meet your{" "}
              <br /> dream team of vendors.
            </p>
          </div>
          <div>
            <ImageHow src="/image 26.png" width="300px" height="200px" />
            <h3 className="font-medium text-xl mt-3 dishes_and_others">
              2. PICK YOUR PROS
            </h3>
            <p className="text-xs dishes_and_others_p">
              Choose from a customized list of <br /> vetted professionals or
              picka <br />
              package that fits your functions.
            </p>
          </div>
          <div>
            <ImageHow src="/image 25.png" width="300px" height="200px" />
            <h3 className="font-medium text-xl mt-3 dishes_and_others">
              3. COLLAB & CREATE
            </h3>
            <p className="text-xs dishes_and_others_p">
              Work with your team directly in the <br /> TablePop platform to
              easily <br />
              manage every details and to 'do.
            </p>
          </div>
          <div>
            <ImageHow src="/image 23.png" width="300px" height="200px" />
            <h3 className="font-medium text-xl mt-3 dishes_and_others">4. CELEBRATE!</h3>
            <p className="text-xs dishes_and_others_p">
              Show your quests what true <br/> hospitality looks like and serve the <br/>
              party the minutes they arrive.
            </p>
          </div>
        </div>
      </div>
      <SectionThree/>
    </div>
  );
}
