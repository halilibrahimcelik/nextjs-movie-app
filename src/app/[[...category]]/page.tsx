import HomeContainer from "@/containers/home";
async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default async function Home() {
  await delay(200000);
  return <HomeContainer />;
}
