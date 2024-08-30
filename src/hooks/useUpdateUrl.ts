import { useSearchParams } from "react-router-dom";

export const useUpdateUrl = () => {
  const [searchParams, setSearchParams] = useSearchParams();
};
