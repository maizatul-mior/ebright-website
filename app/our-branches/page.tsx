import type { Metadata } from "next";
import FindAClass from "../components/FindAClass";
import GrowingHistoryCta from "../components/GrowingHistoryCta";

export const metadata: Metadata = {
  title: "Our Branches — Ebright Public Speaking Academy",
  description:
    "Find an Ebright class near you. Physical locations across Klang Valley and structured virtual classrooms on Zoom — premium kids' public speaking training is always within reach.",
};

export default function OurBranches() {
  return (
    <>
      <FindAClass />
      <GrowingHistoryCta />
    </>
  );
}
