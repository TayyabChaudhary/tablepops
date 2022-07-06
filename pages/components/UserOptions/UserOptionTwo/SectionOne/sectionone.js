import MailImage from "next/image";
import { useState } from "react";
import Footer from "../../../Footer/footer";
import CoverBackDialog from "../CoverBackDialog/coverback";
import Specialdaydialog from "../SpecialDayDialog/specialdaydialog";
export default function SectionOneUserOptionTwo() {
  const [shwo_specialDayDialog, showSpecialDay] = useState(false);
  const [show_cover_our_back, showCoverBack] = useState(false);
  function showSpecialDayDialogPop() {
    showSpecialDay(!shwo_specialDayDialog);
  }

  function showCoverBackDialog() {
    showCoverBack(!show_cover_our_back);
  }

  return (
    <>
      <div className="flex justify-center pt-6">
        <div className="flex items-center">
          <MailImage src="/mail.png" width="50px" height="50px" />
          <h3 className="text-2xl _opaoao pl-2">You’re invited</h3>
        </div>
      </div>

      <div className="flex justify-center pt-3 pb-6">
        <div className="flex flex-row">
          <div>
            <MailImage src="/image 56.png" width="700px" height="350px" />
          </div>
        </div>
        <div className="flex flex-row pl-4 pb-3">
          <div className="flex flex-col pl-3">
            <div className="mb-3">
              <MailImage
                src="/4.png"
                className="object-center rounded"
                width="250px"
                height="170px"
              />
            </div>
            <div>
              <MailImage
                src="/2.png"
                className="object-center rounded"
                width="250px"
                height="160px"
              />
            </div>
          </div>
          <div className="flex flex-col pl-3 pb-3">
            <div className="mb-3">
              <MailImage
                src="/3.png"
                className="object-cover rounded"
                width="250px"
                height="170px"
              />
            </div>
            <div>
              <MailImage
                src="/1.png"
                className="object-center rounded"
                width="250px"
                height="160px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pl-10">
        <h2 className="text-3xl _opaoao">Kelly Weds Rayn</h2>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea <br /> commodo consequat.
        </p>
        <div className="flex justify-between pt-4">
          <div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
                </svg>
                <span className="text-sm pl-3 font-medium">
                  Bliss on the Ocean, 7th Street, LA, California 237446
                </span>
              </div>
              <div className="flex items-center pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM5 7h14v2H5V7z"></path>
                </svg>
                <span className="text-sm pl-3 font-medium">20th Feb, 2022</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="ml-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 12v-6h-2v8h7v-2h-5z" />
                </svg>
                <span className="text-sm pl-3 font-medium">
                  10:00 AM onwards
                </span>
              </div>
            </div>
          </div>

          <div className="pr-10 relative -top-20">
            <div className="flex flex-col">
              <button
                onClick={showSpecialDayDialogPop}
                class="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-3 _savespso px-20 rounded"
              >
                Accept Invitation
              </button>
              <button
                onClick={showCoverBackDialog}
                class="bg-transparent mt-4 hover:bg-orange-500 text-orange-500 font-semibold py-2 px-4 border border-orange-500 hover:border-transparent rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-solid border-t mt-6 border-orange-600"></div>

      <div className="p-10">
        <div>
          <h1 className="text-2xl">
            Meet our caretakers to make wedding successfull
          </h1>
        </div>
        <div>
          <div class="grid grid-cols-5 gap-4 pt-6">
            <div className="flex flex-col">
              <div className="flex justify-center">
                <MailImage
                  src="/image 57.png"
                  className="rounded-full"
                  width="150px"
                  height="150px"
                />
              </div>
              <div>
                <h4 className="text-center font-medium pt-3">Alexa Grey</h4>
                <div className="flex justify-center pt-3">
                  <small className="text-xs text-center">Event Planner</small>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center">
                <MailImage
                  src="/image 58.png"
                  className="rounded-full"
                  width="150px"
                  height="150px"
                />
              </div>
              <div>
                <h4 className="text-center font-medium pt-3">
                  Bliss on the Ocean
                </h4>
                <div className="flex justify-center pt-3">
                  <small className="text-xs text-center">Venue</small>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center">
                <MailImage
                  src="/image 59.png"
                  className="rounded-full"
                  width="150px"
                  height="150px"
                />
              </div>
              <div>
                <h4 className="text-center font-medium pt-3">Simon Dull</h4>
                <div className="flex justify-center pt-3">
                  <small className="text-xs text-center">Photographer</small>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center">
                <MailImage
                  src="/image 39.png"
                  className="rounded-full"
                  width="150px"
                  height="150px"
                />
              </div>
              <div>
                <h4 className="text-center font-medium pt-3">White Tides</h4>
                <div className="flex justify-center pt-3">
                  <small className="text-xs text-center">Cake Shop</small>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center">
                <MailImage
                  src="/image 41.png"
                  className="rounded-full"
                  width="150px"
                  height="150px"
                />
              </div>
              <div>
                <h4 className="text-center font-medium pt-3">
                  Weavers of Dream
                </h4>
                <div className="flex justify-center pt-3">
                  <small className="text-xs text-center">
                    Wedding Dress Rental
                  </small>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center">
                <MailImage
                  src="/image 57.png"
                  className="rounded-full"
                  width="150px"
                  height="150px"
                />
              </div>
              <div>
                <h4 className="text-center font-medium pt-3">Pop Savoury</h4>
                <div className="flex justify-center pt-3">
                  <small className="text-xs text-center">Food Caterers</small>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center">
                <MailImage
                  src="/image 44.png"
                  className="rounded-full"
                  width="150px"
                  height="150px"
                />
              </div>
              <div>
                <h4 className="text-center font-medium pt-3">Ballet Bubbles</h4>
                <div className="flex justify-center pt-3">
                  <small className="text-xs text-center">Performers</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center pt-20">
            <div className="flex flex-col">
              <button class="browse hover:bg-blue-700 text-white font-bold py-3 text-sm mt-4 px-20 rounded-sm">
                Contribute
              </button>
              <span className="text-sm mt-2 text-gray-400">
                A small gesture from your side can make our day
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 bg-pink-50 mt-10">
        <Footer />
      </div>

      <div
        style={{
          display: shwo_specialDayDialog ? "block" : "none",
        }}
      >
        <div className="special_day_dialog flex justify-center pt-28">
          <Specialdaydialog />
        </div>
      </div>

      <div style={{ display: show_cover_our_back ? "block" : "none" }}>
        <div className="special_day_dialog flex justify-center pt-28">
          <CoverBackDialog />
        </div>
      </div>
    </>
  );
}
