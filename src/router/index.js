import { createRouter, createWebHistory } from "vue-router";
import LoginMain from "@/views/LoginMain.vue";
import isAuth from "../middleware/isAuth"
import auth from "../middleware/auth"
import middlewarePipeline from "../middleware/middleware-pipeline";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "loginmain",
      component: LoginMain,
      meta: {
        middleware: [
          isAuth
        ]
      }
    },
    {
      path: "/admin",
      name: "Dashboard",
      // route level code-splitting
      // this generates a separate chunk (Dashboard.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/admin/DashboardView.vue"),
      meta: {
        middleware: [
          auth
        ]
      }
    },
    {
      path: "/admin/clients",
      name: "Clients",
      component: () => import("../views/admin/ClientsView.vue"),
      meta: {
        middleware: [
          auth
        ]
      }
    },
    {
      path: "/admin/accounts",
      name: "Accounts",
      component: () => import("../views/admin/AccountsView.vue"),
      meta: {
        middleware: [
          auth
        ]
      }
    },
    {
      path: "/admin/terms",
      name: "Terms",
      component: () => import("../views/admin/TermsView.vue"),
      meta: {
        middleware: [
          auth
        ]
      }
    },
    {
      path: "/admin/transactions",
      name: "Transactions",
      component: () => import("../views/admin/TransactionsView.vue"),
      meta: {
        middleware: [
          auth
        ]
      }
    },
    {
      path: "/admin/summary",
      name: "Summary",
      component: () => import("../views/admin/SummaryView.vue"),
      meta: {
        middleware: [
          auth
        ]
      }
    },
    {
      path: "/admin/iadashboard",
      name: "IA Dashboard",
      component: () => import("../views/admin/IADashboardView.vue"),
      meta: {
        middleware: [
          auth
        ]
      }
    },
    {
      path: "/admin/statements",
      name: "Statements",
      component: () => import("../views/admin/StatementsView.vue"),
      meta: {
        middleware: [
          auth
        ]
      }
    },
    {
      path: "/admin/interestReport",
      name: "Interest Report",
      component: () => import("../views/admin/InterestReportView.vue"),
      meta: {
        middleware: [
          auth
        ]
      }
    },
    {
      path: "/admin/auditTrail",
      name: "Audit Trail",
      component: () => import("../views/admin/AuditTrailView.vue"),
      meta: {
        middleware: [
          auth
        ]
      }
    },
    {
      path: "/admin/users",
      name: "Users",
      component: () => import("../views/admin/UsersView.vue"),
      meta: {
        middleware: [
          auth
        ]
      }
    },
    {
      path: "/admin/roles",
      name: "Roles",
      component: () => import("../views/admin/RolesView.vue"),
      meta: {
        middleware: [
          auth
        ]
      }
    },
    {
      path: "/admin/miscellaneous",
      name: "Miscellaneous",
      component: () => import("../views/admin/MiscellaneousView.vue"),
      meta: {
        middleware: [
          auth
        ]
      }
    },
    {
      path: "/admin/profile",
      name: "Profile",
      component: () => import("../views/admin/ProfileView.vue"),
      meta: {
        middleware: [
          auth
        ]
      }
    },

    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});

router.beforeEach((to, from, next) => {
  if(!to.meta.middleware) {
    return next()
  }

  const middleware = to.meta.middleware;
  const context = {
    to,
    from,
    next,
  }

  return middleware[0]({
    ...context,
    next:middlewarePipeline(context, middleware,1)
  })
})

export default router;
