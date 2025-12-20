import { Outlet } from "react-router-dom";

export default function SimpleLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}
