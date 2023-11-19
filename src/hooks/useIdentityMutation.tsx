import { useMutation } from "@tanstack/react-query";
import { PersonData } from "../interfaces/person-data";

const postData = (data: PersonData) => {
  return axios.post("http://localhost:8080/send-data", data);
};

function useIdentityMutation() {
  const { mutate, isError, isLoading, isSuccess } = useMutation({
    mutationFn: (data: PersonData) => postData(data),
  });

  return {
    mutate,
    isLoading,
    isSuccess,
    isError,
  };
}

export default useIdentityMutation;
