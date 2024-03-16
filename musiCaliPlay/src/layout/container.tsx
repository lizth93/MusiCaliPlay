import Container from "@mui/material/Container";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ContainerBootstrap({ children }: Props) {
  return <Container maxWidth="lg">{children}</Container>;
}

export default ContainerBootstrap;
