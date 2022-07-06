import Imagesd from "next/image";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#EE6C4D" : "#EE6C4D",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
export default function RoleTab() {
  return (
    <>
      <div className="pl-20">
        <h2 className="text-3xl font-medium">Roles and Permissions</h2>
        <div class="max-w-lg w-full lg:max-w-full lg:flex">
          <div
            className="h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            title="Woman holding a mug"
          >
            <ul>
              <li className="w-96 bg-pink-50 p-3 rounded mb-3 mt-4">
                <div className="flex items-center">
                  <Imagesd
                    src="/image 57.png"
                    className="rounded-full"
                    width="40px"
                    height="40px"
                  />
                  <h3 className="font-medium pl-3">Alexa Grey</h3>
                </div>
              </li>
              <li className="w-96 bg-white p-3 rounded mb-3">
                <div className="flex items-center">
                  <Imagesd
                    src="/image 59.png"
                    className="rounded-full"
                    width="40px"
                    height="40px"
                  />
                  <h3 className="font-medium pl-3">Simon Dull</h3>
                </div>
              </li>
              <li className="w-96 bg-white p-3 rounded mb-3">
                <div className="flex items-center">
                  <Imagesd
                    src="/image 57.png"
                    className="rounded-full"
                    width="40px"
                    height="40px"
                  />
                  <h3 className="font-medium pl-3">Alexa Grey</h3>
                </div>
              </li>
              <li className="w-96 bg-white p-3 rounded mb-3">
                <div className="flex items-center">
                  <Imagesd
                    src="/image 57.png"
                    className="rounded-full"
                    width="40px"
                    height="40px"
                  />
                  <h3 className="font-medium pl-3">Alexa Grey</h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="border-r border-b border-l pl-48 border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal">
            <div className="mb-8 flex">
              <div className="text-gray-900 font-bold text-2xl mb-2">Role</div>
              <div className="flex justify-center">
                <div className="mb-3 xl:w-64 relative">
                  <select
                    className="form-select text-sm appearance-none
                    relative
      block
      w-64
      ml-5
      px-3
      py-1.5
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded-0
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                  >
                    <option selected>Admin</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="z-100 absolute -right-3 top-1"
                    fill="#ddd"
                    width="24"
                    height="24"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <ul className="kalapaoo">
                <li className="flex items-center">
                  <span className="text-sm text-gray-500 mr-5">
                    Create, edit and delete event
                  </span>
                  <FormGroup>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    />
                  </FormGroup>
                </li>
                <li className="flex items-center">
                  <span className="text-sm text-gray-500 mr-5">
                    Make and Requests payments
                  </span>
                  <FormGroup>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} />}
                    />
                  </FormGroup>
                </li>
                <li className="flex items-center">
                  <span className="text-sm text-gray-500 mr-5">
                    Comment and talk to guests and vendors
                  </span>
                  <FormGroup>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    />
                  </FormGroup>
                </li>
                <li className="flex items-center">
                  <span className="text-sm text-gray-500 mr-5">
                    View and analyze events
                  </span>
                  <FormGroup>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    />
                  </FormGroup>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
