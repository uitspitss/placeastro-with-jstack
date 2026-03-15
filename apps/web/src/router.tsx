import { getSession } from '@/lib/auth-client';
import LandingPage from '@/routes/index';
import LoginPage from '@/routes/login';
import UploadPage from '@/routes/upload';
import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from '@tanstack/react-router';

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LandingPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
});

const uploadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/upload',
  beforeLoad: async () => {
    const { data: session } = await getSession();
    if (!session) {
      throw redirect({ to: '/login' });
    }
  },
  component: UploadPage,
});

const signUpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/sign-up',
  beforeLoad: async () => {
    // NOTE: ユーザーの新規追加をしないので、/sign-up は閉じる
    throw redirect({ to: '/' });
  },
  component: () => null,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  uploadRoute,
  signUpRoute,
]);

const basepath = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';
export const router = createRouter({ routeTree, basepath });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
