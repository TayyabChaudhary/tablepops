import MainHeader from "../../MainHeader/mainheader";

export default function SectionOne() {
  return (
    <div>
      <div className="_main_header h-96 bg-cover bg-no-repeat">
        <MainHeader />
        <div className="flex justify-center pt-48">
          <h1 className="text-6xl text-white _opaoao">Here’s How it works</h1>
        </div>
        <div className="flex justify-center pt-4">
          <h1 className="text-xl text-white">
            Get your party started with 4 easy steps.
          </h1>
        </div>
      </div>
    </div>
  );
}
