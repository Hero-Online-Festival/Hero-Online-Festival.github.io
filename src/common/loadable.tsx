import Loadable from "react-loadable";

export const loadable = (loader: any) =>
  Loadable({
    loader,
    loading: () => <></>,
  });
