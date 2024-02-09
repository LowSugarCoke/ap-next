import HeroSection from "../../components/HeroSection";
import Header from "../../components/Header";

export default function AICompetition() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Header />
      <HeroSection
        title={"AI course"}
        subTitle={
          "• Empower Your Future: Dive into Machine Learning Today, Shape Tomorrow's Innovations! "
        }
        content={[
          "• Learn to Machine, Earn the Future Scene",
          "• Code to Create, Learn to Innovate",
        ]}
        imgPath={"/ai-competition/background.png"}
      />
    </main>
  );
}
