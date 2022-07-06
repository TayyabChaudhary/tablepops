import IconOne from "next/image";
import Images from 'next/image'
export default function SectionTwo() {
  return (
    <div>
      <div className="mt-16 p-10" style={{backgroundColor: '#fdf0ed'}}>
        <h1 className="text-4xl text-center oapapapo font-normal">
          Crush your next celebration in just 4 steps
        </h1>
      </div>

      <div className="flex justify-center pt-16">
        <div className="flex flex-row justify-around w-full">
          <div>
            <div className="flex justify-center">
              <IconOne src="/Palette.png" width="60px" height="60px" />
            </div>
            <h4 className="text-xl mt-4 oapapapo text-center iaoaoa">Dish your deets</h4>
            <p className="text-sm mt-3 _u_8_h_b_b text-center">
              Answer a few quick <br /> questions about your <br /> event to
              meet your <br /> dream team of vendors.
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <IconOne src="/Award.png" width="60px" height="60px" />
            </div>
            <h4 className="text-xl mt-4 oapapapo text-center iaoaoa">Pick your pros</h4>
            <p className="text-sm mt-3 _u_8_h_b_b text-center">
              Answer a few quick <br /> questions about your <br /> event to
              meet your <br /> dream team of vendors.
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <IconOne src="/Gift.png" width="60px" height="60px" />
            </div>
            <h4 className="text-xl mt-4 oapapapo text-center iaoaoa">Collab & Create</h4>
            <p className="text-sm mt-3 _u_8_h_b_b text-center">
              Answer a few quick <br /> questions about your <br /> event to
              meet your <br /> dream team of vendors.
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <IconOne src="/Pizza.png" width="60px" height="60px" />
            </div>
            <h4 className="text-xl mt-4 text-center oapapapo iaoaoa">Celebrate</h4>
            <p className="text-sm mt-3 _u_8_h_b_b text-center">
              Answer a few quick <br /> questions about your <br /> event to
              meet your <br /> dream team of vendors.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <h4 className="text-2xl font-medium aiakak">AS SEEN IN</h4>
      </div>

      <div>
          <div className="bg-pink-50 p-8 ml-10 mr-10 mt-10">
              <div className="flex justify-around">
                <div>
                    <Images src="/image 1.png" width="150px" height="50px" />
                </div>
                <div>
                    <Images src="/image 2.png" width="150px" height="50px" />
                </div>
                <div>
                    <Images src="/image 6.png" width="150px" height="50px" />
                </div>
                <div>
                    <Images src="/image 5.png" width="150px" height="50px" />
                </div>
                <div className="pt-3">
                    <Images src="/image 10.png" width="100px" height="30px" />
                </div>
                </div>
          </div>
      </div>
    </div>
  );
}
