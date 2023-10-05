import { Collapse } from "@/components/Collapse";

const collapsedLabel = "Развернуть";
const expandedLabel = "Свернуть";

const props = {
  collapsedLabel,
  expandedLabel,
};

export default function Home() {
  return (
    <>
      <Collapse {...props} />
    </>
  );
}
