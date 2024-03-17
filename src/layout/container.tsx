import Container from "@mui/material/Container";

import { ReactNode } from "react";

type Size = "xs" | "sm" | "md" | "lg" | "xl" | false;

interface Props {
  children: ReactNode;
  size: Size;
}
interface Props {
  children: ReactNode;
  size: Size;
}

function ContainerBootstrap({ children, size }: Props) {
  return <Container maxWidth={size}>{children}</Container>;
}

export default ContainerBootstrap;
