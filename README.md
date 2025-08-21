# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

// const newOrder = {
// status: "success",
// data: {
// cart: cart,
// customer: nameValue,
// estimatedDelivery: "2025-08-16T14:35:14.918Z",
// id: generateCode(),
// orderPrice: 72,
// priority: false,
// priorityPrice: 0,
// status: "preparing",
// },
// };

// const object = {
// address: "obiliceva 14",
// cart: [
// {
// pizzaId: 1,
// name: "Margherita",
// quantity: 1,
// unitPrice: 12,
// totalPrice: 12,
// addIngredients: [],
// },
// ],
// createdAt: "2025-08-16T21:05:25.813Z",
// customer: "sara",
// estimatedDelivery: "2025-08-16T22:12:25.813Z",
// id: "CTQ07C",
// orderPrice: 73,
// phone: "+381 61 1361730",
// position: "",
// priority: false,
// priorityPrice: 0,
// status: "preparing",
// };

// const newOrder = {
// address: addressValue,
// cart: cart,
// customer: nameValue,
// phone: telValue,
// position: "",
// priority: false,
// };

/////////////////////////////////////////////////////////////////

import { useGeolocated } from "react-geolocated";

// const [lat, setLat] = useState(null);
// const [long, setLong] = useState(null);

// const geolocationAPI = navigator.geolocation;
// const getUserCoordinates = () => {
// if (!geolocationAPI) {
// console.log("Geolocation API is not available in your browser!");
// } else {
// geolocationAPI.getCurrentPosition(
// (position) => {
// const { coords } = position;
// setLat(coords.latitude);
// setLong(coords.longitude);
// codeLatLng(coords.latitude, coords.longitude);
// },
// (error) => {
// console.log("Something went wrong getting your position!");
// }
// );
// }
// };

//////////////////////////////////////////////////////////////////////////////////////////////////
const fetchPost = async () => {
try {
const response = await fetch(
`https://react-fast-pizza-api.onrender.com/api/order`,
{
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(newOrder),
}
);
console.log(response.status);
const data = await response.json();

      // if (!response.ok) {
      //   // console.log(data.description);
      //   toast.error("Error, something went wrong");
      //   return;
      // }

      console.log(data);
      toast.error(data.message);
      navigate(`/order/${data.data.id}`);
    } catch (error) {
      console.log(error.response);
      // toast.error("Error, something went wrong");
      // let errorJson = JSON.parse(error);
      // console.log(errorJson);
    }

};
