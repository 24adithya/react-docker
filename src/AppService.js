import axios from "axios";
import AppServiceInstance from "./AppServiceInstance";

// Function to call the Spring service
export const callHelloService = async (name) => {
  try {
    // Make an HTTP GET request to the /hello endpoint with the name parameter
    const response = await AppServiceInstance.get(`/hello`, {
      params: {
        name: name,
      },
    });

    // Log or process the response from the Spring service
    console.log(response.data);

    return response;
  } catch (error) {
    // Handle errors
    console.error("Error calling Spring service:", error);
  }
};

export const callHelloMockService = async (name) => {
  try {
    // Make an HTTP GET request to the /hello endpoint with the name parameter
    const response = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: `Hello Mocked ${name}` });
      }, 2000);
    });

    // Log or process the response from the Spring service
    response.then((response) => console.log(response.data));

    return response;
  } catch (error) {
    // Handle errors
    console.error("Error calling Spring service:", error);
  }
};

// Example usage
// callSpringService('John');
