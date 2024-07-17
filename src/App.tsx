import Layout from './Components/Layout';
import LoginPage from './Pages/LoginPage';
import ChatPage from './Pages/Chat';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css';
type AuthRouteProps = {
  component: React.ComponentType;
};
const AuthRoute = ({ component }: AuthRouteProps) => {
  let Component = component;

  return <Component />;
};
export const router = createBrowserRouter([

  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },

  {
    path: "/",
    element: <Layout />,
    children: [

      { path: "/", element: <AuthRoute component={ChatPage} /> },
      {
        path: "/ask-me-anything",
        element: <AuthRoute component={ChatPage} />,
      },
    ]
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
