// app/dashboard/page.js
async function getData() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    message: 'Hello, Dashboard!',
  };
}
export default async function DashboardPage(props) {
  const { message } = await getData();
  return <h1>{message}</h1>;
}
