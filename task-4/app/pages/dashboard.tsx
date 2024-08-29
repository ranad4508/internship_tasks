import { GetServerSideProps } from "next";
import nookies from "nookies";

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Welcome to the protected dashboard page!</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = nookies.get(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Dashboard;
